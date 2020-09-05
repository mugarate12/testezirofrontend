import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './index.css'

import Loading from './pages/Loading/index'
const Home = lazy(() => import('./pages/Home/index'))
const Cart = lazy(() => import('./pages/Cart/index'))

export default function Navigator() {
  return (
    <Router>
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Suspense>
    </Router>
  )
}
