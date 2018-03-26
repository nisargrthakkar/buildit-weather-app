import React from 'react';  //eslint-disable-line
import App from './modules/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './redux/store';
import './css/style.css';

const target = document.querySelector('#root');  //eslint-disable-line

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);
