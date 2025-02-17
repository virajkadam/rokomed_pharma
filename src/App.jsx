import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import MissionVision from './pages/MissionVision';
import Wholesaler from './pages/Wholesaler';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  // Handle initial route
  useEffect(() => {
    // Check if we need to redirect
    const currentPath = window.location.pathname;
    if (currentPath !== '/' && !currentPath.match(/^\/(about|products|mission-vision|wholesaler|careers|contact)$/)) {
      // Save the attempted path
      sessionStorage.setItem('lastPath', currentPath);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/wholesaler" element={<Wholesaler />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 