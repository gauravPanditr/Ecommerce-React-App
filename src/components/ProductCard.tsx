import React from 'react';
import { Product } from '../types/product';  // Import Product type

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;  // Callback to handle adding product to cart
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-lg font-semibold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
