import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ onRegister }) => {
  // Дефолтное значение инпутов
  const initialData = {
    email: '',
    password: '',
    confirmation: ''
  };

  // Дефолтное значение валидации
  const initialInputsValid = {
    email: false,
    password: false,
    confirmation: false
  }

  // Дефолтное значение ошибок валидации и сабмита
  const initialErrorsValid = {
    email: '',
    password: '',
    confirmation: ''
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
    !validationsInputs.email || !validationsInputs.password || !validationsInputs.confirmation
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверяем совпадение паролей
    if (data.password !== data.confirmation) {

      setValidationsInputs((data) => ({
        ...data,
        password: false,
        confirmation: false
      }));

      setData((data) => ({
        ...data,
        password: '',
        confirmation: ''
      }));

      setErrorsValid((data) => ({
        ...data,
        password: 'Пароли не совпадают',
        confirmation: 'Пароли не совпадают'
      }));
      return;
    }

    // Запрос на сервер и обработка результата
    onRegister(data)
      .then(resetForm)
      .catch(err => {
        console.log(err.message || 'Что то пошло не так')
      })
  }

  return (
    <main className="register content page__content">
      <div className="register__container">
        <h2 className="register__title">Регистрация</h2>
        <form
          className="register__form"
          name="form"
          id="form-with-register"
          onSubmit={handleSubmit}>

          <input
            className={`register__input register__input_type_email
        ${!validationsInputs.email
                ? 'register__input_state_invalid'
                : ''
              }`}
            type="email"
            placeholder="Email"
            name="email"
            id="register-input-email"
            minLength="2"
            maxLength="100"
            value={data.email}
            onChange={handleChange}
            required
          />
          <span
            id="register-input-email-error"
            className="register__error">
            {errorsValid.email}
          </span>

          <input
            className={`register__input register__input_type_password
        ${!validationsInputs.password
                ? 'register__input_state_invalid'
                : ''
              }`}
            type="password"
            placeholder="Пароль"
            name="password"
            id="register-input-password"
            minLength="6"
            maxLength="50"
            value={data.password}
            onChange={handleChange}
            required
          />
          <span
            id="register-input-password-error"
            className="register__error">
            {errorsValid.password}
          </span>

          <input
            className={`register__input register__input_type_confirm-password
        ${!validationsInputs.confirmation
                ? 'register__input_state_invalid'
                : ''
              }`}
            type="password"
            placeholder="Подтвердите пароль"
            name="confirmation"
            id="register-input-confirm-password"
            minLength="2"
            maxLength="50"
            value={data.confirmation}
            onChange={handleChange}
            required
          />
          <span
            id="register-input-confirm-password-error"
            className="register__error">
            {errorsValid.confirmation}
          </span>

          <button
            className={`button register__button-submit 
            ${!validationForm
                ? 'register__button-submit_invalid'
                : ''
              }`}
            type="submit">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__signin">
          <p>Уже зарегистрированы? <Link to="/sign-in" className="register__login-link">Войти</Link></p>
        </div>
      </div>
    </main>
  );
}

export default Register;