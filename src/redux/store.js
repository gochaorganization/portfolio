import { createStore } from 'redux';
import portfolio from './reducers/portfolio';

// eslint-disable-next-line no-underscore-dangle
const store = createStore(
  portfolio,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
