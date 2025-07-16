import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useProducts } from '../Context/Context';
import ProductCard from '../components/ProductCard';


const SearchResults = () => {
  const { products, loading } = useProducts();
  const query = new URLSearchParams(useLocation().search).get('q')?.toLowerCase() || '';

  if (!query) return <Navigate to="/" replace />;

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(query)
  );

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600 dark:text-gray-300">
        Loading search results...
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Search Results for: <span className="text-blue-500">"{query}"</span>
      </h2>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
