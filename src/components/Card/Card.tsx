// Card component that encapsulates customizable content inside containers in a grid.

import "./Card.css";

type CardProps = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({
  title,
  image,
  imageAlt,
  description,
}) => {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__image-container">
        <img
          className="card__image"
          src={image}
          alt={imageAlt}
        />
      </div>
      <div className="card__description">{description}</div>
      <button className="card__button">Learn More</button>
    </div>
  );
};

export default Card;
