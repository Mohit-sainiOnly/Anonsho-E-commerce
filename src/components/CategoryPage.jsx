import React, { useState } from 'react';
import { useProducts } from '../Context/Context.jsx';
import ProductCard from './ProductCard.jsx';
import Hero from './Hero.jsx';

const CategoryPage = ({ category }) => {
  const { products, loading } = useProducts();
  const [sortType, setSortType] = useState('');

  if (loading) return <p className="text-center">Loading...</p>;

  // Filter by category
  let filtered = products.filter(p => p.category === category);

const filteredAndSorted = [...products]
    .filter(product => {
      if (sortType === 'under-50') return product.price <=100;
      if (sortType === 'over-100') return product.price > 100;
      if (sortType === 'rating-4plus') return product.rating.rate >= 4;
      return true;
    })
    .sort((a, b) => {
      if (sortType === 'price-low') return a.price - b.price;
      if (sortType === 'price-high') return b.price - a.price;
      if (sortType === 'rating') return b.rating.rate - a.rating.rate;
      return 0;
    });

  return (
  <>
  <Hero/>
    <div className="p-4 sm:p-6 max-w-7xl mx-auto bg-white dark:bg-gray-900 transition-colors duration-300 rounded-lg shadow-sm">
  
  {/* Heading + Sort */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
    <h2 className="text-2xl font-semibold capitalize text-gray-800 dark:text-yellow-400">
      {category} Products
    </h2>

    <select
      value={sortType}
      onChange={(e) => setSortType(e.target.value)}
      className="w-full sm:w-auto border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      <option value="">Sort & Filter</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="rating">Top Rated</option>
      <option value="under-50">Price Under $100</option>
      <option value="over-100">Price Over $100</option>
      <option value="rating-4plus">Rating 4 & Above</option>
    </select>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filtered.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

    </>
  );
};

export default CategoryPage;
