import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const benefits = [
    'Exclusive Pi Network integration',
    'Decentralized marketplace architecture',
    'Zero transaction fees for users',
    'Smart contract powered security',
    'Global community of creators',
    'Multi-category digital products'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center space-x-2 mb-6">
              <span>Revolutionary Platform</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Digital Commerce in the Pi Ecosystem
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              DigiAsset bridges the gap between Pi Network's revolutionary cryptocurrency 
              and the digital marketplace economy. We're creating the first dedicated 
              platform where Pi users can seamlessly buy, sell, and trade digital assets 
              using their Pi earnings.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center space-x-2 group">
              <span>Join the Revolution</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Platform Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Digital Art & NFTs</h4>
                  <p className="text-sm opacity-90">Unique digital collectibles and artwork</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Software & Apps</h4>
                  <p className="text-sm opacity-90">Applications and digital tools</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Templates & Designs</h4>
                  <p className="text-sm opacity-90">Web templates and graphic designs</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Domains & More</h4>
                  <p className="text-sm opacity-90">Digital assets and services</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">π</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;