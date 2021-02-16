import { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
  const currentUser = useContext(CurrentUserContext);

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
      {props.isLoading
        ? <p>Loading...</p>
        : (<section className={"places content__item"}>
          {props.cards.map(item => (
            <Card
              key={item._id}
              card={item}
              handleClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          )
          )}
        </section>)
      }
    </main>
  );
}

export default Main;
