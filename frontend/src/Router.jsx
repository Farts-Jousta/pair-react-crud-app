import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Artists from './Artists';
import Albums from './Albums';
import Songs from './Songs';

const Router = () => {
  return (
    <Switch>
        <Route path="/artists" component={Artists} />
        <Route path="/albums" component={Albums} />
        <Route path="/songs" component={Songs} />
    </Switch>
  );
};

export default Router;
