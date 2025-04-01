import React, { useState } from 'react';
import { Calendar, MapPin, Users, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState((new Date().getMonth() + 1).toString().padStart(2, '0'));
  const [day, setDay] = useState(new Date().getDate().toString().padStart(2, '0'));
  const [location, setLocation] = useState('');
  const [eventName, setEventName] = useState('');
  const [copied, setCopied] = useState(false);

  const generateUrl = () => {
    if (!location || !eventName) return '';
    
    const formattedLocation = location.toLowerCase().replace(/\s+/g, '-');
    const formattedEventName = eventName.toLowerCase().replace(/\s+/g, '-');
    
    return `/${year}/${month}/${day}/${formattedLocation}/${formattedEventName}`;
  };

  const handleGenerate = () => {
    const url = generateUrl();
    if (url) {
      navigate(url);
    }
  };

  const handleCopy = () => {
    const url = `${window.location.origin}${generateUrl()}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-600 mb-2">Cloud Commit Conference</h1>
        <p className="text-xl text-gray-600">
          Create a fake conference page to prank your colleagues or friends!
        </p>
        <p className="mt-2 text-gray-500 italic">
          As it is April 1st, why not create your fake event to tell your colleagues/partner you cannot miss this event.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create Your Fake Event</h2>
        
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Date</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="MM"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Location</label>
            <input
              type="text"
              placeholder="e.g. San Francisco"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2 font-medium">Event Name</label>
            <input
              type="text"
              placeholder="e.g. Advanced DevOps Summit"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleGenerate}
            disabled={!location || !eventName}
            className="flex-1 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Generate Conference Page
          </button>
          
          <button
            onClick={handleCopy}
            disabled={!location || !eventName}
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-200 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? (
              <>
                <Check size={18} />
                <span>Copied!</span>
              </>
            ) : (
              <span>Copy URL</span>
            )}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal ml-6 space-y-3">
          <li className="text-gray-700">
            Enter the date, location, and name of your fake conference event
          </li>
          <li className="text-gray-700">
            Generate your personalized conference page or copy the URL
          </li>
          <li className="text-gray-700">
            Share the link with your colleagues or friends and enjoy the prank!
          </li>
        </ol>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-700">
            <strong>Note:</strong> This is just for fun and is meant for April Fools' Day pranks. 
            Please use responsibly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;