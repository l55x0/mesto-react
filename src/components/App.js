import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

// popup components
import InfoTooltip from './InfoTooltip';

// pages components
import ProtectedRoute from "./ProtectedRoute"
import Register from './Register';
import Login from './Login';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// api
import * as auth from '../utils/auth';
import api from '../utils/api.js'

const App = () => {
  // Дефолтные значение данных пользователя для api/auth
  const initialData = {
    email: ''
  }

  // Стейт переменные компонента
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState(initialData);
  const [isSuccess, setIsSuccess] = useState(false);

  const history = useHistory();

  // функция закрытия попапа
  const closePopup = () => {
    setIsInfoTooltipPopupOpen(false)
  }


  // ---------- Функции основного Api ----------
  // Проверка наличия ответа сервера
  const responseCheck = (res) => {
    if (!res) throw new Error(`Error: ${res.message}`);
  }

  // Отправка информации на сервер
  const handleUpdateUser = (data) => {
    return api.setInfoUser(data)
      .then(res => {
        responseCheck(res);
        setCurrentUser(res);
        return res;
      })
  }

  // Изменение аватара на сервере и отрисовка
  const handleUpdateAvatar = (src) => {
    return api.setUserAvatar(src)
      .then(res => {
        responseCheck(res);
        setCurrentUser(res);
        return res;
      })
  }

  // Добавление новой карточки на сервер и отрисовка
  const handleAddPlaceSubmit = ({ name, link }) => {
    return api.setCard({ name, link })
      .then(res => {
        responseCheck(res);
        setCards([res, ...cards]);
        return res;
      })
  }

  // Контоль состояния лайка и работа с состоянием на сервере
  const handleCardLike = (card) => {
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    return api.changeLikeCardStatus(card._id, isLiked)
      .then(res => {
        responseCheck(res);
        setCards(state => state.map(item => item._id === card._id ? res : item));
        return res;
      })
  }

  // Удаления карточки с сервера
  const handleCardDelete = (useCardId) => {
    return api.removeCard(useCardId)
      .then(res => {
        responseCheck(res);
        setCards(state => state.filter(item => item._id === useCardId ? null : item));
        return res;
      })
  }

  useEffect(() => {
    setIsLoading(true)
    api.getInitialCards()
      .then(res => {
        setCards(res)
      })
      .catch(err => console.log(`Error: ${err}`))
      .finally(() => setIsLoading(false))
  }, []);

  useEffect(() => {
    api.getInfoUser()
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  // ---------- Функции запросов api/auth ----------
  // Проверка токена пользователя на подленность на сервере
  // проверка, что пользователь уже авторизован
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      setIsAuthChecking(true);
      auth.getContent(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setData({
              email: res.data.email
            })
            history.push('/mesto');
          }
        })
        .catch(() => history.push('/sign-in'))
        .finally(() => setIsAuthChecking(false))
    } else {
      setIsAuthChecking(false)
    }
  }, [history])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck])

  // Регистрации пользователя на сервере
  const handleRegister = ({ password, email }) => {
    return auth.register({ password, email })
      .then(res => {
        if (!res || res.statusCode === 400) throw new Error(`Ошибка: ${res.message}`);
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(true);
        history.push('/sign-in')
        return res;
      })
      .catch(err => {
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(false);
        return err;
      })
  }

  // Авторизации пользователя
  const handleLogin = ({ password, email }) => {
    return auth.authorize({ password, email })
      .then(res => {
        if (!res || res.statusCode === 400 || res.statusCode === 401) throw new Error(`Ошибка: ${res.message}`);
        if (res.token) {
          setIsInfoTooltipPopupOpen(true);
          setIsSuccess(true);
          setLoggedIn(true);
          localStorage.setItem('jwt', res.token);
        };
      })
      .then(tokenCheck)
      .catch(err => {
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(false);
        return err;
      })
  }

  // Выход из системы
  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setData(initialData);
    setLoggedIn(false);
    history.push('/sign-in');
  }

  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
          onSignOut={handleSignOut}
          userEmail={data.email}
        />

        <Switch>
          <ProtectedRoute
            path="/mesto"
            loggedIn={loggedIn}
            isChecking={isAuthChecking}
            exact>
            <Main
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              onAddPlaceSubmit={handleAddPlaceSubmit}
              onUpdateAvatar={handleUpdateAvatar}
              onUpdateUser={handleUpdateUser}
              cards={cards}
              isLoading={isLoading}
            />
          </ProtectedRoute>

          <Route path='/sign-in' exact>
            <Login onLogin={handleLogin} />
          </Route>

          <Route path='/sign-up' exact>
            <Register onRegister={handleRegister} />
          </Route>

          <Route path="*">
            {loggedIn
              ? <Redirect to="/mesto" />
              : <Redirect to="/sign-in" />}
          </Route>
        </Switch>

        <Footer />

        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closePopup}
          isSuccess={isSuccess}
        />

      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;

