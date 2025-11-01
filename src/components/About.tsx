import { Building2, Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">About Bayba</h2>
          <div className="w-20 sm:w-24 h-1 bg-navy-800 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Our Story Card */}
          <div>
            <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Story</h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                Established in January 2011, Bayba Financial Services is a 100% subsidiary of Trust Bank Limited,
                one of The Gambia's leading financial institutions. We are a licensed Money Transfer Organization
                dedicated to providing accessible and reliable financial services to communities across the nation.
              </p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="space-y-4 sm:space-y-6">
            {/* Mission Card */}
            <div className="bg-aliceblue rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-navy-800 rounded-lg p-2 sm:p-3 flex-shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-800 mb-2 sm:mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    To provide fast, secure, and affordable money transfer services that connect people
                    and support financial inclusion across The Gambia, leveraging our experienced team
                    and robust infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-aliceblue rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-navy-800 rounded-lg p-2 sm:p-3 flex-shrink-0">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-800 mb-2 sm:mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    To be the most trusted and preferred money transfer service in The Gambia,
                    recognized for our reliability, innovation, and commitment to customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">14+</div>
              <div className="text-gray-300 text-sm sm:text-base lg:text-lg">Years of Service</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-gray-300 text-sm sm:text-base lg:text-lg">Trust Bank Subsidiary</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray-300 text-sm sm:text-base lg:text-lg">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}