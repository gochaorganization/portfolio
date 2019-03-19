import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import _ from 'lodash'
import { connect } from 'react-redux'

import portfolio from 'redux/reducers/portfolio'

import 'react-animated-slider/build/horizontal.css'

class Gallery extends Component {
  render() {
    const { images } = this.props

    return (
      <Slider>
        {_.map(images, image => (
          <div key={image.id}>
            <h5>{image.title}</h5>
            <img alt="" src={image.src} />
          </div>
        ))}
      </Slider>
    )
  }
}

const mapStateToProps = () => portfolio
export default connect(mapStateToProps)(Gallery)
