// import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type PlaceCardScreenProps = {
  offer: Offer;
  setActiveOffer: (offer: Offer | null) => void;
};

// type StateCard = {
//   id: null | number;
// };

export default function PlaceCard(props: PlaceCardScreenProps): JSX.Element {
  const {offer, setActiveOffer} = props;
  const {previewImage, price, rating, title, type, id} = offer;
  // const [activeCard, setActiveCard] = useState<StateCard>({id: null});


  return (
    <article
      onMouseEnter={() => setActiveOffer(offer)}
      onMouseLeave={() => setActiveOffer(null)}
      className="cities__card place-card"
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(rating * 100) / 5}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
