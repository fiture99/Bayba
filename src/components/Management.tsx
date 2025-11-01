import { User, X } from 'lucide-react';
import { useState } from 'react';
// Import your team member images
import momodouImage from '../images/logo.jpg';
import baboucarImage from '../images/logo.jpg';

export default function Management() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const team = [
    {
      name: 'Momodou Lamin Bojang',
      role: 'General Manager',
      location: 'West Field (Head Quarters)',
      image: momodouImage,
      background: `Momodou Lamin Bojang brings over 15 years of experience in the financial services industry. As General Manager of Bayba Financial Services, he oversees all operational aspects and strategic direction of the company. He holds a Master's degree in Business Administration and has previously held senior positions at Trust Bank Limited. Under his leadership, Bayba has expanded its network across The Gambia and implemented innovative financial solutions to serve communities better.`,
      education: "Master's in Business Administration",
      experience: '15+ years in financial services',
      achievements: [
        'Led expansion to 50+ service points nationwide',
        'Implemented digital transformation initiatives',
        'Awarded for excellence in financial inclusion'
      ]
    },
    {
      name: 'Baboucar Joof',
      role: 'Internal Audit & Compliance',
      location: 'West Field (Head Quarters)',
      image: baboucarImage,
      background: `Baboucar Joof is a seasoned professional with 12 years of expertise in audit and compliance within the financial sector. As the Head of Internal Audit & Compliance, he ensures that Bayba Financial Services adheres to all regulatory requirements and maintains the highest standards of operational integrity. He is a certified internal auditor and has extensive experience in risk management and compliance frameworks.`,
      education: 'BSc in Accounting, Certified Internal Auditor',
      experience: '12+ years in audit and compliance',
      achievements: [
        'Developed comprehensive compliance framework',
        'Maintained 100% regulatory compliance record',
        'Implemented advanced risk assessment protocols'
      ]
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="management" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">Management Team</h2>
          <div className="w-20 sm:w-24 h-1 bg-navy-800 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Meet the experienced professionals leading Bayba Financial Services
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              onClick={() => openModal(member)}
              className="bg-aliceblue rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2 cursor-pointer group"
            >
              <div className="bg-gradient-to-br from-navy-800 to-navy-700 p-6 sm:p-8 flex items-center justify-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white border-opacity-20 group-hover:scale-105 transition-transform duration-300">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  {/* Fallback icon */}
                  <div className={`absolute inset-0 bg-navy-800 flex items-center justify-center ${member.image ? 'hidden' : ''}`}>
                    <User className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-navy-800 mb-2">{member.name}</h3>
                <p className="text-base sm:text-lg font-semibold text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm sm:text-base">{member.location}</p>
                <button className="mt-4 text-navy-800 font-semibold text-sm sm:text-base hover:text-navy-600 transition-colors duration-200">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 text-white inline-block max-w-4xl">
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Our leadership team brings decades of combined experience in financial services,
              ensuring excellence in every transaction.
            </p>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div 
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-navy-800 to-navy-700 p-6 sm:p-8 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-white hover:bg-opacity-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white border-opacity-20">
                  {selectedMember.image ? (
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  {/* Fallback icon */}
                  <div className={`absolute inset-0 bg-navy-800 flex items-center justify-center ${selectedMember.image ? 'hidden' : ''}`}>
                    <User className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedMember.name}</h3>
                  <p className="text-lg sm:text-xl font-semibold text-blue-200 mb-1">{selectedMember.role}</p>
                  <p className="text-gray-200 text-sm sm:text-base">{selectedMember.location}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Background */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-navy-800 mb-3">Professional Background</h4>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {selectedMember.background}
                </p>
              </div>

              {/* Education & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-navy-800 mb-2">Education</h4>
                  <p className="text-gray-700 text-sm sm:text-base">{selectedMember.education}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800 mb-2">Experience</h4>
                  <p className="text-gray-700 text-sm sm:text-base">{selectedMember.experience}</p>
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-bold text-navy-800 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedMember.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-navy-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6 sm:p-8 bg-gray-50 rounded-b-xl sm:rounded-b-2xl">
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-8 py-3 bg-navy-800 text-white rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}