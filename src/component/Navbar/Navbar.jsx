import React from 'react'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import './Navbar.css'


//navbar component
const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="brand__box">
            <Logo />
            <h2>Lawyer Dashboard</h2>
            </div>
            <Menu />
            
        </div>
    )
}

export default Navbar;