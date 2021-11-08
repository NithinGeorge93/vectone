import React from 'react';
import logo from '../images/logo.svg';
import Group1 from '../images/Group 22857.png';
import Group2 from '../images/Group 22856.png';
import Group3 from '../images/Group 22847.png';
import Group4 from '../images/Group 23379.png';
import Group5 from '../images/Group 23378.png';

const Footer = () => {
    return (
        <div className="footer-box">
            <div>
               <img src={logo} className="logo-f" alt="logo" />
            </div>
            <div>
                <p>2020 UnifiedRing. All rights reserved</p>
            </div>
            <div>
                <ul className="social-menu">
                    <li>
                        <a href="javascript:void(0)">
                            <img src={Group1} className="logo" alt="logo" />
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src={Group2} className="logo" alt="logo" />
                            <span>Twitter</span>
                        </a>
                    </li>
                    <li>        
                        <a href="javascript:void(0)">
                            <img src={Group3} className="logo" alt="logo" />
                            <span>YouTube</span>
                        </a>
                    </li>
                    <li>
                       <a href="javascript:void(0)">
                            <img src={Group4} className="logo" alt="logo" />
                            <span>Instagram</span>
                       </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src={Group5} className="logo" alt="logo" />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;