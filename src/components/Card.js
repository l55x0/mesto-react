function Card(props) {
  return (
    <article className="place">
      <img
        className="place__image"
        alt={props.title}
        src={props.src}
        onClick={props.handleClick}
      />
      <button className="button place__button-remove" type="button" />
      <div className="place__row-block">
        <h2 className="place__title">{props.title}</h2>
        <div className="place__column-block">
          <button className="button place__button-like" type="button" />
          <span className="place__score-like">{props.likes}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;