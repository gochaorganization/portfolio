import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

const App = () => (
  <Provider store={store}>
    <Header />
    <Content />
    <Footer />
  </Provider>
);

export default App;
