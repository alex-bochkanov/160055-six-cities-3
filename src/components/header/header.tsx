import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Navigation from '../navigation/navigation';
function Header(): JSX.Element {
  const { pathname } = useLocation() as { pathname: AppRoute };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className='header__logo-link header__logo-link--active' to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <Navigation pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
export default Header;
