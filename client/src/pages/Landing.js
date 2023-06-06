import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import { Logo } from '../components'
import {Link} from 'react-router-dom'

import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
        {/* Info */}
          <div className="info">
            <h1>Job<span>Tracking</span> app</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <Link to="/register" className="btn btn-here" >Login/Register</Link>
          </div>
          <img src={main} alt="main" className="img main-img" />
        </div>
      </main> 

    </Wrapper>
    
  );
};

export default Landing