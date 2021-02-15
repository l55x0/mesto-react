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
          alt={props.card.name}
          src={props.card.link}
        />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;