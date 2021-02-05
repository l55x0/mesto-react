function ImagePopup(props) {
  const className = `popup popup_blackout ${props.card.isOpen ? 'popup_opened' : ''}`;
  return (
    <section className={className} id="popup-image">
      <figure className="popup__figure">
        <button
          className="button popup__button-close"
          type="button"
          onClick={props.onClose}>
        </button>
        <img
          className="popup__image"
          alt="Картинка"
          src={props.card.src}
        />
        <figcaption className="popup__caption">{props.card.title}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;