import api from '../utils/Api.js'
import { useEffect, useState } from 'react';

function Main(props) {
  const [userName, getUserName] = useState();
  const [userDescription, getUserDescription] = useState();
  const [userAvatar, getUserAvatar] = useState();

  useEffect(() => {
    api.getInfoUser()
      .then(res => {
        getUserName(res.name)
        getUserDescription(res.about)
        getUserAvatar(res.avatar)
      }, [])
      .catch(err => console.log(`Error: ${err}`));
  });

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
      <section className={"places content__item"}>
      </section>
    </main>
  );
}

export default Main;
