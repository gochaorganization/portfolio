import React, { Component } from "react";
import _ from "lodash";

import PortfolioItem from "./portfolioItem";

import "./content.sass";

class Content extends Component {
  state = {
    porfolio: [
      {
        id: 1,
        src: "https://placekitten.com/360/360",
        title: "Title",
        subtitle: "subtitle"
      },
      {
        id: 2,
        src: "https://placekitten.com/360/360",
        title: "Title",
        subtitle: "subtitle"
      },
      {
        id: 3,
        src: "https://placekitten.com/360/360",
        title: "Title",
        subtitle: "subtitle"
      },
      {
        id: 4,
        src: "https://placekitten.com/360/360",
        title: "Title",
        subtitle: "subtitle"
      },
      {
        id: 5,
        src: "https://placekitten.com/360/360",
        title: "Title",
        subtitle: "subtitle"
      },
      {
        id: 6,
        src: "https://placekitten.com/360/360",
        title: "Title",
        subtitle: "subtitle"
      },
      {
        id: 7,
        src: "https://placekitten.com/360/360",
        title: "Title",
        subtitle: "subtitle"
      },
      {
        id: 8,
        src: "https://placekitten.com/360/360",
        title: "Title",
        subtitle: "subtitle"
      },
      {
        id: 9,
        src: "https://placekitten.com/360/360",
        title: "Title",
        subtitle: "subtitle"
      }
    ]
  };

  renderPortfolioItem = (item, key) => {
    return <PortfolioItem key={key} portfolio={item} />;
  };

  render() {
    const { porfolio } = this.state;

    return (
      <main className="content">
        <h3>Portfolio Theme for Gosia :)</h3>
        <p className="content__description">
          Lorem ipsum dolor sit amet, saepe incorrupte reprehendunt ius cu, vis
          elit comprehensam concludaturque ex, ex qui omittam signiferumque.
          Virtute consetetur et mei, ne amet salutandi cotidieque eam.
        </p>
        <div className="content__portfolio">
          {_.map(porfolio, (item, key) => this.renderPortfolioItem(item, key))}
        </div>
      </main>
    );
  }
}

export default Content;
