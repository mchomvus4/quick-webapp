import React, { Fragment } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return (
    <Fragment>
       <Router>
   <div className="container"></div>
 <footer>
  {/* <!-- footer main --> */}
  <section className="ft-main">
      <div className="ft-main-item">
        <h2 className="ft-title">About</h2>
        <ul>
            <li><Link to='#'>Services</Link></li>
            <li><Link to='#'>Portifolio</Link></li>
            <li><Link to='#'>Pricing</Link></li>
            <li><Link to='#'>Customers</Link></li>
            <li><Link to='#'>Careers</Link></li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Resources</h2>
        <ul>
            <li><Link to='#'>Docs</Link></li>
            <li><Link to='#'>Blog</Link></li>
            <li><Link to ='#'>eBooks</Link></li>
            <li><Link to ='#'>Webnars</Link></li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Contact</h2>
        <ul>
            <li>Mwanza Tanzania</li>
            <li>P.O.Box 1200</li>
            <li>123 Nyerere Road</li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Stay Updated</h2>
        <p>Subscribe to our newsletter to get our latest news.</p>
        <form>
        <input type="email" name="email" placeholder="Enter Email Address" />
        <input type="submit" value="Subscribe" />
        </form>
      </div>
  </section>
  {/* <!-- footer social --> */}
  <section className="ft-social">
   <ul className="ft-social-list">
        <li><Link to='#'><i class="fab fa-facebook"></i></Link></li>
        <li><Link to ='#'><i class="fab fa-twitter"></i></Link></li>
        <li><Link to ='#'><i class="fab fa-instagram"></i></Link></li>
        <li><Link to ='#'><i class="fab fa-github"></i></Link></li>
        <li><Link t0 ='#'><i class="fab fa-linkedin"></i></Link></li>
        <li><Link to ='#'><i class="fab fa-youtube"></i></Link></li>
        <li><Link to ="https://api.whatsapp.com/send?phone=255768205514" method="get" target="_blank"><i class="fab fa-whatsapp fa-2x"></i></Link></li>
   </ul>
  </section>
  {/* <!-- footer legal --> */}
  <section className="ft-legal">
   <ul className="ft-legal-list">
        <li><Link to='#' >Developed by</Link></li>
        <li><Link to='#' > Samwel Mchomvu | NOTTECH Lab</Link></li>
        <li><Link to='#' >&copy; 2021 Copyright | Quick Business Reg</Link></li>
   </ul>
  </section>
 </footer>
 </Router>
 </Fragment>
  )

}
