import React from 'react'
import './Header.css';
import logo from '../logo.png';
import barcode from '../barcode.png';
function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logoImage" />
            <div className="orderNo">
                <p>Work Order No</p>
                <img src={barcode} alt="orderImage" />
                <p>12312323</p>
            </div>
        </div>
    )
}

export default Header
