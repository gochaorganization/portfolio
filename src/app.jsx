import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import Home from './components/home'
import Header from './components/home/header'
import Footer from './components/home/footer'
import Gallery from './components/gallery'

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Footer />
      </div>
    </Router>
  </Provider>
)

export default App
