import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page-404/page-404';
import { AppRoute } from '../../const';
import ScrollToTop from '../scrollToTop/scrollToTop';
import { Offer as OfferType } from '../../types/offer';
import { Review } from '../../types/review';

type AppScreenProps = {
  offers: OfferType[];
  reviews: Review[];
}

export default function App({offers, reviews}: AppScreenProps): JSX.Element {
  console.log(reviews);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Main} element={<Main offers={offers} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer offers={offers} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
