import Image from "next/image";
import Counter from "../../components/Counter";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-[#043b22] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="/Images/about-hero.webp" 
            alt="Farming Background" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-8">
          <span className="inline-block px-4 py-1.5 bg-[#df6c1f] text-white font-bold rounded-full text-sm uppercase tracking-widest mb-6 shadow-sm">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-md">About Us</h1>
          <p className="text-lg md:text-2xl text-[#e8f3ee] max-w-3xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            Rooted in nature, driven by innovation. Established in 2023, Shetahit Farm Solutions is dedicated to revolutionizing the agricultural ecosystem by empowering farmers, enriching soil health, and delivering premium sustainable solutions.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#043b22] mb-8">Who We Are</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Shetahit Farm Solutions Pvt. Ltd. is an agriculture-focused company committed to transforming the agri-value chain through efficient supply systems, farmer-centric initiatives, and sustainable practices.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-20 px-6 bg-[#f9fbfe]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#043b22]">
            <h3 className="text-3xl font-bold text-[#043b22] mb-6 flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-[#e8f3ee] flex items-center justify-center text-[#043b22]">🎯</span>
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become a trusted partner in agriculture by integrating traditional knowledge with modern innovations.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#df6c1f]">
            <h3 className="text-3xl font-bold text-[#df6c1f] mb-6 flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-[#fcedf3] flex items-center justify-center text-[#df6c1f]">🚀</span>
              Our Mission
            </h3>
            <ul className="text-gray-600 text-lg leading-relaxed list-disc list-inside space-y-2">
              <li>Empower farmers through knowledge and market access</li>
              <li>Deliver high-quality agri-products to businesses</li>
              <li>Promote sustainable and profitable farming practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 px-6 bg-[#f7f9f4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#043b22] mb-12">Our Core Values</h2>
          
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <Image src="/wp-content/uploads/2022/01/Frame-32.png" alt="Icon" width={52} height={52} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#043b22] mb-3">Sustainability</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are committed to preserving the earth's natural resources and promoting regenerative farming practices that enrich the soil rather than deplete it.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <Image src="/wp-content/uploads/2022/01/Frame-32.png" alt="Icon" width={52} height={52} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#043b22] mb-3">Quality</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our products undergo rigorous testing and quality control to ensure they meet the highest standards of excellence and deliver exceptional results.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <Image src="/wp-content/uploads/2022/01/Frame-32.png" alt="Icon" width={52} height={52} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#043b22] mb-3">Education</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are dedicated to educating our customers about the benefits of organic fertilizers and providing guidance on their usage for maximum crop yield and soil health.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <Image src="/wp-content/uploads/2022/01/Frame-32.png" alt="Icon" width={52} height={52} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#043b22] mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe in putting our customers first, providing exceptional service, and supporting them on their journey to sustainable, organic farming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="w-full py-20 px-6 bg-[#043b22]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">SDGs (Sustainable Development Goals)</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-xl mb-6 relative group-hover:scale-105 transition-transform bg-white flex flex-col items-center justify-between p-4">
                <div className="text-5xl font-bold text-[#df6c1f] z-10">
                  <Counter end={3} />
                </div>
                <div className="relative w-full h-32 mt-2">
                  <Image src="/wp-content/uploads/2023/10/1.jpg" alt="Good Health and well Being" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#df6c1f]">Good Health and well Being</h3>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-xl mb-6 relative group-hover:scale-105 transition-transform bg-white flex flex-col items-center justify-between p-4">
                <div className="text-5xl font-bold text-[#df6c1f] z-10">
                  <Counter end={6} />
                </div>
                <div className="relative w-full h-32 mt-2">
                  <Image src="/wp-content/uploads/2023/10/2.jpg" alt="Clean Water and Sanitization" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#df6c1f]">Clean Water and Sanitization</h3>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-xl mb-6 relative group-hover:scale-105 transition-transform bg-white flex flex-col items-center justify-between p-4">
                <div className="text-5xl font-bold text-[#df6c1f] z-10">
                  <Counter end={13} />
                </div>
                <div className="relative w-full h-32 mt-2">
                  <Image src="/wp-content/uploads/2023/10/3.jpg" alt="Climate Change" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#df6c1f]">Climate Change</h3>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-xl mb-6 relative group-hover:scale-105 transition-transform bg-white flex flex-col items-center justify-between p-4">
                <div className="text-5xl font-bold text-[#df6c1f] z-10">
                  <Counter end={15} />
                </div>
                <div className="relative w-full h-32 mt-2">
                  <Image src="/wp-content/uploads/2023/10/4.jpg" alt="Life on Land" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#df6c1f]">Life on Land</h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
