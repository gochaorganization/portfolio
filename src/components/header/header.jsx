import React, { Component } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'
import classNames from 'classnames'

import './header.sass'

const renderLink = ({ name, link }, key) => (
  <li key={key}>
    <a className="header__list-link" href={link}>
      {name}
    </a>
  </li>
)

renderLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

class Header extends Component {
  state = {
    menuVisible: false,
    links: [
      { name: 'Blog', link: '#blog' },
      { name: 'Style Guide', link: '#guide' },
      { name: 'Manuals', link: '#manuals' },
      { name: 'Pages', link: '#pages' },
      { name: 'Contacts', link: '#contacts' },
    ],
  }

  toogleMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible,
    }))
  }

  render() {
    const { menuVisible, links } = this.state

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
          {_.map(links, (item, key) => renderLink(item, key))}
        </ul>
      </header>
    )
  }
}

export default Header
