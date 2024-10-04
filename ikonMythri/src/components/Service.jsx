import React, { useState } from 'react';
import Apply from './Apply';
import recruitment from '../assets/RecruitmentProcess.jpg';

const Services = () => {
  const [selectedService, setSelectedService] = useState('learning');

  // Function to render content based on selected service
  const renderServiceContent = () => {
    switch (selectedService) {
      case 'learning':
        return (
          <div>
            <h3 className="text-2xl font-bold text-indigo-600">IkonMytri Learning Services</h3>
            <p className="mt-4 text-gray-600">
              We provide innovative educational consulting and online learning platforms. Our services are designed to meet the growing demand for quality education in the digital space.
            </p>
            <Apply/>
          </div>
        );
      case 'bpo':
        return (
          <div>
            <h3 className="text-2xl font-bold text-indigo-600">BPO Service</h3>
            <p className="mt-4 text-gray-600">
              We offer comprehensive BPO services to streamline your business operations. Our team ensures efficient customer support, data management, and back-office processing tailored to your business needs.
            </p>
          </div>
        );
      case 'recruitment':
        return (
          <div>
            <h3 className="text-2xl font-bold text-indigo-600">Recruitment Service</h3>
            <div className="mt-4 ">
              <img 
                src={recruitment} 
                alt="Recruitment Services"
                className="w-full h-64 object-full rounded-md mb-4"
              />
              <p className="text-gray-600">
                IkonMytri is one of the reputed recruitment firms, dedicated to serving diverse companies looking to expand their workforce. Our services are dynamic and responsive to the constantly changing demands of the global market.
              </p>
              <p className="mt-4 text-gray-600">
                We ensure finding the right resources as per the needs of organizations, offering professional services until the end of the recruitment process. We assist both the candidates and organizations throughout, making the hiring process as smooth as possible.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            IkonMytri Services
          </p>
        </div>

        {/* Vertical Buttons Section */}
        <div className="mt-10 flex flex-col md:flex-row">

          {/* Sidebar Navigation */}
          <div className="md:w-1/3 space-y-4">
            <button
              className={`w-full text-left p-4 text-lg rounded-lg ${
                selectedService === 'learning' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border'
              }`}
              onClick={() => setSelectedService('learning')}
            >
              IkonMytri Learning Services
            </button>
            <button
              className={`w-full text-left p-4 text-lg rounded-lg ${
                selectedService === 'bpo' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border'
              }`}
              onClick={() => setSelectedService('bpo')}
            >
              BPO Service
            </button>
            <button
              className={`w-full text-left p-4 text-lg rounded-lg ${
                selectedService === 'recruitment' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border'
              }`}
              onClick={() => setSelectedService('recruitment')}
            >
              Recruitment Service
            </button>
          </div>

          {/* Service Content */}
          <div className="md:w-2/3 mt-6 md:mt-0 md:ml-10 p-6 bg-white shadow-lg rounded-lg">
            {renderServiceContent()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
