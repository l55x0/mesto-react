import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
    inputRef.current.value = '';
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
        ref={inputRef}
        required
      />
      <span id={"popup-input-url-avatar-error"} className={"popup__error"}></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

