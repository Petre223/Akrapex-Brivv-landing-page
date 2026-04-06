import React from 'react'
import HeroSection from '../assets/Hero_img.png';

const Hero = () => {
  return <>
    <div className="max-w-7xl mx-auto flex justify-between items-center px-20 gap-64">
      <div className="bg-white">
        {/* Badge */}
        <div className="inline-flex items-center bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full mb-6 mt-30">
          ✔ 100% Scam-Free Guarantee
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Find, Verify, and Secure <br />
          Your Next <span className="text-green-600">Property</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          Browse trusted listings, watch real video tours, pay bills,
          and complete property transactions seamlessly with BRIVV.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg">
            Browse Properties
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg">
            List Your Property
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-600">✔</span>
            <span>10,000+ Properties</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">👥</span>
            <span>5,000+ Happy Tenants</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">🛡</span>
            <span>Verified Listings</span>
          </div>
        </div>
      </div>

      <div>
        <img
          src={HeroSection}
          alt="Hero Image"
          className="w-100 h-120 mt-20"
        />
      </div>
    </div>
  
  </>
}

export default Hero
