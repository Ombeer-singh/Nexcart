import React from "react";
import "./Footer.css"
import logo from "../../assets/logo.png.png"
import instagram from "../../assets/Instagram.svg"
import facebook from "../../assets/Facebook.webp"
import whatsapp from "../../assets/Whatsapp.webp"
const Footer =() =>{
    return(
        <div className="Footer">
            <div className="Footer-logo">
             <img src={logo} alt="" height="50px" /> 
             <p> NexCart</p> 
            </div>
            <ul className="Footer-links">
                <li>About</li>
                <li>Product</li>
                <li>Offices</li>
                <li>Company</li>
                <li>Contact</li>

            </ul>
            <div className="Footer-social-icon" >
                <div className="Footer-icon-container">
                   <img src={facebook} alt="" height="30px" /> 


                </div>
                <div className="Footer-icon-container">
                    <img src={instagram} alt="" height="30px" />

                </div>
                <div className="Footer-icon-container">
                    <img src={whatsapp} alt=""  height="30px"/>
                 </div>
            </div>
            <div className="Footer-copyright">
                <hr/>
                <p>Copyright @ 2026 - All right Reserved</p>
            </div>
        </div>

    )
}
export default Footer