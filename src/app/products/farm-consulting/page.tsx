"use client";
import Image from "next/image";
import Link from "next/link";

export default function FarmConsultingPage() {
  return (
    <main className="w-full bg-white min-h-screen relative flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-[#043b22] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="/Images/products-hero.jpg" 
            alt="Farm Consulting Background" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-8">
          <span className="inline-block px-4 py-1.5 bg-[#df6c1f] text-white font-bold rounded-full text-sm uppercase tracking-widest mb-6 shadow-sm">
            Products & Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">Farm Consulting</h1>
          <p className="text-lg md:text-xl text-[#e8f3ee] max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            Expert guidance for sustainable and profitable agriculture
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 w-full mb-20">
        <div className="animate-fade-in flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-[#043b22] mb-6">Farm Consulting Services</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We provide expert consulting services to farmers and agribusinesses by combining <strong>traditional farming practices with modern innovations</strong>. Our team of agronomists and industry experts help you maximize productivity while minimizing costs and environmental impact.
            </p>

            <h4 className="text-xl font-bold text-[#043b22] mb-6">Our Expertise Includes:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#f9f9f9] p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">📋</span>
                <h4 className="font-bold text-[#043b22] mb-2">Farm Planning & Crop Selection</h4>
                <p className="text-gray-600 text-sm">Strategic planning for optimal crop rotation, variety selection, and seasonal scheduling.</p>
              </div>
              <div className="bg-[#f9f9f9] p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">📊</span>
                <h4 className="font-bold text-[#043b22] mb-2">Productivity Optimization</h4>
                <p className="text-gray-600 text-sm">Data-driven strategies to maximize yield and minimize input costs per acre.</p>
              </div>
              <div className="bg-[#f9f9f9] p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">♻️</span>
                <h4 className="font-bold text-[#043b22] mb-2">Sustainable Farming Techniques</h4>
                <p className="text-gray-600 text-sm">Eco-friendly practices that preserve soil health and reduce chemical dependency.</p>
              </div>
              <div className="bg-[#f9f9f9] p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">🤖</span>
                <h4 className="font-bold text-[#043b22] mb-2">Technology Integration</h4>
                <p className="text-gray-600 text-sm">Smart farming tools, precision agriculture, and digital solutions for modern farmers.</p>
              </div>
            </div>

            <Link href="/contact" className="inline-block px-8 py-4 bg-[#df6c1f] text-white font-bold rounded-lg hover:bg-[#c25a17] transition-colors">
              Book a Consultation
            </Link>
          </div>
          
          <div className="flex-1 w-full flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image src="/Images/Farmers Consulting 3.png" alt="Farm Consulting" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image src="/Images/Farmers Consulting 4.png" alt="Farm Advisory" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
