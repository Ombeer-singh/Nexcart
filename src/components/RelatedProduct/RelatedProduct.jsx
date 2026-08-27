import React from "react";
import "./RelatedProduct.css"
import Item from "../Item/Item"
// import data_product from "../../assets/data"
import all_product from "../../assets/all_product";
const RelatedProduct =(props) =>{
    
    return(
        <div className="relatedproduct"> 
        <h1>RelatedProducts</h1>
        <hr/>
        <div className="relatedproduct-item">
           {all_product .filter((item) => item.category === props.category) .slice(0,5).map((item,i)=>{
                 return <Item key={i}
                     id ={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}

                    />
            })}
        </div>
        </div>
    )
}
export default RelatedProduct