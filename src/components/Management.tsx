import { User } from 'lucide-react';

export default function Management() {
  const team = [
    {
      name: 'Momodou Lamin Bojang',
      role: 'General Manager',
      location: 'West Field (Head Quarters)',
    },
    {
      name: 'Baboucar Joof',
      role: 'Internal Audit & Compliance',
      location: 'West Field (Head Quarters)',
    },
  ];

  return (
    <section id="management" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">Management Team</h2>
          <div className="w-24 h-1 bg-navy-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the experienced professionals leading Bayba Financial Services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-aliceblue rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-navy-800 to-navy-700 p-8 flex items-center justify-center">
                <div className="bg-white bg-opacity-20 rounded-full p-8 backdrop-blur-sm">
                  <User size={80} className="text-white" />
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-navy-800 mb-2">{member.name}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-2xl p-8 md:p-12 text-white inline-block">
            <p className="text-xl md:text-2xl font-semibold max-w-3xl">
              Our leadership team brings decades of combined experience in financial services,
              ensuring excellence in every transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
