import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Team from '../components/Team';
import app from '../reducers/index'
import '../styles/main.scss';

let store = createStore(app);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store} >
      <Team />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
