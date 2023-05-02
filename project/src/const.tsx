export enum CommentLength {
  Min = 50,
  Max = 300
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
}

export const ratingRates = [
  {
    title: 'perfect',
    value: 5
  },
  {
    title: 'good',
    value: 4
  },
  {
    title: 'not bad',
    value: 3
  },
  {
    title: 'terribly',
    value: 1
  }
];
