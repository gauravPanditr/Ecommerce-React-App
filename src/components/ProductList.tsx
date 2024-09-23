// src/components/ProductList.tsx
import React from 'react';
import { Product } from '../types/product'; // Adjust the path as needed

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void; // Function to handle adding a product to the cart
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
