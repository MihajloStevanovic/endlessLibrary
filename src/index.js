import React from 'react';
import ReactDOM from 'react-dom';
import EslRouter from './EslRouter';
import './index.css';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCyps_XX9ngz5LuS8lR4m2ZmfQf2czhRWk",
  authDomain: "endless-movies-library.firebaseapp.com",
  databaseURL: "https://endless-movies-library.firebaseio.com",
  storageBucket: "endless-movies-library.appspot.com",
  messagingSenderId: "805416648017"
};
firebase.initializeApp(config);

ReactDOM.render(
  <EslRouter />,
  document.querySelector('.esl-app')
);
