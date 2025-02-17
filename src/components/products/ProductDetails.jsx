import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTablets,
  faListCheck,
  faCircleInfo,
  faTriangleExclamation,
  faShieldHeart,
  faFlask,
  faCapsules,
  faXmark,
  faDownload,
  faPrint
} from '@fortawesome/free-solid-svg-icons';

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-xl w-full max-w-4xl relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 transition-colors"
            aria-label="Close details"
          >
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          </button>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Product Image Section */}
            <div className="relative">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-64 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                onError={(e) => {
                  e.target.src = '/fallback-product-image.jpg';
                  e.target.onerror = null;
                }}
              />
              {product.prescription_required && (
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  Rx Only
                </div>
              )}
            </div>

            {/* Product Information Section */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-neutral-600 mb-6">{product.description}</p>

              {/* Quick Actions */}
              <div className="flex gap-3 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Download PDF</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors">
                  <FontAwesomeIcon icon={faPrint} />
                  <span>Print</span>
                </button>
              </div>

              {/* Product Details Grid */}
              <div className="grid gap-6">
                {/* Strengths & Packaging */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCapsules} className="text-primary" />
                    Available Forms
                  </h3>
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FontAwesomeIcon icon={faTablets} className="text-primary" />
                      <span>Strengths: {product.available_forms.strengths.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faListCheck} className="text-primary" />
                      <span>Packaging: {product.available_forms.packaging}</span>
                    </div>
                  </div>
                </div>

                {/* Indications */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCircleInfo} className="text-primary" />
                    Indications
                  </h3>
                  <p className="text-neutral-600">{product.details.indications.join(', ')}</p>
                </div>

                {/* Safety Information */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-accent">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    Important Safety Information
                  </h3>
                  <div className="bg-accent/5 border border-accent/10 rounded-lg p-4 text-sm">
                    <p className="text-neutral-700">
                      {product.details.important_safety_information}
                    </p>
                  </div>
                </div>

                {/* Quality Standards */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faShieldHeart} className="text-primary" />
                    Quality Standards
                  </h3>
                  <div className="bg-neutral-50 rounded-lg p-4 text-sm grid grid-cols-2 gap-4">
                    {product.details.quality_standards.map((standard, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faFlask} className="text-primary" />
                        <span>{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="border-t border-neutral-200 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Storage Instructions</h3>
                <p className="text-neutral-600 text-sm">
                  {product.details.storage_instructions}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Manufacturer</h3>
                <p className="text-neutral-600 text-sm">
                  {product.details.manufacturer}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetails; 