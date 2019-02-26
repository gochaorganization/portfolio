/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import "./portfolioItem.sass";

const PortfolioItem = ({ portfolio: { src, title, subtitle } }) => {
  return (
    <div className="portfolio-item">
      <img className="portfolio-item__image" src={src} alt="Portfolio image" />
      <div className="portfolio-item__content">
        <div className="portfolio-item__title">{title}</div>
        <div className="portfolio-item__subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default PortfolioItem;
