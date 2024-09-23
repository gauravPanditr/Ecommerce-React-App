// src/components/Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust the path based on your structure

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items); // Get cart items from the Redux store

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.product.id} className="flex items-center border-b py-4">
            <img
              src={item.product.image}
              alt={item.product.title}
              className="w-16 h-16 object-cover mr-4"
            />
            <div className="flex-grow">
              <h3 className="font-semibold">{item.product.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.product.price.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
