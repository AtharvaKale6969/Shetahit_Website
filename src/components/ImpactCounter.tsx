"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import Counter from "./Counter";

export default function ImpactCounter() {
  const stats = [
    {
      num: 112,
      suffix: "",
      label: "Best Result At The Farm Side",
      image: "/Images/home-1.jpeg"
    },
    {
      num: 40,
      suffix: "%",
      label: "Increase monitory benefits",
      image: "/Images/home-2.jpeg"
    },
    {
      num: 750,
      suffix: "",
      label: "Covered farmers till the date",
      image: "/Images/home-3.jpeg"
    },
    {
      num: 1389,
      suffix: "",
      label: "Covered hectors land till the date",
      image: "/Images/home-4.jpeg"
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-[#f7f9f4]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#043b22] mb-4">Our Impact</h2>
        <p className="text-xl text-gray-600 mb-12">Best result at the Farm side</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="relative rounded-2xl overflow-hidden shadow-xl group h-80 flex items-center justify-center text-white"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image 
                  src={stat.image} 
                  alt={stat.label} 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                <div className="text-6xl font-bold mb-4 text-[#df6c1f]">
                  <Counter end={stat.num} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-semibold uppercase tracking-wider">
                  {stat.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
