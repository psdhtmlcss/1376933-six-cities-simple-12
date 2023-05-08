import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-05-04T07:54:12.427Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Oliver.conner'
    }
  },
  {
    comment: 'lorem',
    date: '2023-05-04T07:54:12.427Z',
    id: 2,
    rating: 3.2,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Max'
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-05-04T07:54:12.427Z',
    id: 3,
    rating: 1,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 3,
      isPro: false,
      name: 'John'
    }
  }
];
