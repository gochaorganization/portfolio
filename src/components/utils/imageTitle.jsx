import React from 'react'
import PropTypes from 'prop-types'

import './imageTitle.sass'

const ImageTitle = ({ title, subtitle }) => (
  <React.Fragment>
    <div className="image-title__title">{title}</div>
    {subtitle && <div className="image-title__subtitle">{subtitle}</div>}
  </React.Fragment>
)

ImageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default ImageTitle
