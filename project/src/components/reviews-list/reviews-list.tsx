import { Review } from 'types/review';
import ReviewsForm from 'components/reviews-form/reviews-form';
import { calcRatingStarsWidth } from 'utils';

type ReviewsListScreenProps = {
  reviews: Review[];
}

export default function ReviewsList({reviews}: ReviewsListScreenProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          reviews.map((item) => (
            <li className="reviews__item" key={item.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src={item.user.avatarUrl}
                    width={54}
                    height={54}
                    alt={item.user.name}
                  />
                </div>
                <span className="reviews__user-name">{item.user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: calcRatingStarsWidth(item.rating) }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">{item.comment}</p>
                <time className="reviews__time" dateTime="2019-04-24">
                  {item.date}
                </time>
              </div>
            </li>
          ))
        }
      </ul>
      <ReviewsForm />
    </section>
  );
}
