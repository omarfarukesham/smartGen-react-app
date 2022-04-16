import React from "react";
import useProducts from "../../useProducts";
import SignleProduct from "../SingleProduct/SignleProduct";
import './Products.css'
const Products = () => {
  const [products] = useProducts();

  return (
      <>
    
    <div className="container">
        <h1 className="text-center text-warning fs-1">SUMMER COLLECTION</h1>
      <div className="row">
        <div >
          <div className="product--container">

            {products.map((product) => (
              <SignleProduct key={product.id} product={product}></SignleProduct>
            ))}
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;
