import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faCompass,
  faBullseye,
  faHandshake,
  faLeaf,
  faHeartPulse,
  faShieldHeart,
  faFlask,
  faScaleBalanced,
  faSackDollar,
  faEarthAsia,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

// Lazy load Footer
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <FontAwesomeIcon icon={faSpinner} className="text-4xl text-primary animate-spin" />
  </div>
);

const MissionVision = () => {
  const strategicObjectives = [
    {
      icon: faFlask,
      title: "Research & Innovation",
      description: "Continuous investment in R&D to develop innovative healthcare solutions"
    },
    {
      icon: faHandshake,
      title: "Market Expansion",
      description: "Extend our presence across India and explore international markets"
    },
    {
      icon: faLeaf,
      title: "Sustainability",
      description: "Implement eco-friendly practices in manufacturing and operations"
    },
    {
      icon: faHeartPulse,
      title: "Healthcare Access",
      description: "Make quality healthcare accessible to all segments of society"
    }
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary/90 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Our Mission & Vision
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/90"
              >
                Shaping the future of healthcare through innovation and excellence
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-50 rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <FontAwesomeIcon icon={faCompass} className="text-4xl text-primary" />
                    </div>
                  </div>
                  <div className="md:w-3/4 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      "To provide high-quality, affordable medicines while maintaining the highest standards of manufacturing and ethical business practices."
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-50 rounded-2xl p-8 md:p-12 shadow-lg mt-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center">
                      <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-secondary" />
                    </div>
                  </div>
                  <div className="md:w-3/4 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      "To become a leading pharmaceutical company in India known for innovation, quality, and accessibility in healthcare solutions."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strategic Objectives */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Strategic Objectives
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-neutral-600 max-w-2xl mx-auto"
              >
                Our roadmap to achieving excellence in pharmaceutical manufacturing and healthcare
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {strategicObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={objective.icon} className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                      <p className="text-neutral-600">{objective.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Our Core Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-neutral-600 max-w-2xl mx-auto"
              >
                The principles that guide our journey towards excellence
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: faShieldHeart, title: "Quality Excellence", color: "from-blue-500 to-blue-600" },
                { icon: faHeartPulse, title: "Patient Safety", color: "from-green-500 to-green-600" },
                { icon: faLightbulb, title: "Innovation", color: "from-yellow-500 to-yellow-600" },
                { icon: faScaleBalanced, title: "Ethical Practices", color: "from-purple-500 to-purple-600" },
                { icon: faSackDollar, title: "Affordability", color: "from-red-500 to-red-600" },
                { icon: faEarthAsia, title: "Environmental Responsibility", color: "from-teal-500 to-teal-600" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl aspect-square"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative h-full p-6 flex flex-col items-center justify-center text-white">
                    <FontAwesomeIcon icon={value.icon} className="text-4xl mb-4" />
                    <h3 className="text-xl font-semibold text-center">{value.title}</h3>
                  </div>
                </motion.div>
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

export default MissionVision; 