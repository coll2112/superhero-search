import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Search from './components/Search/Search';
import SuperheroProfile from './components/SuperheroProfile/SuperheroProfile';

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/search' component={Search} />
    <Route path='/search/:id' component={SuperheroProfile} />
  </Switch>
);
