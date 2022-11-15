import logo from "./assets/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Logo of the site" className="logo__img" />
          </div>
          <nav>
            <ul className={navbar ? ["nav", "active"].join(" ") : ["nav"]}>
              <li className="nav__item nav__item--accent">
                <a href="/">Бизнес</a>
              </li>
              <li className="nav__item">
                <a href="/">О нас</a>
              </li>
              <li className="nav__item">
                <a href="/">Цены</a>
              </li>
              <li className="nav__item">
                <a href="/">Оформить заказ</a>
              </li>
            </ul>
            <div onClick={() => setNavbar(!navbar)} className="mobile-btn">
              {navbar ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
