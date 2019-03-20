import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import _ from 'lodash'
import { connect } from 'react-redux'

import ImageTitle from '../utils/imageTitle'
import portfolio from 'redux/reducers/portfolio'

import 'react-animated-slider/build/horizontal.css'

import './gallery.sass'

class Gallery extends Component {
  render() {
    const { images } = this.props

    return (
      <div className="gallery">
        <Slider>
          {_.map(images, image => (
            <div className="gallery__image" key={image.id}>
              <ImageTitle title={image.title} subtitle={image.subtitle} />
              <img alt="" src={image.src} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = () => portfolio
export default connect(mapStateToProps)(Gallery)
