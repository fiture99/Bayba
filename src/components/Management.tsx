import { User, X, Award, GraduationCap, Briefcase, Star } from 'lucide-react';
import { useState } from 'react';
import momodouImage from '../images/logo.jpg';
import baboucarImage from '../images/logo.jpg';

export default function Management() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const team = [
    {
      name: 'Momodou Lamin Bojang',
      role: 'General Manager',
      location: 'West Field Headquarters',
      image: momodouImage,
      background: `Momodou Lamin Bojang brings over 15 years of experience in the financial services industry. As General Manager of Bayba Financial Services, he oversees all operational aspects and strategic direction of the company. He holds a Master's degree in Business Administration and has previously held senior positions at Trust Bank Limited. Under his leadership, Bayba has expanded its network across The Gambia and implemented innovative financial solutions to serve communities better.`,
      education: "Master's in Business Administration",
      experience: '15+ years in financial services',
      achievements: [
        'Led expansion to 50+ service points nationwide',
        'Implemented digital transformation initiatives',
        'Awarded for excellence in financial inclusion',
        'Increased customer base by 40% in 3 years'
      ],
      specialties: ['Strategic Planning', 'Business Development', 'Financial Innovation']
    },
    {
      name: 'Baboucar Joof',
      role: 'Internal Audit & Compliance',
      location: 'West Field Headquarters',
      image: baboucarImage,
      background: `Baboucar Joof is a seasoned professional with 12 years of expertise in audit and compliance within the financial sector. As the Head of Internal Audit & Compliance, he ensures that Bayba Financial Services adheres to all regulatory requirements and maintains the highest standards of operational integrity. He is a certified internal auditor and has extensive experience in risk management and compliance frameworks.`,
      education: 'BSc in Accounting, Certified Internal Auditor',
      experience: '12+ years in audit and compliance',
      achievements: [
        'Developed comprehensive compliance framework',
        'Maintained 100% regulatory compliance record',
        'Implemented advanced risk assessment protocols',
        'Reduced operational risks by 60%'
      ],
      specialties: ['Risk Management', 'Regulatory Compliance', 'Internal Controls']
    },
    {
      name: 'Fatou Sowe',
      role: 'Operations Manager',
      location: 'West Field Headquarters',
      image: baboucarImage,
      background: `Fatou Sowe oversees the daily operations of Bayba Financial Services, ensuring seamless service delivery across all branches. With 10 years of experience in financial operations, she has implemented efficient processes that have significantly improved customer satisfaction and operational efficiency.`,
      education: 'BSc in Business Administration',
      experience: '10+ years in operations management',
      achievements: [
        'Streamlined operational processes',
        'Improved customer satisfaction by 35%',
        'Reduced transaction processing time by 50%',
        'Implemented staff training programs'
      ],
      specialties: ['Operations Management', 'Process Improvement', 'Customer Service']
    },
    {
      name: 'Ousman Jallow',
      role: 'IT & Digital Solutions Manager',
      location: 'West Field Headquarters',
      image: baboucarImage,
      background: `Ousman Jallow leads the technological innovation at Bayba Financial Services, driving digital transformation and ensuring robust IT infrastructure. With expertise in fintech solutions, he has been instrumental in modernizing our service delivery platforms.`,
      education: 'MSc in Computer Science',
      experience: '8+ years in IT management',
      achievements: [
        'Led digital platform development',
        'Enhanced system security protocols',
        'Implemented mobile banking solutions',
        'Reduced system downtime by 80%'
      ],
      specialties: ['IT Management', 'Digital Transformation', 'Cybersecurity']
    },
    {
      name: 'Aminata Ceesay',
      role: 'Customer Relations Manager',
      location: 'West Field Headquarters',
      image: baboucarImage,
      background: `Aminata Ceesay is dedicated to ensuring exceptional customer experiences across all Bayba service points. Her customer-centric approach has been key to building strong relationships and maintaining high service standards throughout our network.`,
      education: 'BA in Communications',
      experience: '9+ years in customer relations',
      achievements: [
        'Developed customer service standards',
        'Implemented feedback collection system',
        'Trained 100+ customer service staff',
        'Achieved 95% customer satisfaction rate'
      ],
      specialties: ['Customer Relations', 'Service Quality', 'Team Training']
    },
    {
      name: 'Lamin Sarr',
      role: 'Finance & Treasury Manager',
      location: 'West Field Headquarters',
      image: baboucarImage,
      background: `Lamin Sarr manages the financial operations and treasury functions at Bayba Financial Services. With extensive experience in financial management, he ensures the company's financial health and compliance with all financial regulations.`,
      education: 'BSc in Finance, CPA',
      experience: '11+ years in finance',
      achievements: [
        'Optimized cash flow management',
        'Implemented cost-saving measures',
        'Maintained financial compliance',
        'Improved financial reporting accuracy'
      ],
      specialties: ['Financial Management', 'Treasury Operations', 'Compliance']
    }
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
    <section id="management" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
            <User className="w-10 h-10 text-navy-800" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-4">
            Leadership <span className="text-blue-600">Team</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-navy-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders driving innovation and excellence at Bayba Financial Services
          </p>
        </div>

        {/* Team Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              onClick={() => openModal(member)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="bg-gradient-to-br from-navy-800 to-blue-700 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10 flex items-center gap-4">
                    {/* Profile Image */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-xl overflow-hidden border-4 border-white border-opacity-30 shadow-lg">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
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
                        <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-navy-700 flex items-center justify-center ${member.image ? 'hidden' : ''}`}>
                          <User className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1 shadow-md">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 leading-tight">{member.name}</h3>
                      <p className="text-blue-200 font-semibold text-sm mb-1">{member.role}</p>
                      <div className="flex items-center gap-1 text-blue-100 text-xs">
                        <User className="w-3 h-3" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-navy-800 mb-1">{member.experience.split('+')[0]}+</div>
                      <div className="text-xs text-gray-600 font-medium">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-navy-800 mb-1">{member.achievements.length}</div>
                      <div className="text-xs text-gray-600 font-medium">Achievements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-navy-800 mb-1">{member.specialties.length}</div>
                      <div className="text-xs text-gray-600 font-medium">Expertise</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-navy-800 mb-2 uppercase tracking-wide">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.slice(0, 2).map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-semibold border border-blue-200"
                        >
                          {specialty}
                        </span>
                      ))}
                      {member.specialties.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold">
                          +{member.specialties.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-navy-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-navy-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-sm">
                    View Profile
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-navy-800 to-blue-700 rounded-3xl shadow-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full translate-x-20 translate-y-20"></div>
          
          <div className="relative z-10">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Excellence in Leadership</h3>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Our leadership team combines decades of financial expertise with innovative thinking to deliver 
              exceptional service and drive financial inclusion across The Gambia. Their commitment to excellence 
              ensures that every transaction meets the highest standards of reliability and security.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Profile Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-md">
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-br from-navy-800 to-blue-700 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full -translate-y-20 translate-x-20"></div>
              
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white hover:text-yellow-300 transition-colors duration-200 p-2 rounded-xl hover:bg-white hover:bg-opacity-10 z-20"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-4 border-white border-opacity-30 shadow-2xl">
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
                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-navy-700 flex items-center justify-center ${selectedMember.image ? 'hidden' : ''}`}>
                      <User className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center lg:text-left flex-1">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{selectedMember.name}</h3>
                  <p className="text-xl text-blue-200 font-semibold mb-3">{selectedMember.role}</p>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-100 mb-4">
                    <User className="w-5 h-5" />
                    <span className="text-lg">{selectedMember.location}</span>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{selectedMember.experience.split('+')[0]}+</div>
                      <div className="text-blue-100 text-sm">Years Exp</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{selectedMember.achievements.length}</div>
                      <div className="text-blue-100 text-sm">Achievements</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Background */}
              <div>
                <h4 className="text-2xl font-bold text-navy-800 mb-4 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  Professional Background
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedMember.background}
                </p>
              </div>

              {/* Education & Experience */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
                  <h4 className="text-xl font-bold text-navy-800 mb-4 flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    Education
                  </h4>
                  <p className="text-gray-700 text-lg font-medium">{selectedMember.education}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100">
                  <h4 className="text-xl font-bold text-navy-800 mb-4 flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-600" />
                    Experience
                  </h4>
                  <p className="text-gray-700 text-lg font-medium">{selectedMember.experience}</p>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100">
                <h4 className="text-2xl font-bold text-navy-800 mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-yellow-600" />
                  Key Achievements
                </h4>
                <ul className="space-y-4">
                  {selectedMember.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                        <Award className="w-5 h-5 text-yellow-600" />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-8 bg-gray-50 rounded-b-3xl">
              <button
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-blue-600 to-navy-700 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
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