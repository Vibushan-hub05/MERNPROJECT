import React from 'react';
import { Link } from "react-router-dom";

const Content = () => {
    return (
        <div className="content-container">
            <img 
                className="background-image" 
                src="cookingnew.jpeg" 
                alt="Background"
            />
            <div className="overlay">
                <h4 className="quote">Food brings us together, and it's also a way to show love and appreciation.</h4>
                <button className="get-started-btn">
                    <Link to='/recipe' className='getbut'>Get Started</Link>
                </button>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <img src="logo.jpg" alt="Logo" className="footer-logo" />
                    <div className="contact-info">
                        <p><i className="fas fa-phone-alt"></i> Phone: +123 456 7890</p>
                        <p><i className="fab fa-instagram"></i> Instagram: <a href="https://www.instagram.com/villagecookingchannel_/" target="_blank" rel="noopener noreferrer">@Village Cooking Channel</a></p>
                        <p><i className="fas fa-globe"></i> Website: <a href="https://www.indianhealthyrecipes.com/" target="_blank" rel="noopener noreferrer">https://www.indianhealthyrecipes.com/</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Content;
