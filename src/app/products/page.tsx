"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="w-full bg-white min-h-screen relative flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-[#043b22] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="/Images/products-hero.jpg" 
            alt="Products & Services Background" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-8">
          <span className="inline-block px-4 py-1.5 bg-[#df6c1f] text-white font-bold rounded-full text-sm uppercase tracking-widest mb-6 shadow-sm">
            Products & Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">What We Offer</h1>
          <p className="text-lg md:text-xl text-[#e8f3ee] max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            Comprehensive agricultural solutions — from premium produce to expert consulting
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 w-full mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FVF Supply Card */}
          <Link href="/products/fvf-supply" className="group flex flex-col bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-full h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
              <Image src="/Images/FVF Catalogue/Grains/Rice/Rice 2.jpg" alt="FVF Supply" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="text-4xl mb-4 block">🌾</span>
              <h3 className="text-2xl font-bold text-[#043b22] mb-4">FVF Supply</h3>
              <p className="text-gray-600 mb-8 flex-1">
                Reliable and consistent supply of Food, Vegetables, and Fruits to manufacturers, traders, exporters, and retailers.
              </p>
              <div className="text-[#df6c1f] font-bold flex items-center group-hover:text-[#c25a17]">
                Explore FVF Supply
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </Link>

          {/* Agri-MPD Card */}
          <Link href="/products/agri-mpd" className="group flex flex-col bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-full h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
              <Image src="/Images/yugantra 4.png" alt="Agri-MPD" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="text-4xl mb-4 block">🌱</span>
              <h3 className="text-2xl font-bold text-[#043b22] mb-4">Agri-MPD (Yugantara)</h3>
              <p className="text-gray-600 mb-8 flex-1">
                Organic compost manure designed to improve soil enrichment and promote healthy plant growth for sustainable farming.
              </p>
              <div className="text-[#df6c1f] font-bold flex items-center group-hover:text-[#c25a17]">
                Explore Agri-MPD
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </Link>

          {/* Farm Consulting Card */}
          <Link href="/products/farm-consulting" className="group flex flex-col bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-full h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
              <Image src="/Images/Farmers Consulting 3.png" alt="Farm Consulting" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="text-4xl mb-4 block">🧑‍💼</span>
              <h3 className="text-2xl font-bold text-[#043b22] mb-4">Farm Consulting</h3>
              <p className="text-gray-600 mb-8 flex-1">
                Expert consulting services for farmers and agribusinesses to maximize productivity, reduce costs, and implement sustainable practices.
              </p>
              <div className="text-[#df6c1f] font-bold flex items-center group-hover:text-[#c25a17]">
                Explore Consulting
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
