import React from 'react';
import './Style.css';  
import image1 from '../assest/img1.jpg';
import image2 from '../assest/img2.jpg';

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 bg-white lg:ml-60">
      <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <div className="absolute z-10 top-0 left-0 lg:left-auto lg:right-0 transform lg:-translate-x-1/4 lg:translate-y-1/4">
          <img
            src={image1}
            alt="Volunteers"
            className="rounded-lg shadow-lg w-[200px] lg:w-[350px]"
          />
        </div>
        <div className="mt-24 lg:mt-48">
          <img
            src={image2}
            alt="Child Writing"
            className="rounded-lg shadow-lg w-[300px] lg:w-[450px]"
          />
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-1/2 text-center lg:text-left">
        <span className="font-sans font-semibold text-lg lg:text-xl">ABOUT US</span>
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 mt-5">What we are doing</h2>
        <p className="text-gray-700 mb-4 text-sm lg:text-base md:text-lg tracking-wide font-sans mt-6">
          We’ve been giving children around the world a healthy start in life and the opportunity to learn. We do whatever it takes to save children, transforming their lives and the future we share.
        </p>
        <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition mt-10">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default About;
