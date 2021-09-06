import React from 'react'
import './UserDetails.css'

function UserDetails() {
    return (
        <div className="detailsCard">
            <div className="detailsLeft">
                <div className="left_heading">
                    <p>Customer Name : </p>
                    <p>Project Manager : </p>
                    <p>Customer ID : </p>
                    <p>Product SKU : </p>
                    <p>Product Name : </p>
                </div>
                <div className="right_heading">
                    <p>Apple Computers Inc</p>
                    <p> Daniel Radcliff</p>  
                    <p>0012342</p>
                    <p>287</p>
                    <p>iMac 2020</p>
                </div>
            </div>

            <div className="detailsRight">
                <div className="left_heading">
                    <p>Created On : </p>
                    <p>Time : </p>
                    <p>Created By : </p>
                    <p>Quantity : </p>
                </div>
                <div className="right_heading">
                    <p>2/12/2021</p>
                    <p>12:43 PM</p>  
                    <p>Martha Struart</p>
                    <p>5005</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
