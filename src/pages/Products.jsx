import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTablets,
  faHeartPulse,
  faHandHoldingMedical,
  faMagnifyingGlass,
  faFilter,
  faSpinner,
  faPrescriptionBottleMedical,
  faLungs,
  faBrain,
  faStethoscope,
  faVirus,
  faShieldVirus,
  faListCheck,
  faFlask,
  faCapsules
} from '@fortawesome/free-solid-svg-icons';
import CareerOpportunityStrip from '../components/common/CareerOpportunityStrip';
import { productsData } from '../data/products';

// Lazy load Footer
const Footer = lazy(() => import('../components/layout/Footer'));

// Import ProductDetails component
const ProductDetails = lazy(() => import('../components/products/ProductDetails'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <FontAwesomeIcon icon={faSpinner} className="text-4xl text-primary animate-spin" />
  </div>
);

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    prescription: []
  });

  // Get categories from data
  const categories = productsData.filters.categories;

  // Get products from data
  const products = productsData.medicines;

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilters = (
      (selectedFilters.type.length === 0 || selectedFilters.type.includes(product.type)) &&
      (selectedFilters.prescription.length === 0 || 
       selectedFilters.prescription.includes(product.prescription_required ? 'rx' : 'otc'))
    );
    return matchesCategory && matchesSearch && matchesFilters;
  });

  // Add error handling for products loading
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Add state for selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Update product details handler
  const handleProductDetails = (product) => {
    setSelectedProduct(product);
  };

  // Add error boundary for product rendering
  const renderProducts = () => {
    if (error) {
      return (
        <div className="col-span-full text-center py-8">
          <FontAwesomeIcon icon={faFlask} className="text-4xl text-accent mb-4" />
          <p className="text-neutral-600">Sorry, there was an error loading the products. Please try again.</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="col-span-full text-center py-8">
          <LoadingSpinner />
        </div>
      );
    }

    if (filteredProducts.length === 0) {
      return (
        <div className="col-span-full text-center py-8">
          <FontAwesomeIcon icon={faFlask} className="text-4xl text-primary mb-4" />
          <p className="text-neutral-600">No products found matching your criteria.</p>
        </div>
      );
    }

    return filteredProducts.map((product) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="relative h-48">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              const iconContainer = e.target.nextElementSibling;
              iconContainer.classList.remove('hidden');
              iconContainer.classList.add('flex', 'items-center', 'justify-center', 'w-full', 'h-full', 'bg-neutral-100');
            }}
          />
          <div className="hidden">
            <FontAwesomeIcon 
              icon={product.category === 'immunity' ? faPrescriptionBottleMedical : faCapsules}
              className="text-6xl text-primary/30"
              title={product.name}
            />
          </div>
          {product.prescription_required && (
            <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded">
              Rx Only
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-sm text-neutral-600 mb-4">{product.description}</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <FontAwesomeIcon icon={faTablets} className="text-primary" />
              <span>Available in: {product.available_forms.strengths.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FontAwesomeIcon icon={faListCheck} className="text-primary" />
              <span>{product.available_forms.packaging}</span>
            </div>
          </div>
          <button 
            className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => handleProductDetails(product)}
          >
            View Details
          </button>
        </div>
      </motion.div>
    ));
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Our Product Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/90 mb-8"
              >
                Comprehensive range of high-quality pharmaceutical products
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products, compositions, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <CareerOpportunityStrip />

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="lg:w-1/4">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <FontAwesomeIcon icon={faFilter} className="text-primary" />
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                            activeCategory === category.id
                              ? 'bg-primary text-white'
                              : 'hover:bg-neutral-100'
                          }`}
                        >
                          <FontAwesomeIcon icon={category.icon} />
                          <span>{category.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Product Type</h3>
                    <div className="space-y-2">
                      {['Tablet', 'Capsule', 'Syrup', 'Injection'].map((type) => (
                        <label key={type} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedFilters.type.includes(type)}
                            onChange={(e) => {
                              setSelectedFilters(prev => ({
                                ...prev,
                                type: e.target.checked
                                  ? [...prev.type, type]
                                  : prev.type.filter(t => t !== type)
                              }));
                            }}
                            className="rounded border-neutral-300 text-primary focus:ring-primary"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Prescription</h3>
                    <div className="space-y-2">
                      {[
                        { id: 'rx', label: 'Prescription Required' },
                        { id: 'otc', label: 'Over The Counter' }
                      ].map((option) => (
                        <label key={option.id} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedFilters.prescription.includes(option.id)}
                            onChange={(e) => {
                              setSelectedFilters(prev => ({
                                ...prev,
                                prescription: e.target.checked
                                  ? [...prev.prescription, option.id]
                                  : prev.prescription.filter(p => p !== option.id)
                              }));
                            }}
                            className="rounded border-neutral-300 text-primary focus:ring-primary"
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Updated Product Grid with Error Handling */}
              <div className="lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {renderProducts()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Product Details Modal */}
      <Suspense fallback={<LoadingSpinner />}>
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </Suspense>

      {/* Lazy loaded Footer with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Products; 