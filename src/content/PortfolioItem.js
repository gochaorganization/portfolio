/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";

const PortfolioItem = ({ portfolio }) => {
  console.log(portfolio);

  return (
    <div className="portfolio-item">
      <img
        className="portfolio-item__image"
        src={portfolio.src}
        alt="Portfolio image"
      />
      <div className="portfolio-item__content">
        <div className="portfolio-item__title">{portfolio.title}</div>
        <div className="portfolio-item__subtitle">{portfolio.subtitle}</div>
      </div>
    </div>
  );
};

export default PortfolioItem;
