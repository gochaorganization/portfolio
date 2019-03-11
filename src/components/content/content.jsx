import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import classNames from 'classnames'

import portfolio from 'redux/reducers/portfolio'
import PortfolioItem from './portfolioItem'
import AddImageForm from './addImageForm'
import { addImage } from 'redux/actions/actions'

import './content.sass'

class Content extends Component {
  state = {
    formVisible: false,
  }

  handleSubmit = values => {
    this.props.addImage(values)
  }

  renderPortfolioItem = (item, key) => {
    return <PortfolioItem key={key} portfolio={item} />
  }

  toggleFormVisibility = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible,
    }))
  }

  render() {
    const { images } = this.props
    const { formVisible } = this.state

    return (
      <main className="content">
        <h3>Portfolio Theme for Gosia :)</h3>
        <p className="content__description">
          Lorem ipsum dolor sit amet, saepe incorrupte reprehendunt ius cu, vis
          elit comprehensam concludaturque ex, ex qui omittam signiferumque.
          Virtute consetetur et mei, ne amet salutandi cotidieque eam.
        </p>
        <div className="content__portfolio">
          {_.map(images, (item, key) => this.renderPortfolioItem(item, key))}
        </div>
        <button
          className="content__button"
          onClick={this.toggleFormVisibility}
          type="button"
        >
          {formVisible ? 'Hide form' : 'Show form'}
        </button>
        <div
          className={classNames(
            { content__form: formVisible },
            {
              'content__form--hidden': !formVisible,
            }
          )}
        >
          <AddImageForm onSubmit={this.handleSubmit} />
        </div>
      </main>
    )
  }
}

Content.propTypes = {
  images: PropTypes.array.isRequired,
  addImage: PropTypes.func.isRequired,
}

const mapStateToProps = ({ portfolio: { images } }) => ({
  images,
})

const mapDispatchToProps = {
  addImage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
