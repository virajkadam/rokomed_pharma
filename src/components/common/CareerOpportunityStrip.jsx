import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';
import { COMPANY_INFO } from '../../config/company';

const CareerOpportunityStrip = () => {
  const openings = [
    { role: 'Sales Representative', count: 4 },
    { role: 'Marketing Representative', count: 10 },
    { role: 'Area Business Manager', count: 3 }
  ];

  return (
    <div className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Career Openings */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 text-primary whitespace-nowrap">
              <FontAwesomeIcon icon={faUserTie} className="text-xl" />
              <span className="font-semibold">Career Openings:</span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {openings.map((opening, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full shadow-sm"
                >
                  <span className="text-neutral-700 whitespace-nowrap text-sm">{opening.role}</span>
                  <span className="inline-flex items-center justify-center bg-primary text-white w-5 h-5 rounded-full text-xs font-medium">
                    {opening.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Apply Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Email Section */}
            <div className="w-full sm:w-auto">
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm w-full sm:w-auto whitespace-nowrap text-sm"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="font-medium">{COMPANY_INFO.email}</span>
              </a>
            </div>

            {/* WhatsApp Section */}
            <div className="w-full sm:w-auto">
              <a 
                href={COMPANY_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-sm w-full sm:w-auto whitespace-nowrap text-sm"
              >
                <FontAwesomeIcon icon={faWhatsappBrand} />
                <span className="font-medium">{COMPANY_INFO.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunityStrip; 