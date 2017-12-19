import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Team />,
    document.body.appendChild(document.createElement('div')),
  )
})
