import React from "react";
import "./Newletter.css"

const Newletter= ()=>{
    return(
        <div className=" Newletter">
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our newsletter and stay updated </p>
            <div >
                <input type="Email" placeholder="Your email id " />
                <button>Subscribe</button>



            </div>
        </div>
    )
}
export default Newletter

