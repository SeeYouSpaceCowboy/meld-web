import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import App from './App'

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
