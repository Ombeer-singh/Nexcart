import React, { useContext } from "react";
import "./ProductDisplay.css"
import star from "../../assets/star.png"
import halfstar from"../../assets/halfstar.png"
import { ShopContext } from "../../Context/ShopContext";
import CartItems from "../CartItems/CartItems";
const ProductDisplay=( props)=>{
    const {product}= props;
    console.log("ID:", product.id);
console.log("Category:", product.category);
    const{addTocart,cartItems} =useContext(ShopContext);
    return(
     <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" height="150px" />
                <img src={product.image} alt="" height="150px" />
                <img src={product.image} alt="" height="150px" />
                
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img"  src={product.image} alt="" height="500px" />
            </div>

            
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star} alt="" height="20px" />
                <img src={star} alt="" height="20px" />
                <img src={star} alt="" height="20px" />
                <img src={star} alt="" height="20px" />
                <img src={halfstar} alt="" height="20px" />
                <p>(130)</p>
            </div>
            <div className="productdisplay-right-price">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat assumenda accusantium delectus porro obcaecati iste quibusdam necessitatibus qui, maxime ipsam error tempora.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addTocart(product.id)}}> {cartItems[product.id]>0 ?"ADDED ":"ADD TO CART"}</button>
                <div className="productdisplay-right-category">
            
                </div>
                <div className="productdisplay-right-category">
                    <span>Tags:  <span>Modern ,Latest, Trend Shorts</span></span>
                </div>


            </div>
                
            </div>
       
    )
}
export default ProductDisplay