import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import About from './pages/About'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/country/:name" component={About} />
    <Route path="*" component={PageNotFound} />
  </Switch>
)

export default Routes
