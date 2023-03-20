import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Page404 from '../../pages/page-404/page-404';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main placesCount={placesCount} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
