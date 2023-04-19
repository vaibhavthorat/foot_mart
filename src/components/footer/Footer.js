import React from "react";
import './Footer.css';
import foot_img from "./footer.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
      <hr></hr>

      <div className="Footter-container container">
            <div className="item-1">
                  <h4>MEN</h4>
                  <ul>
                  <li><Link to="/">Formal Shoes</Link></li>
                  <li><Link to="/">Loafres</Link></li>
                  <li><Link to="/">Belts</Link></li>
            </ul> 
            </div>
            <div className="item-1">
            <h4>WOMEN</h4>
            <ul>
            <li><Link to="/">Formal Shoes</Link></li>
            <li><Link to="/">Heels</Link></li>
            <li><Link to="/">Wedding</Link></li>
            <li><Link to="/">Party Wear</Link></li>
            </ul>
            </div>
            <div className="item-1">
            <h4>KIDS</h4>
            <ul>
            <li><Link to="/">Formal Shoes</Link></li>
            <li><Link to="/">School Shoes</Link></li>
            <li><Link to="/">Sports Shoes</Link></li>
              
             
            </ul>
            </div>
            <div className="item-1">
            <h4>SUPPORT</h4>
            <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">T&C</Link></li>
             
             
            </ul>
            
            </div>
            
            <div className="item-1">
            <img src={foot_img} alt=""></img>
            </div>
      </div>
    </footer>
  );
}
