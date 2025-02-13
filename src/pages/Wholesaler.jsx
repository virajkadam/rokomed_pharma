import React, { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSackDollar,
  faHandshake,
  faChartLine,
  faShieldHeart,
  faTruck,
  faUsers,
  faPercent,
  faAward,
  faBoxes,
  faFileContract,
  faSpinner,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

// Lazy load Footer
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <FontAwesomeIcon icon={faSpinner} className="text-4xl text-primary animate-spin" />
  </div>
);

const Wholesaler = () => {
  const [activeTab, setActiveTab] = useState('benefits');

  const benefits = [
    {
      icon: faPercent,
      title: "Competitive Pricing",
      description: "Access to wholesale rates and volume-based discounts on our complete product range"
    },
    {
      icon: faBoxes,
      title: "Priority Stock Access",
      description: "First access to new products and guaranteed stock availability"
    },
    {
      icon: faTruck,
      title: "Efficient Distribution",
      description: "Fast and reliable delivery network across India with real-time tracking"
    },
    {
      icon: faHandshake,
      title: "Territory Protection",
      description: "Exclusive territory rights and protection of business interests"
    },
    {
      icon: faUsers,
      title: "Marketing Support",
      description: "Comprehensive marketing materials and promotional support"
    },
    {
      icon: faAward,
      title: "Training Programs",
      description: "Regular product training and business development workshops"
    }
  ];

  const requirements = [
    "Valid Drug License",
    "GST Registration",
    "Minimum 3 years of pharmaceutical distribution experience",
    "Strong financial background",
    "Established market presence",
    "Storage facility meeting WHO-GDP guidelines"
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary/90 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Become Our Business Partner
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/90 mb-8"
              >
                Join our network of successful wholesalers and distributors across India
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Register Now
                </button>
                <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Login Portal
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: faHandshake, value: "100+", label: "Wholesaler Partners" },
                { icon: faChartLine, value: "15+", label: "States Coverage" },
                { icon: faShieldHeart, value: "500+", label: "Product Portfolio" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-neutral-50"
                >
                  <FontAwesomeIcon icon={stat.icon} className="text-4xl text-primary mb-4" />
                  <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</div>
                  <div className="text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: 'benefits', label: 'Partner Benefits' },
                { id: 'requirements', label: 'Requirements' },
                { id: 'process', label: 'Registration Process' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Benefits Content */}
            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={benefit.icon} className="text-2xl text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Requirements Content */}
            {activeTab === 'requirements' && (
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-6">Eligibility Criteria</h3>
                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="text-primary" />
                        <span className="text-neutral-700">{requirement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Process Content */}
            {activeTab === 'process' && (
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-6">Registration Steps</h3>
                  <div className="space-y-8">
                    {[
                      {
                        step: 1,
                        title: "Submit Application",
                        description: "Fill out the online registration form with your business details"
                      },
                      {
                        step: 2,
                        title: "Document Verification",
                        description: "Upload required documents for verification"
                      },
                      {
                        step: 3,
                        title: "Business Review",
                        description: "Our team will review your application and market potential"
                      },
                      {
                        step: 4,
                        title: "Agreement Signing",
                        description: "Complete the partnership agreement and documentation"
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-6"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                          <p className="text-neutral-600">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Join our network of successful distributors and grow your business with Rokomed Pharma
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Registration
                </button>
                <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Sales Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lazy loaded Footer with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Wholesaler; 