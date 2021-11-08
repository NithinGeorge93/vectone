import React from 'react';
import Gettyimages from '../images/gettyimages-1252473576-2048x2048.png'
import Mask94 from '../images/Mask Group 94.png'
import Mask93 from '../images/Mask Group 93.png'
import Chat from '../images/chat.png';

const Body = () => {
    return (
        <div>
            <div className="body-img">
                <div className="body-content">
                    <p>Best VoIP Phone Systems for Small Businesses</p>
                    <div className="btn-box">
                        <div className="btn trial-btn">14-Day Free Trial</div>
                        <div className="btn plan-btn">Plan Purchase</div>
                    </div>
                </div>
            </div>
            <div className="benefits-box">
                <h2>Unlimited business benefits with UnifiedRing</h2>
                <p>Manage virtual teams with maximum efficiency.</p>
            </div>
            <div className="benefits-content-box">
                <div className="benefits-data">
                    <div className="frame">
                        <img src={Gettyimages} className="logo" alt="logo" />
                    </div>
                    <p>No installation, no activation fee, and no set-up fee.</p>
                </div>
                <div className="benefits-data">
                    <div className="frame">
                        <img src={Mask94} className="logo" alt="logo" />
                    </div>
                    <p>Get auto-receptionist to handle calls with customized and informative IVRs.</p>
                </div>
                <div className="benefits-data">
                    <div className="frame">
                        <img src={Mask93} className="logo" alt="logo" />
                    </div>
                    <p>Chat and collaborate efficiently with your remote teams.</p>
                </div>
            </div>
            <div className="round-caht pulse">
                <img src={Chat} className="logo" alt="logo" />
            </div>
        </div>
    )
}

export default Body;