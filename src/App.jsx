import React from "react"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ShopCategory from "./Page/ShopCategory"
import Shop  from "./Page/shop"
import Product from "./Page/Product"
import Cart from "./Page/Cart"
import LoginSignUp from "./Page/LoginSignUp"
import Footer from "./components/Footer/Footer"
import kidsbanner from "./assets/kidsbanner.webp"
import manbanner from "./assets/man banner.jpg"
import womanbanner from "./assets/woman banner.avif"
// import ShopContextProvider from "./Context/ShopContext"



function App(){

  return (
   <div>
    <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path ="/" element={<Shop/>}/>
  <Route path ="/Man" element={<ShopCategory banner ={manbanner} category="Man"/>}/>
  <Route path ="/Woman" element={<ShopCategory banner={womanbanner} category="Woman"/>}/>
  <Route path ="/Kids" element={<ShopCategory banner={kidsbanner} category="Kids"/>}/>
  <Route path="/Product" element={<Product/>}/>
  <Route path="/product/:ProductId" element={<Product/>}/>
  <Route path ="/Cart" element={<Cart/>}/>
  <Route path ="Login" element={<LoginSignUp/>}/>
  

 </Routes>
  <Footer/>
    </BrowserRouter>

   
   </div>
  )
}

export default App
