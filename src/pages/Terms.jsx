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

const Terms = () => {
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
                Terms of Use
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
                  Please read these terms of use carefully before using our website.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
                <p className="text-neutral-600">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
                <p className="text-neutral-600">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Rokomed Pharma's website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
                <p className="text-neutral-600">
                  The materials on Rokomed Pharma's website are provided on an 'as is' basis. Rokomed Pharma makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Limitations</h2>
                <p className="text-neutral-600">
                  In no event shall Rokomed Pharma or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Rokomed Pharma's website.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Revisions and Errata</h2>
                <p className="text-neutral-600">
                  The materials appearing on Rokomed Pharma's website could include technical, typographical, or photographic errors. Rokomed Pharma does not warrant that any of the materials on its website are accurate, complete or current.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Links</h2>
                <p className="text-neutral-600">
                  Rokomed Pharma has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Rokomed Pharma of the site.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Modifications</h2>
                <p className="text-neutral-600">
                  Rokomed Pharma may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
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

export default Terms; 