import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import ListLink from './listlink'

import './footer.sass'

export class Footer extends Component {
  renderLink = (link, key) => {
    return <ListLink key={key} link={link} />
  }

  render() {
    const { footerLinks } = this.props
    return (
      <footer className="footer">
        <ul className="footer__list">
          {_.map(footerLinks, (item, key) => this.renderLink(item, key))}
        </ul>

        <div className="footer__credentials">
          Made by <span className="footer__credentials--danger">Selleo</span>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  footerLinks: PropTypes.array.isRequired,
}

const mapStateToProps = ({ portfolio: { footerLinks } }) => ({
  footerLinks,
})

export default connect(mapStateToProps)(Footer)
