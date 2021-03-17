import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from "../hooks/useFormWithValidation";

const EditProfilePopup = (props) => {
  // Диструктуризированная переменная с пропсами
  const {
    onUpdateUser,
    isOpen,
    onClose
  } = props;

  // Используем пользовательский Хук
  const {
    values,
    handleChange,
    resetFrom,
    errors,
    isValid,
    isValidInputs
  } = useFormWithValidation();

  // Контекст с данными о пользователе
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      resetFrom({
        name: currentUser.name,
        about: currentUser.about
      }, {}, false, {});
    }
  }, [currentUser, resetFrom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values)
  }

  return (
    <PopupWithForm
      name="popup-profile"
      title="Редактировать профиль"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <input
        className={`popup__input popup__input_type_author 
        ${isValidInputs.name
            ? 'popup__input_state_valid'
            : ''
          }`}
        type="text"
        placeholder="Ваше имя"
        id="popup-input-name"
        name='name'
        minLength="2"
        maxLength="40"
        value={values.name || ""}
        onChange={handleChange}
        required
      />
      <span
        id="popup-input-name-error"
        className="popup__error">
        {errors.name || ""}
      </span>

      <input
        className={`popup__input popup__input_type_status 
        ${isValidInputs.about
            ? 'popup__input_state_valid'
            : ''
          }`}
        type="text"
        placeholder="Расскажите о себе"
        id="popup-input-status"
        name='about'
        minLength="2"
        maxLength="200"
        value={values.about || ""}
        onChange={handleChange}
        required
      />
      <span
        id="popup-input-status-error"
        className="popup__error">
        {errors.about || ""}
      </span>

    </PopupWithForm>
  );
}

export default EditProfilePopup;
