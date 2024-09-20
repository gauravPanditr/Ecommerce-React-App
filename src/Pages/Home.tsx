import React from "react";
import { useProductFetch } from "../hooks/useProductFetch";
import ProductList from "../components/ProductList";
import Navbar from "../components/navbar"; // Import your Navbar component

const Home: React.FC = () => {
  const { data: products, loading, error } = useProductFetch();

  if (loading) return <p className="p-4 text-white">Loading products...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="p-4">
    
        <ProductList products={products || []} />
      </div>
    </div>
  );
};

export default Home;
