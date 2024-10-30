import React from "react";
import speaker1 from "./assets/amangupta.png";
import speaker2 from "./assets/anupammittal.png";
import speaker3 from "./assets/namita.png";
const SpeakerCard = ({ speaker }) => {
  return (
    <div className="relative m-4 overflow-hidden transition-transform duration-500 transform rounded-lg shadow-lg cursor-pointer w-36 h-36 md:w-48 md:h-48 hover:scale-105 hover:rotate-3 hover:shadow-xl neon-3d-border">
      <div
        className="w-full h-full transition-opacity duration-300 scale-100 bg-center bg-cover hover:scale-110"
        style={{ backgroundImage: `url(${speaker.image})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-70 hover:opacity-100">
        <h3 className="text-lg font-bold text-neon-gold animate__animated animate__fadeInDown animate__delay-1s">{speaker.name}</h3>
        <p className="text-sm text-neon-orange animate__animated animate__fadeInDown animate__delay-2s">{speaker.designation}</p>
        <p className="mt-1 text-xs text-gray-300 animate__animated animate__fadeInDown animate__delay-3s">{speaker.details}</p>
      </div>
    </div>
  );
};

const FullPageSpeakerList = () => {
  const speakers = [
    {
      name: "Aman Gupta",
      designation: "Founder & CEO Boat",
      details: "Entrepreneur and product leader with a passion for building consumer brands.",
      image: speaker1,
    },
    {
      name: "Anupam Mittal",
      designation: "Founder & CEO Shaadi.com",
      details: "Serial entrepreneur and investor with a track record of building global companies.",
      image: speaker2,
    },
    {
      name: "Namita Thapar",
      designation: "Executive Director, Emcure Pharmaceuticals",
      details: "Pharma leader with a focus on innovation and sustainability.",
      image: speaker3,
    },
  ];

  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="mb-6 text-3xl font-bold text-center text-neon-gold">Our Speakers</h1>
      <div className="flex flex-wrap justify-center h-auto gap-16">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default FullPageSpeakerList;
