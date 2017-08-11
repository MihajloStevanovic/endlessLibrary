import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import App from './App';
import EslFilms from './containers/EslFilms';
import EslSeries from './containers/EslSeries';
import EslFiche from './containers/EslFiche';
import MyMovies from './containers/MyMovies';
import MySeries from './containers/MySeries';
import MyProfile from './containers/MyProfile';

const EslRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path="/login" component={App} />
      <Route path="/films" component={EslFilms} />
      <Route path="/films/:filmName" component={EslFiche} />
      <Route path="/series" component={EslSeries} />
      <Route path="/serie/:serieName" component={EslFiche} />
      <Route path="/my-movies" component={MyMovies}/>
      <Route path="/my-series" component={MySeries}/>
      <Route path="/my-profile" component={MyProfile}/>
      <Route path="*" component={App}/>
    </Router>
  )
}

export default EslRouter