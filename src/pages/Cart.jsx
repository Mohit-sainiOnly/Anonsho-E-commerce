import React from 'react';
import { useProducts } from '../Context/Context';

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useProducts();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
    <div className='h-61  max-h-full md:max-h-screen flex justify-center items-center
    bg-amber-400'>
      <div className="p-8 max-w-5xl max-h-96 mx-auto   text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          🛒 Your cart is empty
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Start shopping to add items to your cart.
        </p>
      </div>
    </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl max-h-96 mx-auto text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-4 gap-4"
          >
            <div className="flex gap-4 items-start sm:items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded bg-white dark:bg-gray-800 p-2"
              />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  ${item.price} × {item.qty} ={' '}
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-sm"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Total */}
      <div className="mt-8 flex justify-between items-center flex-wrap gap-4">
        <p className="text-xl font-semibold">
          Total: <span className="text-blue-600 dark:text-blue-400">${total.toFixed(2)}</span>
        </p>
        <button
          onClick={clearCart}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded text-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
