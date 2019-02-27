import React, { Component } from "react";
import _ from "lodash";

import ListLink from "./listlink";

import "./footer.sass";

class Footer extends Component {
  state = {
    links: [
      { name: "twitter", link: "https://twitter.com" },
      { name: "dribble", link: "https://dribbble.com/" },
      { name: "facebook", link: "https://facebook.com" }
    ]
  };

  renderLink = (link, key) => {
    return <ListLink key={key} link={link} />;
  };

  render() {
    const { links } = this.state;
    return (
      <footer className="footer">
        <ul className="footer__list">
          {_.map(links, (item, key) => this.renderLink(item, key))}
        </ul>

        <div className="footer__credentials">
          Made by <span className="footer__credentials--danger">Selleo</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
