import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import portfolio from 'redux/reducers/portfolio'

import './details.sass'
import ImageTitle from '../utils/imageTitle'

const Details = props => {
  const { images } = props
  const image = _.find(images, image => {
    return image.id === _.toNumber(_.get(props, 'match.params.id'))
  })

  if (!image) return <div className="details">Image not found</div>

  return (
    <div className="details">
      <div className="details__image" key={image.id}>
        <ImageTitle big title={image.title} subtitle={image.subtitle} />
        <img alt="" src={image.src} />
      </div>
    </div>
  )
}

const mapStateToProps = () => portfolio
export default connect(mapStateToProps)(Details)
