import { useState} from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import LogoPortfolio from '../../assets/LogoPortfolio';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };


  return (
    <div className="containerNavBar">
      <div className="containerNavBar__Logo">
        <a href="/">
          <LogoPortfolio className="Logo__svg" />
        </a>
      </div>

      <button className="Boton__Movile" onClick={toggleMenu}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <ul className={`containerNavBar__Botons ${menu ? 'isActive' : ''}`}>
        <li className="Boton__contenedor">
          <Link className="Boton__Boton" onClick={toggleMenu} activeClass="active" to="proyectoRef" spy={true} smooth={true} duration={200}>
            PROYECTOS
          </Link>
        </li>
        <li className="Boton__contenedor">
          <Link className="Boton__Boton"  onClick={toggleMenu} to="sobreMiRef" spy={true} smooth={true} offset={-120} duration={200}>
            SOBRE MI
          </Link>
        </li>
        <li className="Boton__contenedor">
          <Link className="Boton__Boton" onClick={toggleMenu} to="habilidadesRef" spy={true} smooth={true} duration={200}>
            HABILIDADES
          </Link>
        </li>
        <li className="Boton__contenedor">
          <Link className="Boton__Boton" onClick={toggleMenu} to="contactameRef" spy={true} smooth={true} duration={200}>
            CONTACTAME
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
