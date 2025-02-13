import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faChevronRight,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Pre-Footer CTA */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated with Rokomed</h3>
              <p className="text-white/80">Subscribe to our newsletter for latest updates</p>
            </div>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 min-w-[300px]"
              />
              <button className="bg-accent hover:bg-red-700 px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img 
              src="/logo-white.png" 
              alt="Rokomed Pharma" 
              className="h-12 mb-6"
            />
            <p className="text-neutral-400 mb-6">
              Leading pharmaceutical company committed to delivering high-quality, affordable medicines while maintaining the highest standards of manufacturing and ethical business practices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/wholesaler" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  Wholesaler Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/products/generic-medicines" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  Generic Medicines
                </Link>
              </li>
              <li>
                <Link to="/products/specialty-medicines" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  Specialty Medicines
                </Link>
              </li>
              <li>
                <Link to="/products/otc-products" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                  OTC Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400">
                <FontAwesomeIcon icon={faLocationDot} className="mt-1" />
                <p>
                  Survey No. 123, IT Park Road,<br />
                  Hinjewadi Phase 1, Pune - 411057<br />
                  Maharashtra, India
                </p>
              </li>
              <li>
                <a href="tel:+912012345678" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} />
                  +91-20-XXXXXXXX
                </a>
              </li>
              <li>
                <a href="mailto:info@rokomedpharma.com" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  info@rokomedpharma.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm">
              © 2024 Rokomed Pharma. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link to="/sitemap" className="text-neutral-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
            <button 
              onClick={scrollToTop}
              className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 