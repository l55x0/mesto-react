import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [avatar, setAvatar] = useState(currentUser.avatar);

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar,
    });
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
        required
      />
      <span id={"popup-input-url-avatar-error"} className={"popup__error"}></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

