import React from "react";
import HeaderCSS from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <img src="../SportSee-logo.svg" alt="SportSee" />
      </h1>

      <nav>
        <ul className={HeaderCSS.horizontal_navbar}>
          <li>
            <Link to="#">Accueil</Link>
          </li>
          <li>
            <Link to="#">Profil</Link>
          </li>
          <li>
            <Link to="#">Réglage</Link>
          </li>
          <li>
            <Link to="#">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
