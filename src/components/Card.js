import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButton = isOwn
    ? (<button className="button place__button-remove" type="button" />)
    : (null);
  const isLiked = props.card.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClassName = `button place__button-like ${isLiked
    ? ('place__button-like_active')
    : ''}`;

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleImageClick() {
    props.handleClick(props.card)
  }

  return (
    <article className="place">
      <img
        className="place__image"
        alt={props.card.name}
        src={props.card.link}
        onClick={handleImageClick}
      />
      {cardDeleteButton}
      <div className="place__row-block">
        <h2 className="place__title">{props.card.name}</h2>
        <div className="place__column-block">
          <button className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          />
          <span className="place__score-like">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;