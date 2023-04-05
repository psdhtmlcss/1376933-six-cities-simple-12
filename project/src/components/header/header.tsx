import Logo from '../logo/logo';
import HeaderNavigation from '../header-navigation/header-navigation';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
}
