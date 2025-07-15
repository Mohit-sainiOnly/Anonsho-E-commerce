import { Routes, Route, Navigate } from 'react-router-dom';
import { useProducts } from './Context/Context'; // ⬅️ added
import Navbar from './components/Navbar';
import ProductList from './pages/Home';
import CategoryPage from './components/CategoryPage';
import Cart from './pages/Cart';
import SearchResults from './pages/SearchResults';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import SkeletonApp from './components/SkeletonApp'; 

function App() {
  const { loading } = useProducts(); 

  return (
    <>
      <div className="pt-14 flex flex-col min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        
        {loading ? 
          <SkeletonApp /> 
         : (
          
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/mens" element={<CategoryPage category="men's clothing" />} />
              <Route path="/womens" element={<CategoryPage category="women's clothing" />} />
              <Route path="/jewelery" element={<CategoryPage category="jewelery" />} />
              <Route path="/electronics" element={<CategoryPage category="electronics" />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
