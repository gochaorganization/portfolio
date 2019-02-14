import React from "react";
import "./footer.sass";

const Footer = () => (
  <div className="footer">
    <ul className="footer__list">
      <li>
        <a className="footer__list-link twitter" href="https://twitter.com">
          Twitter
        </a>
      </li>
      <li>
        <a className="footer__list-link dribble" href="https://dribbble.com/">
          Dribble
        </a>
      </li>
      <li>
        <a className="footer__list-link icon__facebook" href="https://dribbble.com/">
          Facebook
        </a>
      </li>
    </ul>

    <div className="footer__credentials">
      Made by <span className="footer__credentials--red">Selleo</span>
    </div>
  </div>
);

export default Footer;
