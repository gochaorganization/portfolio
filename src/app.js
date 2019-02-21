import React, { Component } from "react";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

import "./app.sass";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
