import React from "react";
import "./Offer.css"
import Exclusive from "../../assets/Exclusive.webp"
const  Offers=() =>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You </h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>

            </div>
            <div className="offers-right">
                <img src={Exclusive}alt="" height="200px" />

            </div>
        </div>
    )
}
export default Offers