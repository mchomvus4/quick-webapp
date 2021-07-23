import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from '../../components/Pages/Home'
import About from '../../components/Pages/About'
import Service from '../Pages/Service'
import Contact from '../Pages/Contact'
import NotFound from '../../components/Pages/NotFound'
import Footer from './Footer'


const Navbar = () => {
 const [click, setClick] = useState(false);
 const handleClick=()=>setClick(!click);
  return (
   <>
   <Router>
    
    <nav className="navbar">
      <div className="nav-container">
        <Link exact to='/' className="nav-logo">
          <img src="images/logo.png" alt="logo" />

        </Link>
          <ul className="nav-menu">
            <li className="nav-item active" >
               <Link  
               to='/' 
                className="nav-links"
                >
                  Home
              </Link>
            </li>
            <li className="nav-item">
               <Link 
                to='/about'
                 
                 className="nav-links"
                 >
                  About Us
              </Link>
            </li>
            <li className="nav-item">
               <Link 
                to='/services'
                 
                 className="nav-links"
                 >
                  Services
              </Link>
            </li>
            <li className="nav-item">
               <Link 
                to='/contacts'
                 
                 className="nav-links"
                 >
                  Contacts
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times':'fas fa-bars'}></i>
          </div>
      </div>
    </nav>
  
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/about' component={About}/>
      <Route  path='/service' component={Service}/>
      <Route  path='/contacts' component={Contact}/>
      <Route  path='*' component={NotFound}/>
    </Switch>
    </Router>
    <Footer/>
    </>
  )
}

export default Navbar
