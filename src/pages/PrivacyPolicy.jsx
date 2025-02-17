import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Lazy load Footer
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <FontAwesomeIcon icon={faSpinner} className="text-4xl text-primary animate-spin" />
  </div>
);

const PrivacyPolicy = () => {
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
                Privacy Policy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/90"
              >
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-600">
                  This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
                <p className="text-neutral-600">
                  When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-neutral-600">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-neutral-600">
                  <li>Provide and maintain our website</li>
                  <li>Improve and optimize our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Develop new products, services, features, and functionality</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
                <p className="text-neutral-600">
                  We implement appropriate technical and organizational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-neutral-600">
                  We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                <p className="text-neutral-600">
                  For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email or by mail using the details provided on our contact page.
                </p>
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

export default PrivacyPolicy; 