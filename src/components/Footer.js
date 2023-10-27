import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                
                <div className="footer-content">
                <div>
                    <img src={ Logo } alt="Little Lemon logo" />
                </div>
                    
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>123-Chicago Street, Chicago-575757</li>
                            <li>Tel: 123 4567 8910</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
                    <div className="locations">
                        <h5>FIND US ONLINE</h5>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer