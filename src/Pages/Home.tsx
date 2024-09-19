import React from 'react';
import { useProductFetch } from '../hooks/useProductFetch';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
  const { data: products, loading, error } = useProductFetch();

  if (loading) return <p className="p-4">Loading products...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold p-4">Product List</h1>
      <ProductList products={products || []} />
    </div>
  );
};

export default Home;
