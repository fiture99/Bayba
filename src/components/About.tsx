import { Building2, Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">About Bayba</h2>
          <div className="w-24 h-1 bg-navy-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl p-8 shadow-2xl">
              <Building2 size={48} className="text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-gray-200 leading-relaxed">
                Established in January 2011, Bayba Financial Services is a 100% subsidiary of Trust Bank Limited,
                one of The Gambia's leading financial institutions. We are a licensed Money Transfer Organization
                dedicated to providing accessible and reliable financial services to communities across the nation.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-aliceblue rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-navy-800 rounded-lg p-3 flex-shrink-0">
                  <Target size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide fast, secure, and affordable money transfer services that connect people
                    and support financial inclusion across The Gambia, leveraging our experienced team
                    and robust infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-aliceblue rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-navy-800 rounded-lg p-3 flex-shrink-0">
                  <Eye size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the most trusted and preferred money transfer service in The Gambia,
                    recognized for our reliability, innovation, and commitment to customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">14+</div>
              <div className="text-gray-300 text-lg">Years of Service</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-gray-300 text-lg">Trust Bank Subsidiary</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray-300 text-lg">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
