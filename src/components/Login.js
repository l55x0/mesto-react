import React, { useState, useEffect } from 'react';

const Login = ({ onLogin }) => {
  // Дефолтное значение инпутов
  const initialData = {
    email: '',
    password: '',
  };

  // Дефолтное значение валидации
  const initialInputsValid = {
    email: false,
    password: false
  };

  // Дефолтное значение ошибок валидации и сабмита
  const initialErrorsValid = {
    email: '',
    password: ''
  };

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
    !validationsInputs.email || !validationsInputs.password
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

    onLogin(data)
      .then(resetForm)
      .catch(err => {
        console.log(err.message || 'Что то пошло не так')
      })
  }

  return (
    <main className="login content page__content">
      <div className="login__container">
        <h2 className="login__title">Вход</h2>
        <form
          className="login__form"
          name="form"
          id="form-with-login"
          onSubmit={handleSubmit}>
          <input
            className={`login__input login__input_type_email
        ${!validationsInputs.email
                ? 'login__input_state_invalid'
                : ''
              }`}
            type="email"
            placeholder="Email"
            name="email"
            id="login-input-email"
            maxLength="100"
            value={data.email}
            onChange={handleChange}
            required
          />
          <span
            id="login-input-email-error"
            className="login__error">
            {errorsValid.email}
          </span>

          <input
            className={`login__input login__input_type_password
        ${!validationsInputs.password
                ? 'login__input_state_invalid'
                : ''
              }`}
            type="password"
            placeholder="Пароль"
            name="password"
            id="login-input-password"
            maxLength="50"
            value={data.password}
            onChange={handleChange}
            required
          />
          <span
            id="login-input-password-error"
            className="login__error">
            {errorsValid.password}
          </span>

          <button
            className={`button login__button-submit 
            ${!validationForm
                ? 'login__button-submit_invalid'
                : ''
              }`}
            type="submit">
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;