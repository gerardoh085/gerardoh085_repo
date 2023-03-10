import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import '../styles/navbar.css'
import {useState, useEffect} from 'react';
import {FaBeer} from 'react-icons/fa';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
      setExpandNavbar(false);
    }, [location]); 

  return (
    <div className='NavBar' id={expandNavbar ? "open" : "close"}>
      <div className='btn'>
        <button onClick={() => {setExpandNavbar((prev)=> !prev)}}>
            <FaBeer></FaBeer>
        </button>
      </div>
      <div className='links'>
        <Link to="/gerardoh085_repo/">Home</Link>
        <Link to="/gerardoh085_repo/experience">Experience</Link>
        <Link to="/gerardoh085_repo/projects">Projects</Link>
      </div>
    </div>
  )
}

export default Navbar
