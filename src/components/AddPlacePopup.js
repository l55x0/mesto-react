import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const inputNameRef = useRef();
  const inputLinkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: inputNameRef.current.value,
      link: inputLinkRef.current.value
    });

    inputNameRef.current.value = '';
    inputLinkRef.current.value = '';
  }

  return (
    <PopupWithForm
      name={"popup-add-card"}
      title={"Новое место"}
      textButton={"Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_place-name"
        type="text"
        placeholder="Название"
        name="popup-input-place-name"
        minLength="2"
        maxLength="30"
        ref={inputNameRef}
        required
      />
      <span id="popup-input-place-name-error" className="popup__error"></span>
      <input
        className="popup__input popup__input_type_photo"
        type="url" placeholder="Ссылка на картинку"
        name="popup-input-url"
        ref={inputLinkRef}
        required
      />
      <span id="popup-input-url-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;