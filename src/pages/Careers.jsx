import React, { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlask,
  faUserGroup,
  faGraduationCap,
  faChartLine,
  faHandshake,
  faLeaf,
  faHeartPulse,
  faLightbulb,
  faSpinner,
  faSearch,
  faLocationDot,
  faBriefcase,
  faFilter,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import JobApplicationForm from '../components/careers/JobApplicationForm';

// Lazy load Footer
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <FontAwesomeIcon icon={faSpinner} className="text-4xl text-primary animate-spin" />
  </div>
);

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'rd', name: 'R&D' },
    { id: 'quality', name: 'Quality Control' },
    { id: 'production', name: 'Production' },
    { id: 'regulatory', name: 'Regulatory Affairs' },
    { id: 'sales', name: 'Sales & Marketing' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Quality Control Analyst",
      department: "quality",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      description: "Responsible for analyzing raw materials, in-process samples, and finished products"
    },
    {
      id: 2,
      title: "R&D Scientist",
      department: "rd",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead research projects for new drug formulation development"
    },
    {
      id: 3,
      title: "Production Manager",
      department: "production",
      location: "MIDC Ranjangaon, Pune",
      type: "Full-time",
      experience: "8-10 years",
      description: "Oversee pharmaceutical manufacturing operations and team management"
    },
    {
      id: 4,
      title: "Regulatory Affairs Officer",
      department: "regulatory",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "4-6 years",
      description: "Handle drug registration and compliance documentation"
    },
    {
      id: 5,
      title: "Sales Representative",
      department: "sales",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2-4 years",
      description: "Promote pharmaceutical products to healthcare professionals"
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const culturePoints = [
    {
      icon: faFlask,
      title: "Innovation First",
      description: "Culture of continuous innovation and research excellence"
    },
    {
      icon: faUserGroup,
      title: "Collaborative Environment",
      description: "Work with talented professionals in a supportive team setting"
    },
    {
      icon: faGraduationCap,
      title: "Learning & Development",
      description: "Regular training programs and career growth opportunities"
    },
    {
      icon: faHeartPulse,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and employee wellness programs"
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
                Join Our Team
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/90 mb-8"
              >
                Build your career with a company committed to healthcare innovation
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-xl mx-auto"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for opportunities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at Rokomed</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Experience a culture that values innovation, collaboration, and personal growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culturePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-50 p-6 rounded-xl text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={point.icon} className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-neutral-600">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Explore opportunities across different departments
              </p>
            <div className="">Submit your resume at</div>
            <a href="mailto:rokomedpharma@gmail.com" className="text-primary hover:text-primary/80 transition-colors">rokomedpharma@gmail.com</a>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedDepartment === dept.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="max-w-4xl mx-auto space-y-6">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faLocationDot} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faBriefcase} />
                          {job.experience}
                        </span>
                      </div>
                      <p className="mt-2 text-neutral-600">{job.description}</p>
                    </div>
                    {/* <button 
                      onClick={() => setSelectedJob(job)}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </button> */}
                  </div>
                </motion.div>
              ))}

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-neutral-600">No positions found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Simple steps to join our team
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    step: 1,
                    title: "Submit Application",
                    description: "Fill out the online application form and upload your resume"
                  },
                  {
                    step: 2,
                    title: "Initial Screening",
                    description: "Our HR team will review your application and credentials"
                  },
                  {
                    step: 3,
                    title: "Interviews",
                    description: "Technical and cultural fit interviews with the team"
                  },
                  {
                    step: 4,
                    title: "Final Selection",
                    description: "Offer letter and documentation process"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neutral-50 p-6 rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-neutral-600">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Employee Benefits</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                We offer competitive benefits to support our team
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Health & Wellness",
                  items: [
                    "Comprehensive health insurance",
                    "Dental and vision coverage",
                    "Life insurance",
                    "Wellness programs"
                  ]
                },
                {
                  title: "Professional Growth",
                  items: [
                    "Training programs",
                    "Conference attendance",
                    "Certification support",
                    "Career development"
                  ]
                },
                {
                  title: "Lifestyle",
                  items: [
                    "Flexible work hours",
                    "Paid time off",
                    "Festival celebrations",
                    "Team building events"
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-neutral-600">
                        <FontAwesomeIcon icon={faChevronRight} className="text-primary text-sm" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Job Application Form Modal */}
      {selectedJob && (
        <JobApplicationForm
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

      {/* Lazy loaded Footer with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Careers; 