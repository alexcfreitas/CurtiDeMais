import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import CurtiDeMais from '../curtiDeMais/curtiDeMais'
import About from '../about/about'

export default props => (
  <Router history={hashHistory}>
    <Route path='/curtir' component={CurtiDeMais} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/curtir' />
  </Router>
)
