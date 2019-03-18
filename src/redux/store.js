import { createStore } from 'redux'
import _ from 'lodash'
import portfolio from './reducers/portfolio'

// eslint-disable-next-line no-underscore-dangle
const store = createStore(
  portfolio,
  _.invoke(window, '__REDUX_DEVTOOLS_EXTENSION__')
)

export default store
