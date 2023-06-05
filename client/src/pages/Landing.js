import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" />
      </nav>
      <div className="container page">
      {/* Info */}
        <div className="info">
          <h1>Job<span>Tracking</span> app</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <button className="btn btn-here" >Login/Register</button>
        </div>
        <img src={main} alt="main" className="img main-img" />        
      </div>
    </main> 
    
  )
}

export default Landing