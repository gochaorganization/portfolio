import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ImageTitle from './../../utils/imageTitle.jsx'

import './portfolioItem.sass'

const PortfolioItem = ({ portfolio: { id, src, title, subtitle } }) => {
  return (
    <Link key={id} to={`/img/${id}`} className="portfolio-item">
      <img className="portfolio-item__image" alt="" src={src} />
      <div className="portfolio-item__content">
        <ImageTitle title={title} subtitle={subtitle} />
      </div>
    </Link>
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
