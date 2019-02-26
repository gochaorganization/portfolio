import React from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
import classNames from "classnames";

import "./listlink.sass";

const ListLink = ({ link: { name, address } }) => (
  <li>
    <a
      className={classNames("list-link", {
        [`icon-${name}`]: name
      })}
      href={address}
    >
      {_.upperFirst(name)}
    </a>
  </li>
);

ListLink.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })
}

export default ListLink;
