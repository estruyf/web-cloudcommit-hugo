import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, GitMerge, Globe, Code, AtSign, Mail, Zap, Database } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // Upcoming conference year is next year
  const nextYear = new Date().getFullYear() + 1;
  
  // Secret trigger to creator page
  const goToCreator = () => {
    navigate('/create');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hidden pixel for creator access - bottom right corner */}
      <div 
        className="fixed right-0 bottom-0 w-6 h-6 cursor-default z-50" 
        onClick={goToCreator}
        title="Create event"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Cloud Commit Conference Creator
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
              Create professional tech conference pages for your next April Fools' prank
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Choose any date</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Any location</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Unlimited pranks</span>
              </div>
            </div>
            <button 
              onClick={goToCreator}
              className="bg-white text-indigo-700 hover:bg-gray-100 transition px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
            >
              Create Your Conference
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Creator</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our conference creator tool helps you design professional-looking tech conference pages perfect for April Fools' Day pranks
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <GitMerge className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Customizable Events</h3>
              <p className="text-gray-600">
                Create personalized conference pages with custom dates, locations, and event names that look legitimate and professional
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Auto-Generated Content</h3>
              <p className="text-gray-600">
                Our tool automatically generates realistic speakers, schedules, and content based on your event details
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Sharing</h3>
              <p className="text-gray-600">
                Generate shareable links you can send to colleagues and friends for the perfect April Fools' Day prank
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create your fake conference in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Enter Details</h3>
              <p className="text-gray-600">
                Choose your conference date, location, and event name to personalize your fake event
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Generate Page</h3>
              <p className="text-gray-600">
                Our system automatically creates a professional-looking conference page with all the details
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Share Link</h3>
              <p className="text-gray-600">
                Copy the link and share it with colleagues or friends for a convincing April Fools' prank
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={goToCreator}
              className="bg-indigo-600 text-white hover:bg-indigo-700 transition px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
            >
              Create Your Conference Now
            </button>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Supported by these imaginary companies
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                <Database className="w-12 h-12 text-indigo-600 mb-3" />
                <span className="font-semibold text-gray-800">CloudStore DB</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                <Zap className="w-12 h-12 text-indigo-600 mb-3" />
                <span className="font-semibold text-gray-800">FastDeploy</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                <GitMerge className="w-12 h-12 text-indigo-600 mb-3" />
                <span className="font-semibold text-gray-800">MergeFlow</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                <Globe className="w-12 h-12 text-indigo-600 mb-3" />
                <span className="font-semibold text-gray-800">NetScale</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Become a Sponsor</h3>
              <p className="text-gray-600 mb-6">
                Interested in sponsoring this April Fools' Day tool? Get in touch with our team to discuss partnership opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:sponsor@cloudcommit.example" className="flex items-center justify-center bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a href="#" className="flex items-center justify-center bg-gray-200 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-300 transition">
                  <AtSign className="w-5 h-5 mr-2" />
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Conference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Make the most convincing April Fools' Day prank with our professional conference creator
          </p>
          <button 
            onClick={goToCreator}
            className="bg-white text-indigo-700 hover:bg-gray-100 transition px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition">Our Team</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Event Creation</a></li>
                <li><a href="#" className="hover:text-white transition">Custom Branding</a></li>
                <li><a href="#" className="hover:text-white transition">Link Sharing</a></li>
                <li><a href="#" className="hover:text-white transition">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">© {nextYear} Cloud Commit Conference Creator. All rights reserved.</p>
            <p className="text-xs mt-2 text-gray-500">For April Fools' Day pranks only. Use responsibly!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;