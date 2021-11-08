import React from 'react';
import logo from '../images/logo.svg';
import call from '../images/call_icon.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-img">
                <div className="shadow">
                <img src={logo} className="logo" alt="logo" />
                </div>
               
            </div>
            <div className="ph-number">
                <span>
                    <img className="call phone" src={call} />
                </span>
                <span>02034440000</span>
            </div>
        </div>
    )
}

export default Header;