import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-white px-4 py-10 mt-1">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
    <div>
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">ShopSmart</h2>
      <p className="text-gray-300">
        Discover the latest trends in fashion, electronics, and more. Enjoy exclusive deals and fast delivery.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-300">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/shop" className="hover:text-white">Shop</a></li>
        <li><a href="/about" className="hover:text-white">About Us</a></li>
        <li><a href="/contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Follow Us</h3>
      <div className="flex space-x-4 text-gray-300">
        <a href="#"><FaFacebook size={24} /></a>
        <a href="#"><FaTwitter size={24} /></a>
        <a href="#"><FaInstagram size={24} /></a>
        <a href="#"><FaLinkedin size={24} /></a>
      </div>
    </div>
  </div>
  <div className="text-center text-gray-500 text-xs mt-10">
    © {new Date().getFullYear()} <span className="text-yellow-400">ShopSmart</span>. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
