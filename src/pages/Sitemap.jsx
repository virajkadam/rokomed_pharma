import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSpinner,
  faHome,
  faBuilding,
  faBoxesStacked,
  faBullseye,
  faHandshake,
  faUserTie,
  faPhone,
  faShieldHeart,
  faScroll,
  faSitemap
} from '@fortawesome/free-solid-svg-icons';

// Lazy load Footer
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <FontAwesomeIcon icon={faSpinner} className="text-4xl text-primary animate-spin" />
  </div>
);

const Sitemap = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: faHome,
      links: [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/contact", label: "Contact" }
      ]
    },
    {
      title: "Products & Services",
      icon: faBoxesStacked,
      links: [
        { path: "/products", label: "Our Products" },
        { path: "/wholesaler", label: "Wholesaler Portal" }
      ]
    },
    {
      title: "Company",
      icon: faBuilding,
      links: [
        { path: "/mission-vision", label: "Mission & Vision" },
        { path: "/careers", label: "Careers" }
      ]
    },
    {
      title: "Legal",
      icon: faShieldHeart,
      links: [
        { path: "/privacy-policy", label: "Privacy Policy" },
        { path: "/terms", label: "Terms of Use" }
      ]
    }
  ];

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
                Sitemap
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/90"
              >
                Complete overview of our website structure
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {siteStructure.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FontAwesomeIcon icon={section.icon} className="text-primary text-xl" />
                      </div>
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.path}
                            className="text-neutral-600 hover:text-primary transition-colors flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
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

export default Sitemap; 