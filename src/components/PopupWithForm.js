import React, { useEffect } from 'react';

const PopupWithForm = (props) => {
  const {
    children,
    name,
    title,
    textButton,
    isOpen,
    onClose,
    onSubmit,
    isDisabled = false
  } = props;

  // Реализация закрытия нажатием на ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isOpen, onClose]);

  // Реализация закрытия по оверлею
  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
    return;
  };

  return (
    <section
      onClick={handleOverlayClose}
      className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          className="button popup__button-close"
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className={"popup__form"}
          name={name}
          id={name}
          onSubmit={onSubmit}
        >
          {children}
          <button
            className={`button popup__button-submit 
            ${isDisabled
                ? 'popup__button-submit_invalid'
                : ''
              }`}
            type={"submit"}>
            {textButton || ""}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;