import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Page404 from '../../pages/page-404/page-404';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';

type AppScreenProps = {
  offers: Offer[];
}

export default function App({offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main offers={offers} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room offers={offers} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
