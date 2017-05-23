import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import CurtiDeMais from '../curtiDeMais/curtiDeMais'
import ShotController from '../curtiDeMais/shotViews/shotController'

export default props => (
  <Router history={hashHistory}>
    <Route path='/lista-shots' component={CurtiDeMais} />
    <Route path='/shot/:shot' component={ShotController} />
    <Redirect from='*' to='/lista-shots' />
  </Router>
)
