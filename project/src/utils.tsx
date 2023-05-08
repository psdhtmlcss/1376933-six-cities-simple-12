export const calcRatingStarsWidth = (rating: number) => ( `${Math.round((rating * 100) / 5)}%` );
