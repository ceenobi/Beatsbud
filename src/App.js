import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Navbar, Jumbotron, Home , Footer, Shop, Product, Bag, Default} from './components'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/product' component={Product} />
          <Route path='/bag' component={Bag} />
          <Route  component={Default} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
