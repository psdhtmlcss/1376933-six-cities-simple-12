import { ChangeEvent, useState, Fragment } from 'react';
import { CommentLength, ratingRates } from '../../const';

type FormStateType = {
  rating: '';
  review: '';
};

export default function ReviewsForm() {
  const [formData, setFormData] = useState<FormStateType>({ rating: '', review: '' });
  const fieldChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          ratingRates.map(({title, value}) => (
            <Fragment key={title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={value}
                id={`${value}-stars`}
                type="radio"
                onChange={fieldChangeHandler}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        minLength={CommentLength.Min}
        maxLength={CommentLength.Max}
        onChange={fieldChangeHandler}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

