import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const [inputValue, setInputValue] = useState('');

  function handleChangeAvatar(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputValue,
    });
    setInputValue('');
  }

  return (
    <PopupWithForm
      name={"popup-add-avatar"}
      title={"Обновить аватар"}
      textButton={"Обновить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className={"popup__input popup__input_type_photo"}
        type={"url"}
        placeholder={"Ссылка на аватар"}
        name={"popup-input-url-avatar"}
        onChange={handleChangeAvatar}
        value={inputValue}
        required
      />
      <span id={"popup-input-url-avatar-error"} className={"popup__error"}></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

