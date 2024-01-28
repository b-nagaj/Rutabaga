// Card component that encapsulates customizable content inside containers in a grid.

import "./Card.css";

export type CardProps = {
  titles: string[];
  images: string[];
  imageAlts: string[];
  descriptions: string[];
};

function display(
  title: string,
  image: string,
  imageAlt: string,
  description: string
) {
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
    </div>
  );
}

export const Card: React.FC<CardProps> = ({
  titles,
  images,
  imageAlts,
  descriptions,
}) => {
  return (
    <div className="card-container">
      {Array.from({ length: titles.length }, (_, index) => (
        <div key={index}>
          {display(
            titles[index],
            images[index],
            imageAlts[index],
            descriptions[index]
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
