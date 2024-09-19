import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{product.title}</h3>
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
