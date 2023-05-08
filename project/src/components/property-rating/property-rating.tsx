import { calcRatingStarsWidth } from 'utils';

type PropertyRatingScreenProps = {
  rating: number;
};

export default function PropertyRating({rating}: PropertyRatingScreenProps): JSX.Element {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{ width: calcRatingStarsWidth(rating) }} />
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}

