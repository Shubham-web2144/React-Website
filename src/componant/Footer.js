import React from 'react';
import './style.css';



const Footer = () => {
    return (
        <div className='footer'>
            <h3> Follow Us on </h3>
            {/* link of social media */}
            <div className='footer_links'>
                <a href='https://www.github.com/Shubham-web2144/'>
                 GitHub
                </a>
                <a href='#'>
                    Instagram
                </a>
                <a href='#'>
                    Dev
                </a>
                <a href='#'>
                    Codepen
                </a>
                <a href='#'>
                    Youtube
                </a>
            </div>
            <span className="footer_text">
                &copy; 2021 Made by Shubham. All rights are reserved.
            </span>
            
        </div>
    )
}

export default Footer
