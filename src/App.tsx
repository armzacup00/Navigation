import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import './App.css'
import Navigation from './component/Navigation'
import Home from './component/page/Home'
import Member from './component/page/Member'
import Product from './component/page/Product'
import Admin from './component/page/Admin'

function App() {
  return (
    <div>
    <Router>
      <Navigation/>
      <Routes>
        <Route path='*' Component={Home} />
        <Route path='/member' Component={Member}/>
        <Route path='/shop' Component={Product}/>
        <Route path='/admin' Component={Admin}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
