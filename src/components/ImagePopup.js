import React, { useEffect } from 'react';

const ImagePopup = (props) => {
  // Диструктуризированная переменная с пропсами
  const {
    card,
    onClose
  } = props;

  // Реализация закрытия нажатием на ESC
  useEffect(() => {
    const handleEscapeClose = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [onClose]);

  // Реализация закрытия по оверлею
  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <section
      onClick={handleOverlayClose}
      className={`popup popup_blackout 
    ${card.isOpen
          ? 'popup_opened'
          : ''
        }`}
      id="popup-image">
      <figure className="popup__figure">
        <button
          className="button popup__button-close"
          type="button"
          onClick={onClose}
        />
        <img
          className="popup__image"
          alt={card.name}
          src={card.link}
        />
        <figcaption
          className="popup__caption">
          {card.name} / &copy; {card.owner.name}
        </figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;