import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/api.js'
import logo from '../images/Logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';


function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Loading...',
    about: ''
  });

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isOpen: false });

  useEffect(() => {
    api.getInfoUser()
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ isOpen: false })
  }

  const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true) }
  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true) }
  const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) }
  const handleCardClick = (data) => { setSelectedCard({ isOpen: true, ...data }) }

  function handleUpdateUser({ name, about }) {
    api.setInfoUser({ name, about })
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  function handleUpdateAvatar({ avatar }) {
    api.setUserAvatar({ avatar })
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  return (
    <div className={"page__container"}>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          srcLogo={logo}
          altLogo={"Логотип Маста России"}
        />

        <Main
          altAvatar={"Изображение Автора"}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer text={"2020 Mesto Russia Lod55"} />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          name={"popup-add-card"}
          title={"Новое место"}
          textButton={"Создать"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__input popup__input_type_place-name" type="text" placeholder="Название"
            name="popup-input-place-name" minLength="2" maxLength="30" required />
          <span id="popup-input-place-name-error" className="popup__error"></span>
          <input className="popup__input popup__input_type_photo" type="url" placeholder="Ссылка на картинку"
            name="popup-input-url" required />
          <span id="popup-input-url-error" className="popup__error"></span>
        </PopupWithForm>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          name={"popup-remove-card"}
          title={"Вы уверены?"}
          textButton={"Да"}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>

  );
}

export default App;
