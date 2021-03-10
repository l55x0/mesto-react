import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = (props) => {
  // Диструктуризированная переменная с пропсами
  const {
    onAddPlace,
    isOpen,
    onClose
  } = props;

  // Дефолтное значение инпутов
  const initialData = {
    name: '',
    link: ''
  };

  // Дефолтное значение валидации инпутов
  const initialInputsValid = {
    name: false,
    link: false
  }

  // Дефолтное значение ошибок валидации и сабмита
  const initialErrorsValid = {
    name: '',
    link: ''
  }

  // Стейты компонента
  const [data, setData] = useState(initialData);
  const [validationsInputs, setValidationsInputs] = useState(initialInputsValid);
  const [validationForm, setValidationForm] = useState(false);
  const [errorsValid, setErrorsValid] = useState(initialErrorsValid);

  // Функции компонента
  // --Проверка валидности формы 
  // --Проверка валидности инпуты
  // --Ресет формы 
  // --Закрытие формы
  // --Сабмит формы 
  const checkFormValid = () => {
    !validationsInputs.name || !validationsInputs.link
      ? setValidationForm(false)
      : setValidationForm(true);
  }

  // Контроль состояния инпутов
  useEffect(checkFormValid, [validationsInputs])

  const handleChange = (e) => {
    const { name, value, validity, validationMessage } = e.target;

    setData(data => ({
      ...data,
      [name]: value,
    }));

    setValidationsInputs(data => ({
      ...data,
      [name]: validity.valid
    }));

    setErrorsValid(data => ({
      ...data,
      [name]: validationMessage,
    }));
  }

  const resetForm = () => {
    setData(initialData);
    setValidationsInputs(initialInputsValid);
    setValidationForm(false);
    setErrorsValid(initialErrorsValid);
  }

  const handleClose = () => {
    onClose()
    resetForm()
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace(data)
    resetForm()
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      textButton="Создать"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      validationForm={validationForm}
    >
      <input
        className={`popup__input popup__input_type_place-name 
        ${!validationsInputs.name
            ? ('popup__input_state_invalid')
            : ('')
          }`}
        type="text"
        placeholder="Название"
        name="name"
        id="popup-input-place-name"
        minLength="2"
        maxLength="30"
        value={data.name}
        onChange={handleChange}
        required
      />
      <span
        id="popup-input-place-name-error"
        className="popup__error">
        {errorsValid.name}
      </span>

      <input
        className={`popup__input popup__input_type_photo 
        ${!validationsInputs.link
            ? ('popup__input_state_invalid')
            : ('')
          }`}
        type="url"
        placeholder="Ссылка на картинку"
        id="popup-input-url"
        name="link"
        minLength="7"
        maxLength="300"
        value={data.link}
        onChange={handleChange}
        required
      />
      <span
        id="popup-input-url-error"
        className="popup__error">
        {errorsValid.link}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;