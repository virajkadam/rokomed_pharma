import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlask,
  faAward,
  faIndustry,
  faHandshake,
  faLeaf,
  faHeartPulse,
  faShieldHeart,
  faLightbulb,
  faScaleBalanced,
  faSackDollar,
  faEarthAsia,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import CareerOpportunityStrip from '../components/common/CareerOpportunityStrip';

// Lazy load Footer
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <FontAwesomeIcon icon={faSpinner} className="text-4xl text-primary animate-spin" />
  </div>
);

const About = () => {
  const coreValues = [
    {
      icon: faShieldHeart,
      title: "Quality Excellence",
      description: "Maintaining highest standards in pharmaceutical manufacturing"
    },
    {
      icon: faHeartPulse,
      title: "Patient Safety",
      description: "Prioritizing health and well-being in every product"
    },
    {
      icon: faLightbulb,
      title: "Innovation",
      description: "Continuous research and development for better healthcare"
    },
    {
      icon: faScaleBalanced,
      title: "Ethical Practices",
      description: "Upholding integrity in all business operations"
    },
    {
      icon: faSackDollar,
      title: "Affordability",
      description: "Making quality healthcare accessible to all"
    },
    {
      icon: faLeaf,
      title: "Environmental Responsibility",
      description: "Sustainable practices for a better future"
    }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070",
      description: "25+ years of pharmaceutical expertise"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Head of R&D",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070",
      description: "Leading innovation in drug development"
    },
    {
      name: "Mr. Amit Patel",
      position: "Operations Director",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070",
      description: "Expert in pharmaceutical operations"
    }
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 animate-pulse"></div>
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
              >
                Leading the Way in Pharmaceutical Excellence
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/90 mb-6 md:mb-8 px-4"
              >
                Since 2015, we've been committed to delivering high-quality, affordable medicines while maintaining the highest standards of manufacturing and ethical business practices.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
              >
                <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <FontAwesomeIcon icon={faAward} className="text-lg" />
                  <span className="text-sm sm:text-base">WHO-GMP Certified</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <FontAwesomeIcon icon={faIndustry} className="text-lg" />
                  <span className="text-sm sm:text-base">State-of-the-art Facility</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <FontAwesomeIcon icon={faFlask} className="text-lg" />
                  <span className="text-sm sm:text-base">In-house R&D</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <CareerOpportunityStrip />


        {/* Company History Timeline */}
        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                A decade of innovation and growth in pharmaceutical excellence
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    year: "2015",
                    title: "Foundation",
                    description: "Established with a vision to provide quality healthcare solutions"
                  },
                  {
                    year: "2017",
                    title: "WHO-GMP Certification",
                    description: "Achieved WHO-GMP certification for manufacturing excellence"
                  },
                  {
                    year: "2019",
                    title: "R&D Center",
                    description: "Launched state-of-the-art Research & Development center"
                  },
                  {
                    year: "2021",
                    title: "Market Expansion",
                    description: "Extended presence to 15 states across India"
                  },
                  {
                    year: "2024",
                    title: "Product Portfolio",
                    description: "Expanded to 500+ products across multiple categories"
                  }
                ].map((milestone, index) => (
                  <div key={index} className="relative pl-8 md:pl-0">
                    <div className="md:grid md:grid-cols-5 items-center">
                      <div className="md:col-span-1 mb-4 md:mb-0 md:text-right md:pr-8">
                        <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                      </div>
                      <div className="md:col-span-4 relative">
                        <div className="absolute left-0 md:left-[-17px] top-0 md:top-1/2 md:transform md:-translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                        <div className="bg-white rounded-lg p-6 shadow-lg ml-4">
                          <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                          <p className="text-neutral-600">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team - Updated for better mobile display */}
        {/* <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto px-4">
                Experienced professionals leading innovation in healthcare
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-64 sm:h-72 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1">{leader.name}</h3>
                      <p className="text-white/90 text-sm sm:text-base mb-2">{leader.position}</p>
                      <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{leader.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Core Values - Updated for better mobile display */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto px-4">
                Principles that guide our commitment to healthcare excellence
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={value.icon} className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-neutral-600 text-sm sm:text-base">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Excellence - Updated for better mobile display */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">State-of-the-Art Manufacturing</h2>
                <p className="text-neutral-600 mb-6 md:mb-8 text-sm sm:text-base">
                  Our manufacturing facility in MIDC Ranjangaon, Pune, is equipped with the latest technology and follows stringent quality control measures to ensure the highest standards in pharmaceutical manufacturing.
                </p>
                <div className="space-y-3 md:space-y-4">
                  {[
                    "WHO-GMP certified facility",
                    "Advanced quality control laboratory",
                    "Environmental monitoring systems",
                    "Automated production lines",
                    "In-house R&D center"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-neutral-700 text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070" 
                  alt="Manufacturing facility"
                  className="rounded-lg shadow-lg w-full h-36 sm:h-48 object-cover hover:shadow-xl transition-shadow"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070" 
                  alt="Quality control"
                  className="rounded-lg shadow-lg w-full h-36 sm:h-48 object-cover hover:shadow-xl transition-shadow"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080" 
                  alt="Research lab"
                  className="rounded-lg shadow-lg w-full h-36 sm:h-48 object-cover hover:shadow-xl transition-shadow"
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070" 
                  alt="Production line"
                  className="rounded-lg shadow-lg w-full h-36 sm:h-48 object-cover hover:shadow-xl transition-shadow"
                />
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

export default About; 