import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {


  return (
    <div className="relative group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg dark:shadow-gray-700 transition duration-300 overflow-hidden cursor-pointer">
    
   

      {/* 🖼️ Image link */}
      <Link to={`/product/${product.id}`}>
        <div className="relative w-full h-60 bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* 📝 Product Details */}
      <div className="p-4 space-y-2">
        <h2 className="text-md font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
          Category: {product.category}
        </p>

        <p className={`text-sm font-medium ${product.rating.count < 5 ? 'text-red-500' : 'text-green-600'}`}>
          {product.rating.count < 5
            ? `Only ${product.rating.count} left in stock!`
            : `In Stock (${product.rating.count})`}
        </p>

        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
          ${product.price}
        </p>

        {product.rating && (
          <p className="text-yellow-500 text-sm">
            ⭐ {product.rating.rate}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
