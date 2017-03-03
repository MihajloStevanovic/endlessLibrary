import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import App from './App';
import EslHome from './containers/EslHome';
import EslFilms from './containers/EslFilms';
import EslSeries from './containers/EslSeries';
import EslFiche from './containers/EslFiche';
import MyMovies from './containers/MyMovies';
import MySeries from './containers/MySeries';
import MyProfile from './containers/MyProfile';

const loginStatus = window.localStorage.getItem('loginStatus')
window.localStorage.setItem('loginStatus', false);

const EslRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App} loginStatus={loginStatus}/>
      <Route path="/login" component={App} loginStatus={loginStatus}/>
      <Route path="/home" component={EslHome} loginStatus={loginStatus}/>
      <Route path="/movies" component={EslFilms}/>
      <Route path="/movies/:filmId" component={EslFiche}/>
      <Route path="/series" component={EslSeries}/>
      <Route path="/serie/:serieId" component={EslFiche}/>
      <Route path="/my-movies" component={MyMovies}/>
      <Route path="/my-series" component={MySeries}/>
      <Route path="/my-profile" component={MyProfile}/>
      <Route path="*" component={App}/>
    </Router>
  )
}

export default EslRouter