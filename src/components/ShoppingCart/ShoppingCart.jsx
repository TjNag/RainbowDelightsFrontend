import React, { useState, useEffect } from 'react';
import CartCard from './CartCard/CartCard';
import ProductsData from '../../CartProductsData';
import './ShoppingCart.css';
import OrderSummary from '../OrderSummary/OrderSummary';

const ShoppingCart = () => {
  const [quantities, setQuantities] = useState(
    ProductsData.map((product) => ({ id: product.id, quantity: product.quantity }))
   
  );
  
  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    const updatedProducts = ProductsData.map((product) => {
      const quantity = quantities.find((item) => item.id === product.id)?.quantity || 0;
      return {
        ...product,
        quantity: quantity, // Ensure that the quantity is updated in the productsWithSubtotal array
        subtotal: product.price * quantity,
      };
    });
    setProductsWithSubtotal(updatedProducts);
  }, [quantities]);

  const [productsWithSubtotal, setProductsWithSubtotal] = useState([]);
  const grandTotal = productsWithSubtotal.reduce((total, product) => total + product.subtotal, 0);

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="text-5xl font-medium mb-4 text-color">Your Cart</div>
        {productsWithSubtotal.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            quantity={product.quantity} // Use the updated quantity from productsWithSubtotal
            incrementQuantity={() => incrementQuantity(product.id)}
            decrementQuantity={() => decrementQuantity(product.id)}
            subtotal={product.subtotal}
          />
        ))}
      </div>
      <div className='flex justify-center'>
     <button className='flex justify-center bg-sky-500 w-25 text-white rounded'>Order summary</button>
      </div>

      <OrderSummary products={productsWithSubtotal} grandTotal={grandTotal}/>
    </>
  );
};

export default ShoppingCart;
