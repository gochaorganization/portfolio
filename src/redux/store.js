import { createStore } from 'redux'
import portfolio from './reducers/portfolio'

const store = createStore(portfolio, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
