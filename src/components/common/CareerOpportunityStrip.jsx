import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';

const CareerOpportunityStrip = () => {
  const openings = [
    { role: 'Sales Representative', count: 4 },
    { role: 'Marketing Representative', count: 10 },
    { role: 'Area Business Manager', count: 3 }
  ];

  return (
    <div className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Career Openings */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            <div className="flex items-center gap-3 text-primary whitespace-nowrap">
              <FontAwesomeIcon icon={faUserTie} className="text-xl" />
              <span className="font-semibold">Career Openings:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full md:w-auto">
              {openings.map((opening, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm"
                >
                  <span className="text-neutral-700 whitespace-nowrap">{opening.role}</span>
                  <span className="inline-flex items-center justify-center bg-primary text-white w-6 h-6 rounded-full text-sm font-medium">
                    {opening.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Apply Button */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Email Section */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-sm text-neutral-600 font-medium">Send your resume via Email</span>
              <a 
                href="mailto:rokomedpharma@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                <span className="font-medium">rokomedpharma@gmail.com</span>
              </a>
            </div>

            {/* WhatsApp Section */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-sm text-neutral-600 font-medium">Share your resume on WhatsApp</span>
              <a 
                href="https://wa.me/919421405900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
              >
                <FontAwesomeIcon icon={faWhatsappBrand} className="text-lg" />
                <span className="font-medium">+91 9421405900</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunityStrip; 