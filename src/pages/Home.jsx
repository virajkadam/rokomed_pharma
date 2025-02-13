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
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
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

  const productCategories = [
    {
      title: "Generic Medicines",
      icon: faTablets,
      description: "High-quality, affordable generic medications",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2080",
      stats: "200+ Products"
    },
    {
      title: "Specialty Medicines",
      icon: faHeartPulse,
      description: "Advanced treatments for specific conditions",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069",
      stats: "50+ Specialties"
    },
    {
      title: "OTC Products",
      icon: faHandHoldingMedical,
      description: "Trusted over-the-counter healthcare solutions",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070",
      stats: "100+ Products"
    }
  ];

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

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section with Background Image and Animated Text */}
        <section className="relative min-h-[85vh] flex items-center">
          {/* Background Image with Professional Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=2070"
              alt="Modern pharmaceutical laboratory"
              className="w-full h-full object-cover"
            />
            {/* Professional overlay with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75"></div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.2)_100%)]"></div>
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
                  className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:translate-y-[-2px] shadow-lg border border-accent/20"
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

        {/* Interactive Product Categories */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio of Care</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">Comprehensive healthcare solutions for every need</p>
            </div>
            
            {/* Mobile View - Card Slider */}
            <div className="lg:hidden">
              <div className="relative px-4">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${activeCategory * 100}%)` }}
                  >
                    {productCategories.map((category, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                          <div className="relative h-48">
                            <img 
                              src={category.image}
                              alt={category.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                              <div className="absolute bottom-4 left-4">
                                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg inline-block">
                                  <FontAwesomeIcon 
                                    icon={category.icon} 
                                    className="text-white text-xl"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                            <p className="text-neutral-600 text-sm mb-4">{category.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-primary font-medium">{category.stats}</span>
                              <Link 
                                to={`/products/${category.title.toLowerCase().replace(' ', '-')}`}
                                className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-2"
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
                
                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {productCategories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeCategory === index ? 'w-8 bg-primary' : 'bg-neutral-300'
                      }`}
                      aria-label={`View category ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop View - Split Layout */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5 space-y-4">
                {productCategories.map((category, index) => (
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
                          icon={category.icon} 
                          className={`text-2xl ${activeCategory === index ? 'text-white' : 'text-primary'}`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                        <p className={`text-sm mb-3 ${activeCategory === index ? 'text-white/90' : 'text-neutral-600'}`}>
                          {category.description}
                        </p>
                        <div className={`text-sm font-medium ${activeCategory === index ? 'text-white/80' : 'text-primary'}`}>
                          {category.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
                  {productCategories.map((category, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 transform ${
                        activeCategory === index 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-full'
                      }`}
                    >
                      <img 
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h4 className="text-2xl font-bold text-white mb-3">{category.title}</h4>
                          <p className="text-white/90 mb-6 max-w-lg">{category.description}</p>
                          <Link 
                            to={`/products/${category.title.toLowerCase().replace(' ', '-')}`}
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-all duration-300 group"
                          >
                            Explore Products
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
                  className="group relative overflow-hidden rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <FontAwesomeIcon 
                      icon={highlight.icon} 
                      className="text-4xl text-primary group-hover:text-white transition-colors duration-500 mb-6"
                    />
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
                      {highlight.title}
                    </h3>
                    <p className="text-neutral-600 group-hover:text-white/90 transition-colors duration-500">
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

        {/* News & Updates Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">Stay informed about our latest developments</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "New Product Launch",
                  date: "March 2024",
                  description: "Introducing our latest range of specialty medicines",
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
                },
                {
                  title: "WHO-GMP Certification",
                  date: "February 2024",
                  description: "Successfully renewed our WHO-GMP certification",
                  image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2072"
                },
                {
                  title: "Expansion News",
                  date: "January 2024",
                  description: "Expanding our presence to three new states",
                  image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076"
                }
              ].map((news, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="text-sm text-neutral-500 mb-2">{news.date}</div>
                    <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                    <p className="text-neutral-600 mb-4">{news.description}</p>
                    <Link 
                      to="/news" 
                      className="text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
                    >
                      Read More
                      <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                    </Link>
                  </div>
                </div>
              ))}
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