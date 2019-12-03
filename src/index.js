import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {gameReducer} from './reducers/gameReducer';
import thunk from 'redux-thunk';


const store = createStore(
  gameReducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
