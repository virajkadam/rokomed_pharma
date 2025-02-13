import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faTablets, 
  faMicroscope, 
  faAward, 
  faUsers, 
  faIndustry,
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  // Image URLs from CDN
  const images = {
    hero: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2069",
    lab: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080",
    manufacturing: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070",
    quality: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070",
    products: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2080",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070",
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.hero}
            alt="Modern pharmaceutical facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                WHO-GMP Certified
              </span>
              <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">
                ISO 9001:2015
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Advancing Healthcare<br />Through Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl">
              Delivering Quality Healthcare Solutions Since 2015 with a commitment to excellence and innovation in pharmaceutical manufacturing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products" 
                className="bg-accent hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 inline-flex items-center gap-2 group"
              >
                Explore Products
                <FontAwesomeIcon 
                  icon={faChevronRight} 
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Excellence in Pharmaceutical Manufacturing</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Our state-of-the-art facilities and expert team ensure the highest quality standards in pharmaceutical production.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={images.lab}
                  alt="Research lab" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <FontAwesomeIcon icon={faFlask} className="text-5xl text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Research & Development</h3>
              <p className="text-neutral-600">State-of-the-art facilities for innovative healthcare solutions</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={images.manufacturing}
                  alt="Manufacturing facility" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <FontAwesomeIcon icon={faTablets} className="text-5xl text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Quality Products</h3>
              <p className="text-neutral-600">WHO-GMP certified manufacturing processes</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={images.quality}
                  alt="Quality testing" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <FontAwesomeIcon icon={faMicroscope} className="text-5xl text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Advanced Testing</h3>
              <p className="text-neutral-600">Rigorous quality control measures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Gradient Background */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Product Portfolio</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15</div>
              <div className="text-xl opacity-90">States Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl opacity-90">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Discover our range of high-quality pharmaceutical products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.products.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image}
                  alt={`Featured product ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">Product Category {index + 1}</h3>
                    <Link 
                      to="/products" 
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                    >
                      Learn More
                      <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights with Icons */}
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Rokomed Pharma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FontAwesomeIcon icon={faAward} className="text-4xl text-primary shrink-0 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
                <p className="text-neutral-600">Maintaining highest standards in pharmaceutical manufacturing</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FontAwesomeIcon icon={faUsers} className="text-4xl text-primary shrink-0 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-neutral-600">Dedicated professionals with years of industry experience</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <FontAwesomeIcon icon={faIndustry} className="text-4xl text-primary shrink-0 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Modern Facility</h3>
                <p className="text-neutral-600">State-of-the-art manufacturing unit in MIDC Ranjangaon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our network of successful wholesalers and distributors across India
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-white/90 font-bold py-4 px-8 rounded-lg transition duration-300 inline-flex items-center gap-2 group"
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
  );
};

export default Home; 