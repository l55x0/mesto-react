import PopupWithForm from './PopupWithForm';

function RemovePlacePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onDeleteCard();
  }

  return (
    <PopupWithForm
      name={"popup-remove-card"}
      title={"Вы уверены?"}
      textButton={"Да"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />

  );
}

export default RemovePlacePopup;