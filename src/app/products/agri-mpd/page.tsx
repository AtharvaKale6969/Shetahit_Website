"use client";
import Image from "next/image";
import Link from "next/link";

export default function AgriMPDPage() {
  return (
    <main className="w-full bg-white min-h-screen relative flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-[#043b22] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="/Images/products-hero.jpg" 
            alt="Agri-MPD Background" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-8">
          <span className="inline-block px-4 py-1.5 bg-[#df6c1f] text-white font-bold rounded-full text-sm uppercase tracking-widest mb-6 shadow-sm">
            Products & Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">Agri-MPD (Yugantara)</h1>
          <p className="text-lg md:text-xl text-[#e8f3ee] max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            Good for your Soil, Good for your Plant
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 w-full mb-20">
        <div className="animate-fade-in">
          <div className="flex flex-col lg:flex-row gap-12 items-start bg-[#f9fbfe] rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex-1 w-full">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image src="/Images/yugantra 4.png" alt="Yugantara Organic Compost" fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <span className="text-[#df6c1f] font-bold text-sm uppercase tracking-wider mb-2 block">Agri-MPD by Shetahit</span>
              <h2 className="text-4xl font-bold text-[#043b22] mb-2">Yugantara</h2>
              <p className="text-xl italic text-gray-500 mb-6 font-serif">"Good for your Soil, Good for your Plant"</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Yugantara is an agriculture-focused solution designed to improve soil enrichment and promote healthy plant growth for better crop productivity and sustainable farming. Our organic compost manure harnesses the power of nature to nurture your fields season after season.
              </p>
              
              <h4 className="text-lg font-bold text-[#043b22] mb-4">Key Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌱</span>
                  <p className="text-gray-700 font-medium">Enhances soil fertility</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌿</span>
                  <p className="text-gray-700 font-medium">Healthy plant growth</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📈</span>
                  <p className="text-gray-700 font-medium">Improves crop productivity</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">♻️</span>
                  <p className="text-gray-700 font-medium">Promotes sustainable farming</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏥</span>
                  <p className="text-gray-700 font-medium">Maintains soil health</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🧪</span>
                  <p className="text-gray-700 font-medium">100% organic</p>
                </div>
              </div>
              
              <Link href="/contact" className="inline-block px-8 py-4 bg-[#df6c1f] text-white font-bold rounded-lg hover:bg-[#c25a17] transition-colors">
                Enquire About Yugantara
              </Link>
            </div>
          </div>
          
          <div className="relative w-full rounded-3xl overflow-hidden shadow-xl max-h-[500px]">
            <Image src="/Images/yugantra 4.png" alt="Yugantara in Field" fill className="object-cover object-center" />
          </div>
        </div>
      </div>
    </main>
  );
}
