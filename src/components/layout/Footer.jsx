import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faChevronRight,
  faArrowUp,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { COMPANY_INFO } from '../../config/company';
import rokomedLogo from '../../assets/logos/rokomed-logo.png';
import CareerOpportunityStrip from '../common/CareerOpportunityStrip';
import smoothscroll from 'smoothscroll-polyfill';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Initialize smoothscroll polyfill
  useEffect(() => {
    // Add smooth scrolling behavior to all elements
    document.documentElement.style.scrollBehavior = 'smooth';
    smoothscroll.polyfill();
  }, []);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    try {
      // Try using native smooth scroll first
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      // Fallback for older browsers
      const scrollToTop = () => {
        const currentPosition = window.pageYOffset;
        if (currentPosition > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, currentPosition - currentPosition / 8);
        }
      };
      scrollToTop();
    }
  };

  const quickLinks = [
    { path: '/about', label: 'About' },
    { path: '/mission-vision', label: 'Mission & Vision' },
    { path: '/products', label: 'Our Products' },
    { path: '/careers', label: 'Careers' },
    { path: '/wholesaler', label: 'Wholesaler Portal' },
    { path: '/contact', label: 'Contact' }
  ];

  const productCategories = [
    { path: '/products/generic-medicines', label: 'Generic Medicines' },
    { path: '/products/specialty-medicines', label: 'Specialty Medicines' },
    { path: '/products/otc-products', label: 'OTC Products' }
  ];

  return (
    <>
      <CareerOpportunityStrip />
      {/* Scroll To Top Button with enhanced animations */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg 
          bg-primary hover:bg-primary/90 text-white 
          transition-all duration-500 ease-in-out
          transform hover:scale-110 active:scale-95
          hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Scroll to top"
        style={{
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden'
        }}
      >
        <FontAwesomeIcon 
          icon={faArrowUp} 
          className="text-xl transform transition-transform group-hover:scale-110" 
        />
      </button>
      
      <footer className="bg-neutral-900 text-white">
        {/* Pre-Footer CTA */}
        {/* <div className="bg-primary">
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
        </div> */}

        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img 
                  src={rokomedLogo}
                  alt={COMPANY_INFO.name}
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold text-primary">
                  {COMPANY_INFO.name}
                </span>
              </Link>
              <p className="text-neutral-400 mb-6">
                Leading pharmaceutical company committed to delivering high-quality, affordable medicines while maintaining the highest standards of manufacturing and ethical business practices.
              </p>
              {/* <div className="flex gap-4">
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
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Products</h4>
              <ul className="space-y-4">
                {productCategories.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-400">
                  <FontAwesomeIcon icon={faLocationDot} className="mt-1" />
                  <p>
                    {COMPANY_INFO.addresses.corporate.line1}<br />
                    {COMPANY_INFO.addresses.corporate.line2}<br />
                    {COMPANY_INFO.addresses.corporate.line3}
                  </p>
                </li>
                <li>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} />
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                    {COMPANY_INFO.email}
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
                © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 