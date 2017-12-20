import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team';
import './main.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Team />,
    document.body.appendChild(document.createElement('div')),
  )
})
