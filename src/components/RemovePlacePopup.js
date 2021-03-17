import React from 'react';
import PopupWithForm from './PopupWithForm';

const RemovePlacePopup = (props) => {
  // Диструктуризированная переменная с пропсами
  const {
    onDeleteCard,
    isOpen,
    onClose
  } = props;

  // функция отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteCard();
  }

  return (
    <PopupWithForm
      name="remove-card"
      title="Вы уверены?"
      textButton="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default RemovePlacePopup;