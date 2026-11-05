import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='navbar'>
            <div>
                <h2>Travel Planner</h2>
            </div>

            <div onClick={toggleMenu} className='menu-icon'>
               <FaBars />
            </div>

            <div className='nav-content'>
                <Link to='/'>Home</Link>
                <Link to='/explore'>Explore</Link>                
                <Link to='/mytrip'>My Trip</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
            </div>

            {isOpen && ( <div className='mobnav-content'>
                <FaTimes onClick={toggleMenu} className='closeBtn'/>
                <Link to='/'>Home</Link>
                <Link to='/explore'>Explore</Link>                
                <Link to='/mytrip'>My Trip</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
            </div>)}
        </nav>
    )
}

export default Navbar
