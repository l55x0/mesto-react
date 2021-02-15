import api from '../utils/api.js'
import { useEffect, useState, useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setIsLoading(true)
    api.getInitialCards()
      .then(res => {
        setCards(res)
      })
      .catch(err => console.log(`Error: ${err}`))
      .finally(() => setIsLoading(false))
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then(res => {
        const newCards = cards.map(item => item._id === card._id ? res : item);
        setCards(newCards);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(res => {
        const newCards = cards.filter(item => item._id === card._id ? null : item);
        setCards(newCards);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  return (
    <main className={"content page__content"}>
      <section className={"profile content__item"}>
        <div className={"profile__overlay"} onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt={props.altAvatar} className={"profile__avatar"} />
        </div>
        <div className={"profile__text-block"}>
          <div className={"profile__row-block"}>
            <h1 className={"profile__author"}>{currentUser.name}</h1>
            <button className={"button profile__button-edit"} type={"button"} onClick={props.onEditProfile}></button>
          </div>
          <p className={"profile__status"}>{currentUser.about}</p>
        </div>
        <button className={"button profile__button-add"} type={"button"} onClick={props.onAddPlace}></button>
      </section>
      {isLoading
        ? <p>Loading...</p>
        : (<section className={"places content__item"}>
          {cards.map(item => (
            <Card
              key={item._id}
              card={item}
              handleClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          )
          )}
        </section>)
      }
    </main>
  );
}

export default Main;
