import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="main-header" data-dark>
      <input type="checkbox" id="menu" />
      <Navbar />
      <div className="search-bar">
        <div className="search-bar__logo-container">
          <img src="https://frontenstore-arbol.netlify.app/img/logo.png" />
        </div>
        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label">
            Buscar
          </label>
          <input
            type="search"
            className="search-bar__form-search"
            id="busqueda"
          />
          <input
            type="submit"
            value="Buscar"
            className="search-bar__form-submit"
          />
        </form>
        <Link className="search-bar__carrito-container" to="/carrito">
          <img src="img/cart-add-regular-24.png" alt="carrito" />
        </Link>
        <div className="menu-toggle">
          <label htmlFor="menu" className="menu-toggle__label">
            <span className="menu-toggle__top-bread"></span>
            <span className="menu-toggle__meat"></span>
            <span className="menu-toggle__bottom-bread"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
