import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
const Home = () => {
  return (
   <div className="container">
     <header className="showcase">
      <h2>Quick Business Registration</h2>
      <p>
        We provide knowledge-based and practical solutions for every phase of your business life cycle and help you bring your ideas to life
      </p>
      <Link to="/" className="btn">
        Learn More
      </Link>
     </header>
     {/* Home cards */}
     <h2 className="quick">What Quick Do?</h2>
     <section className="home-cards">
       
       <div>
        <img src="images/pc1.png" alt="" />
         <h3>Business Writing</h3>
       </div>
       <div>
        <img src="images/pc2.png" alt="" />
         <h3>Business Formation</h3>
       </div>
       <div>
         <img src="images/pc3.png" alt="" />
         <h3>Business Compliance</h3>
       </div>
       <div>
        <img src="images/pc4.png" alt="" />
         <h3>Business Support</h3>
       </div>
     </section>
   </div>
   
  )
}

export default Home
