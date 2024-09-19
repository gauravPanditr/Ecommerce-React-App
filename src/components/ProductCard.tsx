import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
