import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from '../../components/Pages/Home'
import About from '../../components/Pages/About'
import Service from '../Pages/Service'
import Contact from '../Pages/Contact'
import NotFound from '../../components/Pages/NotFound'
import logo from '../../images/logo.png'
import Footer from './Footer'
import './Styles.css'

const Navbar = () => {
 const [open, setOpen] = useState(false)
  return (
   <>
   <Router>
    <div className="container">
    <nav>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <ul className="nav-links" style={{transform: open ? "translateX(0rem)" : ""}}>
      <li><Link to='/' className="nav_links">Home</Link></li>
      <li><Link to='/about' className="nav_links">About</Link></li>
      <li><Link to='/service' className="nav_links">Services</Link></li>
      <li><Link to='/contacts' className="nav_links">Contacts</Link></li>
      </ul>
      <i onClick ={()=>setOpen(!open)} className="fas fa-bars burger"></i>
    </nav>
   </div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/about' component={About}/>
      <Route path='/service' component={Service}/>
      <Route  path='/contacts' component={Contact}/>
      <Route path='*' component={NotFound}/>
    </Switch>
    </Router>
    <Footer/>
    </>
  )
}

export default Navbar
