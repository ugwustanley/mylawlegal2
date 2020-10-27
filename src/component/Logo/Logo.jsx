import React from 'react'
import './Logo.css'
import LogoImg from './img/myLaw.png'

//logo component
const Logo = () =>{
    return(
        <div className="Logo__box">
          <img src={LogoImg} alt="logo" />
        </div>
    )
}

export default Logo;