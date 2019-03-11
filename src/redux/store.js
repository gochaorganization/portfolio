import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import portfolio from './reducers/portfolio'

const rootReducer = combineReducers({
  portfolio,
  form: formReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
