import React from 'react'
import '../App.css'
import bgVid from '../assets/videos/globe.mp4'
import arrow from '../assets/icons/arrow.svg'

export default function Heropage() {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="list-wrapper text-center space-y-4">
          <li className="text-white text-lg sm:text-xl md:text-2xl">
            <span>I am a software developer...</span>
          </li>
          <li className="text-white text-lg sm:text-xl md:text-2xl">
            <span>
              My name is{" "}
              <strong className="text-yellow-600">Ajibola Korede...</strong>
            </span>
          </li>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-10">
          <button className="bg-yellow-600 py-3 px-6 rounded-full shadow-xl hover:scale-110 hover:duration-700 text-white text-sm md:text-base flex items-center">
            EXPLORE WORKS
            <img src={arrow} alt="Arrow" className="inline ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

