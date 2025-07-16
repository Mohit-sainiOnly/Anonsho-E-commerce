import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkmodeToggle';
import { useProducts } from '../Context/Context';

const Navbar = () => {
  const { cart } = useProducts();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [menuOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch('');
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900 shadow-md px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 dark:text-yellow-400">
        <Link to="/">Anonsho</Link>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 items-center font-medium text-gray-700 dark:text-gray-200">
        {['', 'mens', 'womens', 'jewelery', 'electronics'].map((path) => (
          <li key={path}>
            <NavLink
              to={`/${path}`}
              className={({ isActive }) =>
                isActive ? 'text-yellow-500 underline' : 'hover:text-yellow-500'
              }
            >
              {path === '' ? 'Home' : path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right: Search + Cart + Dark Mode + Burger */}
      <div className="flex items-center gap-4">
        {/* Desktop Search */}
        <form onSubmit={handleSearchSubmit} className="hidden md:block">
          <input
            type="search"
            inputMode="search"
            placeholder="Search..."
            className="px-3 py-1 border rounded-full dark:text-white dark:bg-gray-800 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <FaShoppingCart size={22} className="text-gray-700 dark:text-amber-400" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        </Link>

        <DarkModeToggle />

        {/* Hamburger */}
        <button className="md:hidden text-gray-700 dark:text-yellow-400" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg z-50">
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={closeMenu}><FaTimes size={20} /></button>
            </div>

            <div className="p-4 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit}>
                <input
                  ref={searchInputRef}
                  type="search"
                  inputMode="search"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border rounded-full dark:bg-gray-800 dark:text-white focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>

              {/* Mobile Nav Links */}
              <ul className="space-y-4 text-base font-medium">
                <li><NavLink to="/" onClick={closeMenu} className="hover:text-yellow-500">Home</NavLink></li>
                <li><NavLink to="/mens" onClick={closeMenu} className="hover:text-yellow-500">Men</NavLink></li>
                <li><NavLink to="/womens" onClick={closeMenu} className="hover:text-yellow-500">Women</NavLink></li>
                <li><NavLink to="/jewelery" onClick={closeMenu} className="hover:text-yellow-500">Jewellery</NavLink></li>
                <li><NavLink to="/electronics" onClick={closeMenu} className="hover:text-yellow-500">Electronics</NavLink></li>
              </ul>
            </div>
          </div>

          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={closeMenu} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
