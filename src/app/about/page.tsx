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
          <div className="text-xl text-gray-700 leading-relaxed mb-6 space-y-4 text-justify">
            <p>
              Shetahit Farm Solutions Pvt. Ltd. is an agriculture-focused company dedicated to strengthening and transforming the agricultural value chain through innovative solutions, efficient supply systems, and farmer-centric initiatives. We work closely with farmers, agribusinesses, and stakeholders to enhance productivity, improve market access, and promote sustainable agricultural practices.
            </p>
            <p>
              Our commitment lies in bridging the gap between agricultural production and end-market requirements by ensuring quality inputs, reliable procurement processes, and value-added services. Through technology-driven operations, strategic partnerships, and a deep understanding of the farming ecosystem, we strive to create long-term value for farmers while contributing to the growth of the agricultural sector.
            </p>
            <p>
              At Shetahit Farm Solutions, we believe that empowering farmers with the right resources, knowledge, and opportunities is the key to building a resilient, profitable, and sustainable future for agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-20 px-6 bg-[#f9fbfe]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Card (Orange Theme) */}
          <div className="group flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(223,108,31,0.3)] hover:-translate-y-2">
            <div className="relative w-full h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <Image 
                src="/Images/Our_Mission.png" 
                alt="Our Vision" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute bottom-6 left-8 z-20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-lg text-[#df6c1f]">🎯</div>
                <h3 className="text-3xl font-bold text-white drop-shadow-md">Our Vision</h3>
              </div>
            </div>
            <div className="p-8 relative bg-white flex-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#df6c1f] to-orange-300"></div>
              <p className="text-gray-700 text-lg leading-relaxed font-medium text-justify">
                To become a trusted and reliable partner in agriculture by blending traditional agricultural knowledge with modern innovations, creating sustainable solutions that empower farmers, improve productivity, enhance market connectivity, and contribute to the long-term growth and resilience of the agricultural sector.
              </p>
            </div>
          </div>
          
          {/* Mission Card (Green Theme) */}
          <div className="group flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(4,59,34,0.3)] hover:-translate-y-2">
            <div className="relative w-full h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <Image 
                src="/Images/Our_vision.png" 
                alt="Our Mission" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute bottom-6 left-8 z-20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-lg text-[#043b22]">🚀</div>
                <h3 className="text-3xl font-bold text-white drop-shadow-md">Our Mission</h3>
              </div>
            </div>
            <div className="p-8 relative bg-white flex-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#043b22] to-green-600"></div>
              <ul className="text-gray-700 text-lg leading-relaxed space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#043b22] mt-1 text-xl">•</span>
                  <span>Empower farmers through knowledge and market access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#043b22] mt-1 text-xl">•</span>
                  <span>Deliver high-quality agri-products to businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#043b22] mt-1 text-xl">•</span>
                  <span>Promote sustainable and profitable farming practices</span>
                </li>
              </ul>
            </div>
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
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-xl mb-6 relative transition-all duration-500 ease-out bg-white flex flex-col items-center justify-between p-4 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_-15px_rgba(223,108,31,0.6)] border-2 border-transparent group-hover:border-[#df6c1f]/40">
                <div className="text-5xl font-bold text-[#df6c1f] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#c45a16]">
                  <Counter end={3} />
                </div>
                <div className="relative w-full h-32 mt-2 transition-transform duration-500 group-hover:scale-110">
                  <Image src="/wp-content/uploads/2023/10/1.jpg" alt="Good Health and well Being" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#df6c1f] transition-colors duration-300 group-hover:text-white">Good Health and well Being</h3>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-xl mb-6 relative transition-all duration-500 ease-out bg-white flex flex-col items-center justify-between p-4 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_-15px_rgba(223,108,31,0.6)] border-2 border-transparent group-hover:border-[#df6c1f]/40">
                <div className="text-5xl font-bold text-[#df6c1f] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#c45a16]">
                  <Counter end={6} />
                </div>
                <div className="relative w-full h-32 mt-2 transition-transform duration-500 group-hover:scale-110">
                  <Image src="/wp-content/uploads/2023/10/2.jpg" alt="Clean Water and Sanitization" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#df6c1f] transition-colors duration-300 group-hover:text-white">Clean Water and Sanitization</h3>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-xl mb-6 relative transition-all duration-500 ease-out bg-white flex flex-col items-center justify-between p-4 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_-15px_rgba(223,108,31,0.6)] border-2 border-transparent group-hover:border-[#df6c1f]/40">
                <div className="text-5xl font-bold text-[#df6c1f] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#c45a16]">
                  <Counter end={13} />
                </div>
                <div className="relative w-full h-32 mt-2 transition-transform duration-500 group-hover:scale-110">
                  <Image src="/wp-content/uploads/2023/10/3.jpg" alt="Climate Change" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#df6c1f] transition-colors duration-300 group-hover:text-white">Climate Change</h3>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-xl mb-6 relative transition-all duration-500 ease-out bg-white flex flex-col items-center justify-between p-4 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_-15px_rgba(223,108,31,0.6)] border-2 border-transparent group-hover:border-[#df6c1f]/40">
                <div className="text-5xl font-bold text-[#df6c1f] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#c45a16]">
                  <Counter end={15} />
                </div>
                <div className="relative w-full h-32 mt-2 transition-transform duration-500 group-hover:scale-110">
                  <Image src="/wp-content/uploads/2023/10/4.jpg" alt="Life on Land" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#df6c1f] transition-colors duration-300 group-hover:text-white">Life on Land</h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
