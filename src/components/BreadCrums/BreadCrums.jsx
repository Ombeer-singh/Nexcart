import React from "react";
import "./BreadCrums.css"
import  arrow from "../../assets/arrow_icon.png"



const BreadCrums =(props) => {
    const {product}=props;
    return(
        <div className="breadcrums">
            Home <img src={arrow} alt="" height="10px"/>
            SHOP <img src={arrow} alt="" height="10px" />{product.category}
            <img src={arrow} alt="" height="10px" />{product.name}
            
        </div>
    )
}
export default BreadCrums