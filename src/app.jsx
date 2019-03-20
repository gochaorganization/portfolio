import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import Home from './components/home'
import Header from './components/home/header'
import Footer from './components/home/footer'
import Gallery from './components/gallery'
import NotFound from './components/notFound'
import Details from './components/details'

const App = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/img/:id" component={Details} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  </Provider>
)

export default App
