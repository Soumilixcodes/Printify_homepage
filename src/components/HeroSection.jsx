import React from "react";
import { TiTick } from "react-icons/ti";
import videoFile from "../assets/videoFile.webm";


const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mt-[5%] ml-[5%]">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight ml-20">
            Create and sell custom products
          </h1>
          <ul className="mt-6 leading-tight ml-20 space-y-2">
            <li className="text-lg text-gray-600"><TiTick className="inline size-8 "/> 100% Free to use</li>
            <li className="text-lg text-gray-600"><TiTick className="inline size-8" />900+ High-Quality Products</li>
            <li className="text-lg text-gray-600"><TiTick className="inline size-8"/>Largest global print network</li>
          </ul>
          <div className="mt-10 leading-tight ml-[10%] space-x-4 ">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
              Start for free
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg">
              How it works?
            </button>
            <p className="mt-5 text-left bold text-base text-green-500">Trusted by over 8M sellers around the world</p>
          </div>
        </div>
        <div className="tshirt-container lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="t-shirt-1976334_640.png"
            style={{ border:'2px solid green',borderRadius:'10px', backgroundColor:'rgb(247, 247, 247)'}}
            alt="Custom T-shirt"
            className="tshirt-image w-[50%] "/>
           <video className="video-overlay" src={videoFile} autoPlay loop muted />        
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
