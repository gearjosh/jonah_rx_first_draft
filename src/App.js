import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { createStore, applyMiddleware,  } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

import Header from './components/Header'

require('dotenv').config();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header/>
          <p>Poop.</p>
        </div>
      </Provider>
    );
  }
}



export default App;
