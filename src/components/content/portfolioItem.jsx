import React from 'react'
import PropTypes from 'prop-types'

import './portfolioItem.sass'

const PortfolioItem = ({ portfolio: { src, title, subtitle } }) => {
  return (
    <div className="portfolio-item">
      <img className="portfolio-item__image" alt="" src={src} />
      <div className="portfolio-item__content">
        <div className="portfolio-item__title">{title}</div>
        <div className="portfolio-item__subtitle">{subtitle}</div>
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  portfolio: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }),
}

export default PortfolioItem
