function PopupWithForm(props) {
  const className = `popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <section className={className}>
      <div className={"popup__container"}>
        <button
          className={"button popup__button-close"}
          type={"button"}
          onClick={props.onClose}>
        </button>
        <h2 className={"popup__title"}>
          {props.title}</h2>
        <form
          className={"popup__form"}
          name={props.name}
          id={"popup-form-edit"}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            className={"button popup__button-submit"}
            type={"submit"}>
            {props.textButton}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;