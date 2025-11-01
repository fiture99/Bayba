import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react';

export default function Branches() {
  const branches = [
    {
      name: 'Head Office - West Field',
      address: 'West Field, Serrekunda, The Gambia',
      phone: '+220 XXX XXXX',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM',
      services: ['Money Transfers', 'Customer Service', 'Management', 'Corporate Services'],
      featured: true,
      coordinates: '13.441444,-16.677215' // Latitude, Longitude for West Field
    },
    {
      name: 'Banjul Branch',
      address: 'Banjul Central, Banjul, The Gambia',
      phone: '+220 XXX XXXX',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM',
      services: ['Money Transfers', 'Customer Support', 'International Transfers'],
      featured: false,
      coordinates: '13.453292,-16.577745' // Approximate coordinates for Banjul
    },
    {
      name: 'Brikama Branch',
      address: 'Brikama Central, Brikama, The Gambia',
      phone: '+220 XXX XXXX',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM',
      services: ['Money Transfers', 'Agent Services', 'Mobile Money'],
      featured: false,
      coordinates: '13.271000,-16.649000' // Approximate coordinates for Brikama
    },
    {
      name: 'Basse Branch',
      address: 'Basse Santa Su, Upper River Region, The Gambia',
      phone: '+220 XXX XXXX',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM',
      services: ['Money Transfers', 'Regional Services', 'Agricultural Payments'],
      featured: false,
      coordinates: '13.310000,-14.220000' // Approximate coordinates for Basse
    },
    {
      name: 'Farafenni Branch',
      address: 'Farafenni, North Bank Region, The Gambia',
      phone: '+220 XXX XXXX',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM',
      services: ['Money Transfers', 'Cross-border Services', 'Business Payments'],
      featured: false,
      coordinates: '13.566667,-15.600000' // Approximate coordinates for Farafenni
    },
    {
      name: 'Soma Branch',
      address: 'Soma, Lower River Region, The Gambia',
      phone: '+220 XXX XXXX',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM',
      services: ['Money Transfers', 'Local Agent Services', 'Utility Payments'],
      featured: false,
      coordinates: '13.433333,-15.533333' // Approximate coordinates for Soma
    }
  ];

  const openDirections = (branch: any) => {
    // Create Google Maps URL with the branch address
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(branch.address)}`;
    
    // Alternative: Use coordinates for more precise location
    // const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates}`;
    
    // Open in new tab
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  const openGoogleMaps = (branch: any) => {
    // Direct link to the location in Google Maps
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="branches" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-aliceblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
            <MapPin className="w-10 h-10 text-navy-800" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-4">
            Our <span className="text-blue-600">Branches</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-navy-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our network of branches strategically located across The Gambia for your convenience
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Featured Badge */}
              {branch.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                </div>
              )}

              {/* Header with Gradient */}
              <div className="bg-gradient-to-br from-navy-800 to-blue-700 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white text-opacity-90">
                      <div className="text-2xl font-bold">{index + 1}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{branch.name}</h3>
                </div>
              </div>

              {/* Branch Details */}
              <div className="p-6 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">{branch.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-green-100 rounded-lg p-2 flex-shrink-0">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <a 
                      href={`tel:${branch.phone}`}
                      className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-orange-100 rounded-lg p-2 flex-shrink-0">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">{branch.hours}</p>
                  </div>
                </div>

                {/* Services */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-navy-800 mb-3 text-sm uppercase tracking-wide">Services Available</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold border border-blue-200 shadow-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-4 border-t border-gray-100 bg-gray-50">
                <div className="flex gap-3">
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-navy-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <button 
                    onClick={() => openDirections(branch)}
                    className="bg-white text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm border border-gray-200 flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 sm:p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
                Nationwide <span className="text-blue-600">Coverage</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to making financial services accessible to every community across The Gambia
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {[
                { number: '6+', label: 'Branches', color: 'from-blue-500 to-blue-600' },
                { number: '50+', label: 'Agent Points', color: 'from-green-500 to-green-600' },
                { number: '7', label: 'Regions Covered', color: 'from-purple-500 to-purple-600' },
                { number: '24/7', label: 'Customer Support', color: 'from-orange-500 to-orange-600' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 mb-4`}>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-navy-800">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-6 sm:p-8 border border-blue-100 overflow-hidden">
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              Find Us Across <span className="text-blue-600">The Gambia</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our branches are strategically located to serve you better in every region
            </p>
            <button 
              onClick={() => openGoogleMaps(branches[0])} // Use first branch as example
              className="mt-4 bg-gradient-to-r from-blue-600 to-navy-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mx-auto"
            >
              <Navigation className="w-5 h-5" />
              View All Locations on Map
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-1 shadow-inner">
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197238.1389883448!2d-16.816742!3d13.454876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI3JzE3LjYiTiAxNsKwNDknMDAuMyJX!5e0!3m2!1sen!2sgm!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bayba Financial Services Branches Across The Gambia"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}