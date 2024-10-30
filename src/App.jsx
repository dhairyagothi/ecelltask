import React from 'react';
import FullPageSpeakerList from './SpeakerList';

const App = () => (
  <div className="flex flex-col items-center justify-center w-screen h-screen text-white bg-black">
    <h1 className="mb-8 text-4xl font-bold text-center text-neon-blue">Event Speakers</h1>
    <FullPageSpeakerList />
  </div>
);

export default App;
