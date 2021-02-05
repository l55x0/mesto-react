import api from '../utils/Api.js'
import { useEffect, useState } from 'react';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = useState('Loading...');
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.getInfoUser()
      .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  useEffect(() => {
    setIsLoading(true)
    api.getInitialCards()
      .then(res => {
        const cards = res.map(item => {
          return {
            id: item._id,
            src: item.link,
            title: item.name,
            likes: item.likes.length
          }
        })
        setCards(cards)
      })
      .catch(err => console.log(`Error: ${err}`))
      .finally(() => setIsLoading(false))
  }, []);

  return (
    <main className={"content page__content"}>
      <section className={"profile content__item"}>
        <div className={"profile__overlay"} onClick={props.onEditAvatar}>
          <img src={userAvatar} alt={props.altAvatar} className={"profile__avatar"} />
        </div>
        <div className={"profile__text-block"}>
          <div className={"profile__row-block"}>
            <h1 className={"profile__author"}>{userName}</h1>
            <button className={"button profile__button-edit"} type={"button"} onClick={props.onEditProfile}></button>
          </div>
          <p className={"profile__status"}>{userDescription}</p>
        </div>
        <button className={"button profile__button-add"} type={"button"} onClick={props.onAddPlace}></button>
      </section>
      {isLoading
        ? <p>Loading...</p>
        : (<section className={"places content__item"}>
          {cards.map(item =>
            <Card
              key={item.id}
              {...item}
              handleClick={() => { props.onCardClick(item) }}
            />)}
        </section>)
      }
    </main>
  );
}

export default Main;
