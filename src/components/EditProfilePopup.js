import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [inputName, setInputName] = useState(currentUser.name);
  const [inputAbout, setInputAbout] = useState(currentUser.about);

  useEffect(() => {
    setInputName(currentUser.name);
    setInputAbout(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: inputName,
      about: inputAbout
    });
  }

  function handleChangeName(e) {
    setInputName(e.target.value);
  }

  function handleChangeAbout(e) {
    setInputAbout(e.target.value);
  }

  return (
    <PopupWithForm
      name={"popup-profile"}
      title={"Редактировать профиль"}
      textButton={"Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className={"popup__input popup__input_type_author"}
        type={"text"}
        placeholder={"Ваше имя"}
        name={"popup-input-name"}
        minLength={"2"}
        maxLength={"40"}
        value={inputName}
        onChange={handleChangeName}
        required
      />
      <span id={"popup-input-name-error"} className={"popup__error"}></span>
      <input
        className={"popup__input popup__input_type_status"}
        type={"text"}
        placeholder={"Расскажите о себе"}
        name={"popup-input-status"}
        minLength={"2"}
        maxLength={"200"}
        value={inputAbout}
        onChange={handleChangeAbout}
        required
      />
      <span id={"popup-input-status-error"} className={"popup__error"}></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
