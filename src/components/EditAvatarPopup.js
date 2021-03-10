import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = (props) => {
  // Диструктуризированная переменная с пропсами
  const {
    onUpdateAvatar,
    isOpen,
    onClose
  } = props;

  // Стейты компонента
  const [inputValue, setInputValue] = useState('');
  const [validationInput, setValidationInput] = useState(false);
  const [validationForm, setValidationForm] = useState(false);
  const [errorValid, setErrorValid] = useState('');

  // Функции компонента
  // --Проверка валидности формы 
  // --Проверка валидности инпуты
  // --Ресет формы 
  // --Закрытие формы
  // --Сабмит формы 

  const checkFormValid = () => {
    !validationInput
      ? setValidationForm(false)
      : setValidationForm(true);
  }

  // Контроль состояния инпута
  useEffect(checkFormValid, [validationInput])

  const handleChange = (e) => {
    const { value, validity, validationMessage } = e.target;

    setInputValue(value);
    setValidationInput(validity.valid);
    setErrorValid(validationMessage);
  }

  const resetForm = () => {
    setInputValue('');
    setValidationInput(false);
    setValidationForm(false);
    setErrorValid('');
  }

  const handleClose = () => {
    onClose()
    resetForm()
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar(inputValue)
    resetForm();
  }

  return (
    <PopupWithForm
      name="add-avatar"
      title="Обновить аватар"
      textButton="Обновить"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      validationForm={validationForm}
    >
      <input
        className={`popup__input popup__input_type_photo 
        ${!validationInput
            ? ('popup__input_state_invalid')
            : ('')
          }`}
        type="url"
        placeholder="Ссылка на аватар"
        name='avatar'
        id="popup-input-url-avatar"
        onChange={handleChange}
        minLength="7"
        maxLength="300"
        value={inputValue}
        required
      />
      <span
        id="popup-input-url-avatar-error"
        className="popup__error">
        {errorValid}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

