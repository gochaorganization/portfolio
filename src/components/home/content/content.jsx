import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import portfolio from 'redux/reducers/portfolio'
import PortfolioItem from './portfolioItem'

import './content.sass'

class Content extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  }

  renderPortfolioItem = item => {
    return <PortfolioItem key={item.id} portfolio={item} />
  }

  render() {
    const { images } = this.props

    return (
      <main className="content">
        <h3>Portfolio Theme for Gosia :)</h3>
        <p className="content__description">
          Lorem ipsum dolor sit amet, saepe incorrupte reprehendunt ius cu, vis
          elit comprehensam concludaturque ex, ex qui omittam signiferumque.
          Virtute consetetur et mei, ne amet salutandi cotidieque eam.
        </p>
        <div className="content__portfolio">
          {_.map(images, item => this.renderPortfolioItem(item))}
        </div>
      </main>
    )
  }
}

const mapStateToProps = () => portfolio
export default connect(mapStateToProps)(Content)