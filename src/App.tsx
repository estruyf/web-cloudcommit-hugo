import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import CreateEvent from './pages/CreateEvent';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/:year/:month/:day/:location/:eventName" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;