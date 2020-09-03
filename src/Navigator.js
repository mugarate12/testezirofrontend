import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './index.css'

import Home from './pages/Home/index'
import Cart from './pages/Cart/index'

export default function Navigator() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  )
}
