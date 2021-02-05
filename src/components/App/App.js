import { useState } from 'react';
import logo from '../../images/Logo.svg';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isOpen: false });

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ isOpen: false })
  }

  const handleCardClick = (data) => {
    setSelectedCard({ isOpen: true, ...data })
  }

  return (
    <div className={"page__container"}>
      <Header
        srcLogo={logo}
        altLogo={"Логотип Маста России"}
      />

      <Main
        altAvatar={"Изображение Автора"}
        onEditProfile={() => { setIsEditProfilePopupOpen(true) }}
        onAddPlace={() => { setIsAddPlacePopupOpen(true) }}
        onEditAvatar={() => { setIsEditAvatarPopupOpen(true) }}
        onCardClick={(data) => { handleCardClick(data) }}
      />

      <Footer text={"2020 Mesto Russia Lod55"} />

      <PopupWithForm
        name={"popup-profile"}
        title={"Редактировать профиль"}
        textButton={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={() => { closeAllPopups() }}
      >
        <input className={"popup__input popup__input_type_author"} type={"text"} placeholder={"Ваше имя"}
          name={"popup-input-name"} minLength={"2"} maxLength={"40"} required />
        <span id={"popup-input-name-error"} className={"popup__error"}></span>
        <input className={"popup__input popup__input_type_status"} type={"text"} placeholder={"Расскажите о себе"}
          name={"popup-input-status"} minLength={"2"} maxLength={"200"} required />
        <span id={"popup-input-status-error"} className={"popup__error"}></span>
      </PopupWithForm>

      <PopupWithForm
        name={"popup-add-card"}
        title={"Новое место"}
        textButton={"Создать"}
        isOpen={isAddPlacePopupOpen}
        onClose={() => { closeAllPopups() }}
      >
        <input className="popup__input popup__input_type_place-name" type="text" placeholder="Название"
          name="popup-input-place-name" minLength="2" maxLength="30" required />
        <span id="popup-input-place-name-error" className="popup__error"></span>
        <input className="popup__input popup__input_type_photo" type="url" placeholder="Ссылка на картинку"
          name="popup-input-url" required />
        <span id="popup-input-url-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name={"popup-add-avatar"}
        title={"Обновить аватар"}
        textButton={"Обновить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={() => { closeAllPopups() }}
      >
        <input className="popup__input popup__input_type_photo" type="url" placeholder="Ссылка на аватар"
          name="popup-input-url-avatar" required />
        <span id="popup-input-url-avatar-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name={"popup-remove-card"}
        title={"Вы уверены?"}
        textButton={"Да"}
      />

      <ImagePopup
        card={selectedCard}
        onClose={() => { closeAllPopups() }}
      />
    </div>
  );
}

export default App;
