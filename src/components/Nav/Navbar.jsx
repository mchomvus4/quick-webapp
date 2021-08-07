import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
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
        <NavLink exact to='/' className="nav-logo">
          <img src="images/logo.png" alt="logo" />

        </NavLink>
          <ul className={click ? "nav-menu active" :"nav-menu"}>
            <li className="nav-item" >
               <NavLink  
               to='/' 
               activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                >
                  Home
              </NavLink>
            </li>
            <li className="nav-item">
               <NavLink 
                to='/about'
                 activeClassName="active"
                 className="nav-links"
                 onClick={handleClick}
                 >
                  About Us
              </NavLink>
            </li>
            <li className="nav-item">
               <NavLink 
                to='/services'
                 activeClassName="active"
                 className="nav-links"
                 onClick={handleClick}
                 >
                  Services
              </NavLink>
            </li>
            <li className="nav-item">
               <NavLink 
                to='/contacts'
                 activeClassName="active"
                 className="nav-links"
                 onClick={handleClick}
                 >
                  Contacts
              </NavLink>
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
      <Route  path='/services' component={Service}/>
      <Route  path='/contacts' component={Contact}/>
      <Route  path='*' component={NotFound}/>
    </Switch>
    </Router>
    <Footer/>
    </>
  )
}

export default Navbar
