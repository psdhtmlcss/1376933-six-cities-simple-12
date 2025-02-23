import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page-404/page-404';
import { AppRoute } from '../../const';
import ScrollToTop from '../scrollToTop/scrollToTop';
import { Offer as OfferType, City } from '../../types/offer';
import { Review } from '../../types/review';

type AppScreenProps = {
  offers: OfferType[];
  reviews: Review[];
  city: City;
}

export default function App({offers, reviews, city}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Main} element={<Main offers={offers} city={city}/>} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer offers={offers} reviews={reviews} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
