import React from "react";

import "./header.sass";

const Header = () => (
  <header className="header">
    <a href="/" className="header__link">
      Selleo
    </a>
    <ul className="header__list">
      <li>
        <a className="header__list-link" href="#blog">
          Blog
        </a>
      </li>
      <li>
        <a className="header__list-link" href="#guide">
          Style Guide
        </a>
      </li>
      <li>
        <a className="header__list-link" href="#manuals">
          Manuals
        </a>
      </li>
      <li>
        <a className="header__list-link" href="#pages">
          Pages
        </a>
      </li>
      <li>
        <a className="header__list-link" href="#contacts">
          Contacts
        </a>
      </li>
    </ul>
  </header>
);

export default Header;
