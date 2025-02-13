import React, { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faSpinner,
  faClock,
  faHeadset,
  faBuilding,
  faIndustry,
  faPaperPlane,
  faCheck,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faLinkedin,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { COMPANY_INFO } from '../config/company';

// Lazy load Footer
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <FontAwesomeIcon icon={faSpinner} className="text-4xl text-primary animate-spin" />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          type: 'general'
        });
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary to-primary/90 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/90"
              >
                We're here to help and answer any questions you might have
              </motion.p>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="relative z-10 -mt-20 mb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: faHeadset,
                  title: "Customer Support",
                  content: "24/7 dedicated support for all your queries",
                  contact: COMPANY_INFO.phone,
                  link: `tel:${COMPANY_INFO.phone}`
                },
                {
                  icon: faWhatsapp,
                  title: "WhatsApp Business",
                  content: "Quick responses through WhatsApp",
                  contact: COMPANY_INFO.whatsapp,
                  link: COMPANY_INFO.social.whatsapp
                },
                {
                  icon: faEnvelope,
                  title: "Email Us",
                  content: "Send us your queries anytime",
                  contact: COMPANY_INFO.email,
                  link: `mailto:${COMPANY_INFO.email}`
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={item.icon} className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-neutral-600 mb-3">{item.content}</p>
                      <a 
                        href={item.link}
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        {item.contact}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-8 rounded-2xl shadow-sm"
              >
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        name="type"
                        required
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="business">Business Partnership</option>
                        <option value="support">Product Support</option>
                        <option value="career">Career Related</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                          Sending Message...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <FontAwesomeIcon icon={faCheck} />
                          Message Sent Successfully
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faPaperPlane} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>

              {/* Office Locations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
                <div className="space-y-6">
                  {/* Corporate Office */}
                  <div className="bg-neutral-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faBuilding} className="text-2xl text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Corporate Office</h3>
                        <p className="text-neutral-600 mb-4">
                          {COMPANY_INFO.addresses.corporate.line1}<br />
                          {COMPANY_INFO.addresses.corporate.line2}<br />
                          {COMPANY_INFO.addresses.corporate.line3}
                        </p>
                        <div className="space-y-2">
                          <a href={`tel:${COMPANY_INFO.addresses.corporate.phone}`} className="flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors">
                            <FontAwesomeIcon icon={faPhone} />
                            {COMPANY_INFO.addresses.corporate.phone}
                          </a>
                          <div className="flex items-center gap-2 text-neutral-600">
                            <FontAwesomeIcon icon={faClock} />
                            {COMPANY_INFO.addresses.corporate.timing}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Manufacturing Unit */}
                  <div className="bg-neutral-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faIndustry} className="text-2xl text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Manufacturing Unit</h3>
                        <p className="text-neutral-600 mb-4">
                          {COMPANY_INFO.addresses.manufacturing.line1}<br />
                          {COMPANY_INFO.addresses.manufacturing.line2}<br />
                          {COMPANY_INFO.addresses.manufacturing.line3}
                        </p>
                        <div className="space-y-2">
                          <a href={`tel:${COMPANY_INFO.addresses.manufacturing.phone}`} className="flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors">
                            <FontAwesomeIcon icon={faPhone} />
                            {COMPANY_INFO.addresses.manufacturing.phone}
                          </a>
                          <div className="flex items-center gap-2 text-neutral-600">
                            <FontAwesomeIcon icon={faClock} />
                            {COMPANY_INFO.addresses.manufacturing.timing}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  {/* <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
                    <div className="flex gap-4">
                      {[
                        { icon: faLinkedin, label: 'LinkedIn', link: COMPANY_INFO.social.linkedin },
                        { icon: faFacebook, label: 'Facebook', link: COMPANY_INFO.social.facebook },
                        { icon: faTwitter, label: 'Twitter', link: COMPANY_INFO.social.twitter },
                        { icon: faWhatsapp, label: 'WhatsApp', link: COMPANY_INFO.social.whatsapp }
                      ].map((social, index) => (
                        <a 
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 rounded-lg bg-white shadow-sm hover:shadow-md flex flex-col items-center gap-2 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                          aria-label={social.label}
                        >
                          <FontAwesomeIcon icon={social.icon} className="text-xl" />
                          <span className="text-xs font-medium">{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Map Container */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6974539881264!2d73.73465287499171!3d18.58956058246365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbde6f9f8a03%3A0xb073c24c5afe7ddb!2sHinjewadi%20Phase%201%2C%20Hinjawadi%2C%20Pune%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1709799171099!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">Visit Us</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-2">Corporate Office</h4>
                      <p className="text-neutral-600 text-sm">
                        {COMPANY_INFO.addresses.corporate.line1}<br />
                        {COMPANY_INFO.addresses.corporate.line2}<br />
                        {COMPANY_INFO.addresses.corporate.line3}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-2">Manufacturing Unit</h4>
                      <p className="text-neutral-600 text-sm">
                        {COMPANY_INFO.addresses.manufacturing.line1}<br />
                        {COMPANY_INFO.addresses.manufacturing.line2}<br />
                        {COMPANY_INFO.addresses.manufacturing.line3}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-neutral-100">
                      <a 
                        href="https://www.google.com/maps/place/Hinjewadi+Phase+1,+Hinjawadi,+Pune,+Maharashtra+411057/@18.5895606,73.7346529,17z/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        <FontAwesomeIcon icon={faLocationDot} />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
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

export default Contact;