import React from "react";
// import ProductsData from '../../CartProductsData';
const OrderSummary = ({products,grandTotal}) => {
    return (
        <>
        <div className="text-5xl font-medium mb-4 text-color">Order Summary</div>
      <ul>
        {products.map((products) => (
            <div className="flex justify-between items-center bg-card-color p-4 shadow rounded-lg mb-3 mx-5 my-5">
            {/* Product Image */}
            <img src={products.img} alt={products.name} className="w-16 h-16 rounded-full" />
      
            {/* Product Details */}
            <div className="flex flex-col ml-4">
              <span className="text-lg font-medium">{products.name}</span>
              {products.piece && <span className="text-sm">Quantity: {products.piece} piece</span>}
              <span className="text-sm">Price: ${products.price.toFixed(2)}</span>
            </div>
      
            {/* Quantity Selector */}
            <div className="flex items-center border rounded">
            <span className="text-sm">{products.quantity}</span>
            </div>
      
            {/* Subtotal */}
            <div>
              <span className="text-lg">${products.subtotal.toFixed(2)}</span>
            
            </div>
      
            {/* Remove Button */}
            <button className="text-2xl text-red-500 hover:text-red-700">&times;</button>
            
          </div>
        ))}
        
      </ul>
      <div className="flex justify-end">   
         <span className="text-2xl my-5 mx-5">Grand Total: $ {grandTotal}</span>
      </div>
      </>
    );
  };
export default OrderSummary