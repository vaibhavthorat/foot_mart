import React from 'react';
import { Link } from 'react-router-dom'
import logo from "./logo.png";
import './Navbar.css';
export default function Navbar (){

 
    
    return(
            <nav style={{ minHeight:'130px',backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(38,51,97,1) 0%, rgba(65,143,222,1) 79% )'}} className="nav-wrapper">
                    
                <div className="container-fluid">
                <Link to="/" className="brand-logo left" ><img src={logo} alt='' ></img></Link>
                {/* <Link to="/" className="brand-logo left" ><img src={logo2} ></img></Link> */}
                    <ul className="right">
                        
                        {/* <li className='b_logo'><Link to="/"><img src={logo} ></img></Link></li> */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </nav>
    )
};

