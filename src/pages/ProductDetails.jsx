import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../Context/Context';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useProducts();
  const product = products.find((p) => p.id === parseInt(id));

  const [qty, setQty] = useState(1);

  const increase = () => setQty((prev) => prev + 1);
  const decrease = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
  };

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        Product not found ❌
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Back to Products */}
      <Link
        to="/"
        className="inline-block mb-6 text-sm text-blue-600 hover:underline font-medium"
      >
        ← Back to Products
      </Link>

      <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        {/* Product Image */}
        <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-[400px] w-full transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 p-6 space-y-4 text-gray-800 dark:text-gray-100">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            Category: <span className="capitalize font-medium">{product.category}</span>
          </div>

          <div className="flex items-center gap-2 text-yellow-500">
            <span className="text-lg">⭐ {product.rating.rate}</span>
            <span className="text-gray-500 text-sm">({product.rating.count} reviews)</span>
          </div>

          <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">${product.price}</p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border dark:border-gray-600 rounded px-3 py-1">
              <button onClick={decrease} className="px-2 text-lg font-bold">−</button>
              <span className="px-3">{qty}</span>
              <button onClick={increase} className="px-2 text-lg font-bold">+</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-black dark:bg-yellow-400 dark:text-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition w-full sm:w-1/2"
          >
            🛒 Add {qty > 1 ? `${qty} to Cart` : 'to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
