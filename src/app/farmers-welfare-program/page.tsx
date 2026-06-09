"use client";
import { useState } from "react";
import Image from "next/image";

export default function FarmersWelfareProgramPage() {
  const [openActivity, setOpenActivity] = useState<number | null>(null);

  const focusAreas = [
    { title: "Crop insurance awareness", icon: "🛡️" },
    { title: "Subsidized financial support guidance", icon: "💰" },
    { title: "Agricultural best practices", icon: "🌿" },
    { title: "Technical and operational support", icon: "🔧" }
  ];

  const educationalActivities = [
    { 
      title: "Soil Health Awareness", 
      icon: "🧪",
      desc: "Educating farmers on soil testing, nutrient management, and maintaining optimal soil structure for better yields."
    },
    { 
      title: "Crop Scheduling", 
      icon: "📅",
      desc: "Guidance on the best times to plant, cultivate, and harvest different crops based on seasonal patterns and climate."
    },
    { 
      title: "Fertilizer Usage Guidance", 
      icon: "🧴",
      desc: "Training on the correct application rates and types of organic and inorganic fertilizers to maximize efficiency."
    },
    { 
      title: "Irrigation Management", 
      icon: "💧",
      desc: "Techniques for efficient water use, including drip irrigation, scheduling, and conserving water resources."
    },
    { 
      title: "Climate Change Adaptability", 
      icon: "🌡️",
      desc: "Strategies to help farmers adapt to changing weather patterns, extreme temperatures, and unpredictable rainfall."
    },
    { 
      title: "Market Awareness", 
      icon: "📈",
      desc: "Providing insights into current market prices, demand trends, and how to negotiate better prices for produce."
    },
    { 
      title: "Networking Opportunities", 
      icon: "🤝",
      desc: "Connecting farmers with peers, agricultural experts, and buyers to share knowledge and build relationships."
    },
    { 
      title: "Seasonal Planning", 
      icon: "🗓️",
      desc: "Assisting with long-term planning for crop rotation and farm management across different seasons."
    },
    { 
      title: "Certifications & Labels", 
      icon: "🏷️",
      desc: "Guidance on obtaining organic, fair-trade, or other valuable certifications that can increase product value."
    },
    { 
      title: "Data Analytics in Farming", 
      icon: "📊",
      desc: "Using farm data and modern software tools to track yields, expenses, and improve decision-making."
    },
    { 
      title: "Community Engagement", 
      icon: "👥",
      desc: "Fostering strong local farming communities through cooperative efforts, shared resources, and mutual support."
    },
    { 
      title: "Establishment of FPO (Farmer Producer Organizations)", 
      icon: "🏢",
      desc: "Helping farmers organize into collectives to improve their bargaining power, access better resources, and reach larger markets."
    }
  ];

  const toggleActivity = (index: number) => {
    setOpenActivity(openActivity === index ? null : index);
  };

  return (
    <main className="w-full flex flex-col bg-white">
      
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-[#043b22] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="/Images/fwp-hero.webp" 
            alt="Farmers Welfare Background" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-8">
          <span className="inline-block px-4 py-1.5 bg-[#df6c1f] text-white font-bold rounded-full text-sm uppercase tracking-widest mb-6 shadow-sm">
            FWP
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
            FARMERS WELFARE PROGRAM
          </h1>
          <p className="text-lg md:text-xl text-[#e8f3ee] max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            Supporting Farmers. Strengthening Agriculture.
          </p>
        </div>
      </section>

      {/* Intro & Key Focus Areas Section */}
      <section className="w-full py-16 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              The Farmer Welfare Program (FWP) is designed to improve farmers’ livelihoods and promote sustainable agricultural growth.
            </p>

            <div>
              <h4 className="text-xl font-bold text-[#043b22] mb-6">Key Focus Areas:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-2xl">{area.icon}</span>
                    <span className="text-gray-800 font-medium">{area.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center">
            {/* Keeping the image cropping fix */}
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image 
                src="/wp-content/uploads/2023/10/Farmers-Welfare-Program.webp" 
                alt="Farmers Welfare Program" 
                width={800}
                height={600}
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Activities Section - 2 Column Accordion Layout */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#043b22] mb-4">
              Farming Educational Activities
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empowering farmers with the knowledge and tools they need for modern, profitable, and sustainable agriculture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-start">
            {/* Left Column */}
            <div className="space-y-4">
              {educationalActivities.slice(0, 6).map((activity, index) => {
                const isOpen = openActivity === index;
                return (
                  <div 
                    key={index} 
                    className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md bg-white' : 'bg-[#fcfcfc] hover:bg-white hover:shadow-sm'}`}
                  >
                    <button 
                      onClick={() => toggleActivity(index)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl w-12 h-12 flex items-center justify-center bg-[#f7f9f4] rounded-xl">
                          {activity.icon}
                        </span>
                        <h4 className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#df6c1f]' : 'text-[#043b22]'}`}>
                          {activity.title}
                        </h4>
                      </div>
                      <span className={`text-[#043b22] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0 m-0'} overflow-hidden`}
                    >
                      <div className="px-5 pb-2 pl-[4.5rem] pr-6 text-gray-600">
                        {activity.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {educationalActivities.slice(6, 12).map((activity, index) => {
                const actualIndex = index + 6;
                const isOpen = openActivity === actualIndex;
                return (
                  <div 
                    key={actualIndex} 
                    className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md bg-white' : 'bg-[#fcfcfc] hover:bg-white hover:shadow-sm'}`}
                  >
                    <button 
                      onClick={() => toggleActivity(actualIndex)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl w-12 h-12 flex items-center justify-center bg-[#f7f9f4] rounded-xl">
                          {activity.icon}
                        </span>
                        <h4 className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#df6c1f]' : 'text-[#043b22]'}`}>
                          {activity.title}
                        </h4>
                      </div>
                      <span className={`text-[#043b22] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0 m-0'} overflow-hidden`}
                    >
                      <div className="px-5 pb-2 pl-[4.5rem] pr-6 text-gray-600">
                        {activity.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
