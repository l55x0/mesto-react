import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from "../hooks/useFormWithValidation";

const AddPlacePopup = (props) => {
  // Диструктуризированная переменная с пропсами
  const {
    onAddPlace,
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
    onAddPlace(values)
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <input
        className={`popup__input popup__input_type_place-name 
        ${isValidInputs.name
            ? ('popup__input_state_valid')
            : ('')
          }`}
        type="text"
        placeholder="Название"
        name="name"
        id="popup-input-place-name"
        minLength="2"
        maxLength="30"
        value={values.name || ""}
        onChange={handleChange}
        required
      />
      <span
        id="popup-input-place-name-error"
        className="popup__error">
        {errors.name || ""}
      </span>

      <input
        className={`popup__input popup__input_type_photo 
        ${isValidInputs.link
            ? ('popup__input_state_valid')
            : ('')
          }`}
        type="url"
        placeholder="Ссылка на картинку"
        id="popup-input-url"
        name="link"
        minLength="7"
        maxLength="300"
        value={values.link || ""}
        onChange={handleChange}
        required
      />
      <span
        id="popup-input-url-error"
        className="popup__error">
        {errors.link || ""}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;