import React from 'react';
import ReactDOM from 'react-dom';
import EslRouter from './EslRouter';

require('./stylesheets/main.scss')

ReactDOM.render(
  <EslRouter />,
  document.querySelector('.esl-app')
);
