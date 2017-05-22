import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import 'modules/simple-line-icons/css/simple-line-icons.css'
import '../template/style.css'
import React from 'react'
import Routes from './routes'


import Menu from '../template/menu'

export default props => (
  <div>
    
    <div className="container">
      <Routes />
    </div>
  </div>
)
