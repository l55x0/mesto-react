import React, { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

const EditProfilePopup = (props) => {
  // Диструктуризированная переменная с пропсами
  const {
    onUpdateUser,
    isOpen,
    onClose
  } = props;

  // Контекст с данными о пользователе
  const currentUser = useContext(CurrentUserContext);

  // Дефолтное значение инпутов
  const initialData = {
    author: currentUser.name || '',
    about: currentUser.about || ''
  };

  // Дефолтное значение валидации
  const initialInputsValid = {
    author: false,
    about: false
  }

  // Дефолтное значение ошибок валидации и сабмита
  const initialErrorsValid = {
    author: '',
    about: ''
  }

  // Стейты компонента
  const [data, setData] = useState(initialData);
  const [validationsInputs, setValidationsInputs] = useState(initialInputsValid);
  const [validationForm, setValidationForm] = useState(false);
  const [errorsValid, setErrorsValid] = useState(initialErrorsValid);

  // --Хук Юз Эффект для отображения актуальных данных о пользователе
  useEffect(() => {
    setData(data => ({
      author: currentUser.name || '',
      about: currentUser.about || ''
    }));
  }, [currentUser]);

  // Функции компонента
  // --Проверка валидности формы 
  // --Проверка валидности инпуты
  // --Ресет формы 
  // --Закрытие формы
  // --Сабмит формы
  const checkFormValid = () => {
    !validationsInputs.author || !validationsInputs.about
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
      [name]: validity.valid,
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

    onUpdateUser(data)
    resetForm()
  }

  return (
    <PopupWithForm
      name="popup-profile"
      title="Редактировать профиль"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      validationForm={validationForm}
    >
      <input
        className={`popup__input popup__input_type_author 
        ${!validationsInputs.author
            ? 'popup__input_state_invalid'
            : ''
          }`}
        type="text"
        placeholder="Ваше имя"
        id="popup-input-name"
        name='author'
        minLength="2"
        maxLength="40"
        value={data.author}
        onChange={handleChange}
        required
      />
      <span
        id="popup-input-name-error"
        className="popup__error">
        {errorsValid.author}
      </span>

      <input
        className={`popup__input popup__input_type_status 
        ${!validationsInputs.about
            ? 'popup__input_state_invalid'
            : ''
          }`}
        type="text"
        placeholder="Расскажите о себе"
        id="popup-input-status"
        name='about'
        minLength="2"
        maxLength="200"
        value={data.about}
        onChange={handleChange}
        required
      />
      <span
        id="popup-input-status-error"
        className="popup__error">
        {errorsValid.about}
      </span>

    </PopupWithForm>
  );
}

export default EditProfilePopup;
