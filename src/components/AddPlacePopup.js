import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [inputName, setInputName] = useState('');
  const [inputLink, setInputLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: inputName,
      link: inputLink
    });

    setInputName('');
    setInputLink('');
  }

  function handleChangeName(e) {
    setInputName(e.target.value);
  }

  function handleChangeLink(e) {
    setInputLink(e.target.value);
  }

  return (
    <PopupWithForm
      name={"popup-add-card"}
      title={"Новое место"}
      textButton={"Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_place-name"
        type="text"
        placeholder="Название"
        name="popup-input-place-name"
        minLength="2"
        maxLength="30"
        value={inputName}
        onChange={handleChangeName}
        required
      />
      <span id="popup-input-place-name-error" className="popup__error"></span>
      <input
        className="popup__input popup__input_type_photo"
        type="url" placeholder="Ссылка на картинку"
        name="popup-input-url"
        value={inputLink}
        onChange={handleChangeLink}
        required
      />
      <span id="popup-input-url-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;