import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-navy-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with us for any inquiries or assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-aliceblue rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-navy-800 rounded-lg p-3 flex-shrink-0">
                  <MapPin size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">Head Office</h3>
                  <p className="text-gray-700 leading-relaxed">
                    West Field, Serrekunda<br />
                    The Gambia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-aliceblue rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-navy-800 rounded-lg p-3 flex-shrink-0">
                  <Phone size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">Phone</h3>
                  <p className="text-gray-700 leading-relaxed">
                    +220 XXX XXXX<br />
                    +220 XXX XXXX
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-aliceblue rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-navy-800 rounded-lg p-3 flex-shrink-0">
                  <Mail size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">Email</h3>
                  <p className="text-gray-700 leading-relaxed">
                    info@mybayba.com<br />
                    support@mybayba.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-aliceblue rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-navy-800 rounded-lg p-3 flex-shrink-0">
                  <Clock size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">Business Hours</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[500px]">
            <div className="bg-aliceblue rounded-xl p-4 shadow-lg h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.4899424896974!2d-16.677215!3d13.441444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI2JzI5LjIiTiAxNsKwNDAnMzguMCJX!5e0!3m2!1sen!2sgm!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem', minHeight: '480px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bayba Financial Services Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy-800 to-navy-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Visit any of our branches or contact us today to experience fast and reliable money transfer services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+220XXXXXXX"
              className="px-8 py-4 bg-white text-navy-800 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@mybayba.com"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
