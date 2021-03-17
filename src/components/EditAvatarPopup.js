import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from "../hooks/useFormWithValidation";

const EditAvatarPopup = (props) => {
  // Диструктуризированная переменная с пропсами
  const {
    onUpdateAvatar,
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

  // Контроль за открытием попапа и ресетом
  useEffect(() => {
    resetFrom()
  }, [isOpen, resetFrom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar(values)
  }

  return (
    <PopupWithForm
      name="add-avatar"
      title="Обновить аватар"
      textButton="Обновить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <input
        className={`popup__input popup__input_type_photo 
        ${isValidInputs.avatar
            ? ('popup__input_state_valid')
            : ('')
          }`}
        type="url"
        placeholder="Ссылка на аватар"
        name='avatar'
        id="popup-input-url-avatar"
        minLength="7"
        maxLength="300"
        value={values.avatar || ""}
        onChange={handleChange}
        required
      />
      <span
        id="popup-input-url-avatar-error"
        className="popup__error">
        {errors.avatar || ""}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

