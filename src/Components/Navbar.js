import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import {Route, Redirect, HashRouter } from 'react-router-dom';
// import About from './About';
 
function Navbar({currentPage, handlePageChange}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
        <a className = "navbar-brand" href="https://www.linkedin.com/in/marcos-trejo-915923185/">Marcos Trejo Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <FontAwesomeIcon icon={faBars} style= {{color:'#fff' }}/>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">

        <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} href="#home"
        onClick={()=> handlePageChange('Home')}>Home<span className="sr-only">(current)</span></a>
        </li>

        <li className="nav-item">
        <a  
        href="#Portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
        </li>

        <li className="nav-item">
        <a  href="#Contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>

        </li>

        <li className="nav-item">
        <a  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#Resume">Resume</a>
        </li>
        </ul>
        </div>
        </div>
      </nav>
    )
}

export default Navbar
