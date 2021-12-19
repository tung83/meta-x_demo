import { Link } from 'react-router-dom';
import logo from '../../resources/logo.svg';

function Logo() {
  return (
    <Link to={'/home'}>
      <img src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
