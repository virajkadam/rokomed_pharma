import React, { useState, useEffect, lazy, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faTablets, 
  faMicroscope, 
  faAward, 
  faUsers, 
  faIndustry,
  faChevronRight,
  faHeartPulse,
  faDna,
  faVial,
  faHandHoldingMedical,
  faSpinner,
  faChevronLeft,
  faPause,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import CareerOpportunityStrip from '../components/common/CareerOpportunityStrip';
import heroBg from '../assets/backgrounds/hero-bg.png';
import { productsData } from '../data/products';
// Lazy load the Footer component
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <FontAwesomeIcon icon={faSpinner} className="text-4xl text-primary animate-spin" />
  </div>
);

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [stats, setStats] = useState({ products: 0, states: 0, team: 0 });

  // Aurora gradient animation colors - adjusted for pharma theme
  const AURORA_COLORS = ["#005BAA", "#0047AB", "#1E3F66", "#17458D"];
  const color = useMotionValue(AURORA_COLORS[0]);

  // Setup aurora animation
  useEffect(() => {
    const animate = async () => {
      while (true) {
        for (const nextColor of AURORA_COLORS) {
          await new Promise(resolve => {
            const animation = color.animate(nextColor, {
              duration: 4,
              ease: "easeInOut"
            });
            animation.finished.then(resolve);
          });
        }
      }
    };
    animate();
  }, []);

  // Create dynamic gradient for text
  const textGradient = useMotionTemplate`linear-gradient(to right, ${color}, #ffffff)`;

  // Animate stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep === steps) {
        clearInterval(interval);
        return;
      }
      
      setStats({
        products: Math.floor((500 / steps) * currentStep),
        states: Math.floor((15 / steps) * currentStep),
        team: Math.floor((1000 / steps) * currentStep)
      });
      
      currentStep++;
    }, stepTime);
  };

  const productCategories = productsData.medicines.map(product => ({
    title: product.name,
    icon: product.category === 'immunity' ? faHandHoldingMedical : faTablets,
    description: product.description,
    image: product.image_url,
    stats: product.available_forms.packaging,
    category: product.category,
    prescription: product.prescription_required
  }));

  const highlights = [
    {
      icon: faDna,
      title: "Innovation",
      description: "Cutting-edge research and development",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: faVial,
      title: "Quality",
      description: "WHO-GMP certified manufacturing",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: faUsers,
      title: "People",
      description: "Expert team of healthcare professionals",
      color: "from-orange-500 to-red-500"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveCategory((prev) => 
          prev === productCategories.length - 1 ? 0 : prev + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, productCategories.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setActiveCategory(index);
    setIsAutoPlaying(false); // Stop autoplay when manually navigating
  };

  const nextSlide = () => {
    setActiveCategory((prev) => 
      prev === productCategories.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveCategory((prev) => 
      prev === 0 ? productCategories.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsSwiping(true);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    
    const currentX = e.touches[0].clientX;
    const distance = currentX - touchStartX;
    
    // Limit the swipe distance to improve UX
    const maxSwipe = window.innerWidth * 0.8;
    const limitedDistance = Math.max(Math.min(distance, maxSwipe), -maxSwipe);
    
    setSwipeDistance(limitedDistance);
    setTouchEndX(currentX);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    
    const swipeThreshold = 50; // Minimum distance to trigger slide change
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    // Reset swipe distance
    setSwipeDistance(0);
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section with Background Image and Animated Text */}
        <section className="relative min-h-[85vh] flex items-center">
          {/* Background Image with Professional Overlay */}
          <div className="absolute inset-0">
            <img 
              src={heroBg} 
              alt="Modern pharmaceutical laboratory" 
              className="w-full h-full object-cover"
            />
            {/* Primary brand color gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent"></div>
            
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10"></div>
            
            {/* Optional: Add a subtle medical-themed pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[size:20px_20px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl">
              {/* Certification Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                >
                  <FontAwesomeIcon icon={faAward} className="text-white text-lg" />
                  <span className="text-white font-medium">WHO-GMP Certified</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                >
                  <FontAwesomeIcon icon={faMicroscope} className="text-white text-lg" />
                  <span className="text-white font-medium">Research Excellence</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                >
                  <span className="text-white font-medium">Since 2015</span>
                </motion.div>
              </div>

              {/* Main Content */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
              >
                Advancing Healthcare<br />Through Innovation
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-white max-w-2xl"
              >
                Delivering Quality Healthcare Solutions with a commitment to excellence and innovation in pharmaceutical manufacturing.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  to="/products" 
                  className="bg-white text-primary hover:bg-white/90 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 group hover:translate-y-[-2px] shadow-lg"
                >
                  Explore Products
                  <FontAwesomeIcon 
                    icon={faChevronRight} 
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:translate-y-[-2px] shadow-lg border border-primary/20"
                >
                  Contact Us
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-12 pt-12 border-t border-white/10"
              >
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">200+</div>
                    <div className="text-white/80 text-sm">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-white/80 text-sm">States</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">1000+</div>
                    <div className="text-white/80 text-sm">Team Members</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <CareerOpportunityStrip />

        {/* Interactive Product Categories */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Products</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">High-quality pharmaceutical solutions for healthcare needs</p>
            </div>
            
            {/* Mobile View - Card Slider */}
            <div className="lg:hidden">
              <div className="relative">
                <div 
                  className="overflow-hidden touch-pan-y"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div 
                    className="flex transition-transform duration-300 ease-out"
                    style={{ 
                      transform: `translateX(${-activeCategory * 100 + (isSwiping ? swipeDistance : 0)}%)` 
                    }}
                  >
                    {productCategories.map((product, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-white rounded-2xl overflow-hidden">
                          <div className="relative aspect-[4/3]">
                            <img 
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                const iconContainer = e.target.nextElementSibling;
                                iconContainer.classList.remove('hidden');
                                iconContainer.classList.add('flex', 'items-center', 'justify-center', 'w-full', 'h-full', 'bg-neutral-100');
                              }}
                            />
                            <div className="hidden">
                              <FontAwesomeIcon 
                                icon={product.icon}
                                className="text-6xl text-primary/30"
                                title={product.title}
                              />
                            </div>
                            {product.prescription && (
                              <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded">
                                Rx Only
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                              <p className="text-white/90 text-sm">{product.description}</p>
                            </div>
                          </div>
                          <div className="p-6 border-t border-neutral-100">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-neutral-500">{product.stats}</span>
                              <Link 
                                to="/products"
                                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors flex items-center gap-2"
                              >
                                View Details
                                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {productCategories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeCategory === index 
                          ? 'bg-primary w-4' 
                          : 'bg-neutral-300 hover:bg-neutral-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop View - Split Layout */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5 space-y-4">
                {productCategories.map((product, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeCategory === index 
                        ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg transform hover:scale-[1.02]' 
                        : 'bg-white hover:bg-neutral-50 border border-neutral-100'
                    }`}
                    onClick={() => setActiveCategory(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${activeCategory === index ? 'bg-white/10' : 'bg-primary/5'}`}>
                        <FontAwesomeIcon 
                          icon={product.icon} 
                          className={`text-2xl ${activeCategory === index ? 'text-white' : 'text-primary'}`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                        <p className={`text-sm mb-3 ${activeCategory === index ? 'text-white/90' : 'text-neutral-600'}`}>
                          {product.description}
                        </p>
                        <div className={`text-sm font-medium ${activeCategory === index ? 'text-white/80' : 'text-primary'}`}>
                          {product.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
                  {productCategories.map((product, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 transform ${
                        activeCategory === index 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-full'
                      }`}
                    >
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const iconContainer = e.target.nextElementSibling;
                          iconContainer.classList.remove('hidden');
                          iconContainer.classList.add('flex', 'items-center', 'justify-center', 'w-full', 'h-full', 'bg-neutral-100');
                        }}
                      />
                      <div className="hidden">
                        <FontAwesomeIcon 
                          icon={product.icon}
                          className="text-8xl text-primary/30"
                          title={product.title}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h4 className="text-2xl font-bold text-white mb-3">{product.title}</h4>
                          <p className="text-white/90 mb-6 max-w-lg">{product.description}</p>
                          <Link 
                            to="/products"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-all duration-300 group"
                          >
                            View Details
                            <FontAwesomeIcon 
                              icon={faChevronRight} 
                              className="text-sm transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights with Interactive Cards */}
        <section className="py-24 bg-neutral-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Rokomed</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">Leading the way in pharmaceutical excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <FontAwesomeIcon 
                      icon={highlight.icon} 
                      className="text-4xl text-white transition-colors duration-500 mb-6"
                    />
                    <h3 className="text-xl font-semibold mb-4 text-white transition-colors duration-500">
                      {highlight.title}
                    </h3>
                    <p className="text-white/90 transition-colors duration-500">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimized Stats Section with Intersection Observer */}
        <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white stats-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold mb-2">{stats.products}+</div>
                <div className="text-xl opacity-90">Product Portfolio</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold mb-2">{stats.states}</div>
                <div className="text-xl opacity-90">States Coverage</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold mb-2">{stats.team}+</div>
                <div className="text-xl opacity-90">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with static image */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080"
            alt="Laboratory background"
            className="absolute inset-0 w-full h-full object-cover animate-scale"
          />
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl mb-8 text-white/90">
                Join our network of successful wholesalers and distributors across India
              </p>
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 group hover:translate-y-[-2px]"
              >
                Contact Us Today
                <FontAwesomeIcon 
                  icon={faChevronRight} 
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
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

export default Home; 