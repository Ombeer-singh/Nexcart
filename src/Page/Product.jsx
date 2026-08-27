import React from 'react';
import {ShopContext} from "../Context/ShopContext"
import {useParams} from "react-router-dom"
import BreadCrums from "../components/BreadCrums/BreadCrums"
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import { useContext } from 'react';
import Description from "../components/Description/Description"
import RelatedProduct from "../components/RelatedProduct/RelatedProduct"

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {ProductId}=useParams();
  const product = all_product.find((e)=> e.id === Number(ProductId))

  return (
    <div>
     <BreadCrums product={product}/> 
     <ProductDisplay product={product}/>
     <Description/>
     <RelatedProduct category={product.category} />
     
    
    </div>
  );
};

export default Product;