import './style.css';
import Img from '../../assets/omega-logo.png';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <header className="header">
        <Link to="/">
          {' '}
          <img className="logoOmega" src={Img} alt="logo Omega" />
        </Link>

        <ul>
          <li>Olá Cliente</li>
        </ul>
      </header>
    </>
  );
}
export default Header;
