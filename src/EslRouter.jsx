import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import App from './App';
import EslFilms from './containers/EslFilms';
import EslSeries from './containers/EslSeries';
import Item from './components/Item';
import MyMovies from './containers/MyMovies';
import MySeries from './containers/MySeries';
import MyProfile from './containers/MyProfile';

const EslRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path="/login" component={App} />
      <Route path="/films" component={EslFilms} />
      <Route path="/films/:filmId" component={Item} />
      <Route path="/series" component={EslSeries} />
      <Route path="/films/:serieId" component={Item} />
      <Route path="/my-movies" component={MyMovies}/>
      <Route path="/my-series" component={MySeries}/>
      <Route path="/my-profile" component={MyProfile}/>
      <Route path="*" component={App}/>
    </Router>
  )
}

export default EslRouter