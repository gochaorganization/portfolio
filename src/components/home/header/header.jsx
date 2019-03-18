import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import _ from 'lodash'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import portfolio from 'redux/reducers/portfolio'

import './header.sass'

const renderLink = ({ name, link }, key) => (
  <li key={key}>
    <Link className="header__list-link" to={link}>
      {name}
    </Link>
  </li>
)

renderLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

class Header extends Component {
  static propTypes = {
    headerLinks: PropTypes.array.isRequired,
  }

  state = {
    menuVisible: false,
  }

  toogleMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible,
    }))
  }

  render() {
    const { menuVisible } = this.state
    const { headerLinks } = this.props

    return (
      <header className="header">
        <div className="header-wrapper">
          <a href="/" className="header__home">
            Selleo
          </a>
          <span
            role="button"
            tabIndex="0"
            className={classNames('header__menu', 'icon-menu', {
              'header__menu--active': !menuVisible,
            })}
            onClick={this.toogleMenu}
          />
        </div>
        <ul
          className={classNames('header__list', {
            'header__list--hidden': !menuVisible,
          })}
        >
          {_.map(headerLinks, (item, key) => renderLink(item, key))}
        </ul>
      </header>
    )
  }
}

const mapStateToProps = () => portfolio
export default connect(mapStateToProps)(Header)
