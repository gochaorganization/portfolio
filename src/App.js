import React, { Component } from "react";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

import "./App.sass";

class App extends Component {
  render() {
    return (
      <div class="app">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
