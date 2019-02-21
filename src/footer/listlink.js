import React from "react";
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

export default ListLink;
