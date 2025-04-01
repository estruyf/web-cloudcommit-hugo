import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import RegistrationModal from '../components/RegistrationModal';

// Generate random speakers
const getRandomSpeakers = (seed: string) => {
  const speakers = [
    {
      name: 'Dr. Cloud Kubernetes',
      title: 'Principal DevOps Architect',
      company: 'MicroScale Inc',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Sarah Serverless',
      title: 'CTO',
      company: 'Functions Ltd',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Mike Microservice',
      title: 'Cloud Solutions Architect',
      company: 'Docker Dreams',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Lisa Lambda',
      title: 'VP of Engineering',
      company: 'Quantum Compute',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Peter Pipeline',
      title: 'CI/CD Expert',
      company: 'Continuous Inc',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Donna Data',
      title: 'AI Research Lead',
      company: 'Neural Networks LLC',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];
  
  // Use the seed to determine which speakers to show, but in a deterministic way
  const seedNum = seed.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const selectedSpeakers = [];
  
  for (let i = 0; i < 4; i++) {
    const index = (seedNum + i) % speakers.length;
    selectedSpeakers.push(speakers[index]);
  }
  
  return selectedSpeakers;
};

// Get random schedule based on seed
const getRandomSchedule = (seed: string) => {
  const topics = [
    'Keynote: The Future of Cloud Technology',
    'Workshop: Serverless Architecture Deep Dive',
    'Panel: Security in the Age of Microservices',
    'Building Resilient Systems in the Cloud',
    'DevOps Best Practices for Enterprise',
    'From Monolith to Microservices: A Journey',
    'AI and Machine Learning in Cloud Applications',
    'Scaling to a Million Users: Lessons Learned',
    'Kubernetes in Production: War Stories',
    'The Art of Cloud Cost Optimization'
  ];
  
  const seedNum = seed.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const schedule = [];
  
  for (let i = 0; i < 5; i++) {
    const hour = 9 + i;
    const topicIndex = (seedNum + i) % topics.length;
    schedule.push({
      time: `${hour}:00 - ${hour + 1}:00`,
      topic: topics[topicIndex]
    });
  }
  
  return schedule;
};

// Format date
const formatDate = (year: string, month: string, day: string) => {
  try {
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch (error) {
    return `${month}/${day}/${year}`;
  }
};

const EventPage: React.FC = () => {
  const { year, month, day, location, eventName } = useParams<{
    year: string;
    month: string;
    day: string;
    location: string;
    eventName: string;
  }>();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!year || !month || !day || !location || !eventName) {
    return <div>Invalid URL parameters</div>;
  }

  const formattedLocation = location.replace(/-/g, ' ');
  const formattedEventName = eventName.replace(/-/g, ' ');
  const formattedDate = formatDate(year, month, day);
  
  // Generate random content based on the URL parameters
  const seed = `${year}${month}${day}${location}${eventName}`;
  const speakers = getRandomSpeakers(seed);
  const schedule = getRandomSchedule(seed);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventName={formattedEventName}
        location={formattedLocation}
        date={formattedDate}
      />
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Link to="/" className="flex items-center text-white mb-8 hover:text-indigo-100 transition">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
                {formattedEventName}
              </h1>
              <div className="flex items-center mb-2">
                <Calendar className="mr-2" size={20} />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="mr-2" size={20} />
                <span className="capitalize">{formattedLocation}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" size={20} />
                <span>9:00 AM - 5:00 PM</span>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0">
              <button 
                onClick={handleRegisterClick}
                className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* About Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About the Event</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Join us for the most anticipated tech conference of the year! {formattedEventName} brings together industry leaders, innovators, and experts to discuss the latest trends and advancements in technology.
            </p>
            <p className="text-gray-700 mb-4">
              This exclusive event in {formattedLocation} features hands-on workshops, engaging panel discussions, and unparalleled networking opportunities. Whether you're a seasoned professional or just starting your journey in tech, this conference offers valuable insights for everyone.
            </p>
            <p className="text-gray-700">
              Don't miss this chance to learn from the best in the industry and take your skills to the next level!
            </p>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                  <p className="text-gray-700 mb-1">{speaker.title}</p>
                  <p className="text-gray-500">{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Schedule</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-b border-gray-200 last:border-b-0`}
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="font-medium text-indigo-600 md:w-48">{item.time}</div>
                  <div className="md:flex-1">
                    <h3 className="font-semibold text-lg">{item.topic}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration CTA */}
        <div className="bg-indigo-100 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-800">Secure Your Spot Today!</h2>
          <p className="text-lg text-indigo-700 mb-6">
            Limited seats available for this exclusive event. Register now to avoid disappointment.
          </p>
          <button 
            onClick={handleRegisterClick}
            className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-gray-300 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 {formattedEventName} Conference. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            This is a fake conference website created for April Fools' Day pranks. Not a real event!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventPage;