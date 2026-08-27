// import React, { useContext, useState } from "react";

// import "./Navbar.css"
// import  logo from "..//..//assets/logo.png.webp"
// import cart from "../../assets/cart.png"
// import { Link } from 'react-router-dom';
// import { ShopContext } from "../../Context/ShopContext";
// const Navbar =() =>{
//     const[menu,setmenu]=useState("Home")
//     const{getTotalCartItems} = useContext(ShopContext)
//     return(
//         <div className="navbar">
//              <div className="nav-logo">
//                 <img src={logo} alt="" height="50px" />
//                 <p>Shopify</p>
//              </div>
//             <ul className="nav-menu">
//                 <li onClick={()=>{setmenu("Home")}}> <Link style={{ color:"#626262"}} to ="/">Home</Link> {menu=== "Home" ? <hr/>:<></>}</li>
//                 <li onClick={()=>{setmenu("Man")}}> <Link style={{color:"#626262"}} to ="/Man">Man</Link>  {menu=== "Man" ? <hr/>:<></>}</li>
//                 <li onClick={()=>{setmenu("Woman")}}><Link style={{color:"#626262"}} to = "/Woman">Woman</Link> {menu=== "Woman" ? <hr/>:<></>}</li>
//                 <li onClick={()=>{setmenu("Kids")}}><Link style={{color:"#626262"}} to ="/kids">Kids</Link> {menu=== "Kids" ? <hr/>:<></>}</li>
//             </ul>
//              <div className="nav-login-cart">
//                 <Link to ="/login"><button>Login</button></Link>

//                 <Link to ="/cart"><img src={cart} alt="" height="40px" /></Link>
//                 <div className="nav-cart-count">{getTotalCartItems()}</div>
//             </div>
        
            
//              </div> 
                    
//     )
// }
// export default Navbar;

import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png.png"
import cart_icon from "../../assets/cart.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const {search,setSearch}= useContext(ShopContext);
    const [menu,setMenu]=useState("home")
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" height="50px" />
            <p>NexCart</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/">Home</Link>{menu==="Home" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Man")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/Man">Man
            </Link>{menu==="Man" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Woman")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/Woman">Woman
            </Link>{menu==="Woman" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/kids">Kids</Link>{menu==="Kids" ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login"> <button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" height="40px" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        <input
        className="search-box"
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  )
}

export default Navbar