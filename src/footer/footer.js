import React from "react";
import "./footer.sass";

const Footer = () => (
  <div className="footer">
    <ul className="footer__list">
      <li>
        <a
          className="footer__list-link icon-twitter icon-align-left"
          href="https://twitter.com"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          className="footer__list-link icon-dribble icon-align-left"
          href="https://dribbble.com/"
        >
          Dribble
        </a>
      </li>
      <li>
        <a
          className="footer__list-link icon-facebook"
          href="https://facebook.com/"
        >
          Facebook
        </a>
      </li>
    </ul>

    <div className="footer__credentials">
      Made by <span className="footer__credentials--danger">Selleo</span>
    </div>
  </div>
);

export default Footer;
