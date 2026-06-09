import Image from "next/image";
import Link from "next/link";
import ImpactCounter from "@/components/ImpactCounter";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] py-16 px-6 lg:py-24 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#043b22]/95 to-[#043b22]/70 z-10"></div>
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("/Images/home-4.jpeg")' }}
          ></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-md">
              Empowering Agriculture. <br />
              <span className="text-[#df6c1f]">Delivering Quality.</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 pt-10">
              <Link href="/products" className="rounded-full bg-[#df6c1f] text-white px-8 py-4 font-bold hover:bg-white hover:text-[#df6c1f] transition-all shadow-lg text-lg">
                Explore Services
              </Link>
              <Link href="/contact" className="rounded-full border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-[#043b22] transition-all text-lg">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative z-10 w-full flex justify-center lg:justify-end">
            <div className="relative hover:-translate-y-2 transition-transform duration-500">
              <Image 
                src="/wp-content/uploads/2022/01/Frame-3-1.png" 
                alt="Improving Farming" 
                width={600} 
                height={500} 
                className="w-full h-auto max-w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#043b22] mb-6 flex items-center gap-3">
              <span className="w-6 h-1.5 bg-[#df6c1f] rounded-full"></span>
              Who We Are
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
              At <span className="text-[#043b22] font-bold">Shetahit Farm Solutions Pvt. Ltd.</span>, we bridge the gap between farmers and markets by delivering high-quality agricultural products and innovative farming solutions. Our mission is to create a sustainable ecosystem that benefits farmers, businesses, and communities.
            </p>
            <p className="text-lg text-gray-600">
              We specialize in Food Supply, Agri Products, and Farm Consulting, ensuring reliability, quality, and long-term value.
            </p>
          </div>
          
          <div className="flex-1 w-full bg-[#f7f9f4] rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[#043b22] mb-8 flex items-center gap-4">
              <span className="w-8 h-1.5 bg-[#043b22] rounded-full"></span>
              Our Core Offerings
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-gray-800 font-bold text-lg">
                <div className="w-12 h-12 min-w-[3rem] rounded-full bg-white shadow-sm border border-gray-50 flex items-center justify-center text-[#df6c1f] text-xl">✓</div>
                Food Vegetable Fruit (FVF) Supply
              </li>
              <li className="flex items-center gap-4 text-gray-800 font-bold text-lg">
                <div className="w-12 h-12 min-w-[3rem] rounded-full bg-white shadow-sm border border-gray-50 flex items-center justify-center text-[#df6c1f] text-xl">✓</div>
                Agri-products (Agri-MPD)
              </li>
              <li className="flex items-center gap-4 text-gray-800 font-bold text-lg">
                <div className="w-12 h-12 min-w-[3rem] rounded-full bg-white shadow-sm border border-gray-50 flex items-center justify-center text-[#df6c1f] text-xl">✓</div>
                Farm Consulting Services
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="w-full bg-white pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-4 rounded-lg hover:shadow-md transition-shadow">
            <Image src="/wp-content/uploads/2024/01/agriculture.png" alt="Agriculture" width={60} height={60} />
            <div>
              <h3 className="font-bold text-[#043b22] text-xl">Best Agriculture</h3>
              <p className="text-sm text-gray-600">Premium organic solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg hover:shadow-md transition-shadow">
            <Image src="/wp-content/uploads/2024/01/customer-support.png" alt="Customer Support" width={60} height={60} />
            <div>
              <h3 className="font-bold text-[#043b22] text-xl">24/7 Support</h3>
              <p className="text-sm text-gray-600">Expert guidance anytime</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg hover:shadow-md transition-shadow">
            <Image src="/wp-content/uploads/2024/01/free-shipping.png" alt="Free Shipping" width={60} height={60} />
            <div>
              <h3 className="font-bold text-[#043b22] text-xl">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Reliable logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Organic Section */}
      <section className="w-full py-20 px-6 bg-[#f7f9f4]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image 
              src="/wp-content/uploads/2023/10/why-organic.webp" 
              alt="Why Organic" 
              width={600} 
              height={500} 
              className="rounded-xl shadow-xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#043b22] mb-8">Why Organic?</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#df6c1f]">
                <h3 className="text-xl font-bold text-[#043b22] mb-2">Organic farming is Economical</h3>
                <p className="text-gray-600">Reduces input costs and provides a sustainable long-term economic model for farmers.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#df6c1f]">
                <h3 className="text-xl font-bold text-[#043b22] mb-2">To enhance Soil Health</h3>
                <p className="text-gray-600">Restores natural microbial ecosystems and prevents soil degradation caused by chemicals.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#df6c1f]">
                <h3 className="text-xl font-bold text-[#043b22] mb-2">Environment friendly Organic Product</h3>
                <p className="text-gray-600">Protects local water sources and wildlife by eliminating toxic chemical runoff.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactCounter />

      {/* Our Execution Chain Section */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#043b22] mb-16">Our Execution Chain</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-[#f9fbfe] flex items-center justify-center p-6 shadow-md mb-6 border-2 border-transparent hover:border-[#df6c1f] transition-colors">
                <Image src="/wp-content/uploads/2023/10/Farm-Assessment.webp" alt="Farm Assessment" width={80} height={80} className="object-contain" />
              </div>
              <h4 className="font-bold text-xl text-[#043b22] mb-3">Farm Assessment</h4>
              <p className="text-sm text-gray-600 leading-relaxed px-2">
                We conduct comprehensive soil testing and environmental analysis to understand the unique needs of your farm.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-[#f9fbfe] flex items-center justify-center p-6 shadow-md mb-6 border-2 border-transparent hover:border-[#df6c1f] transition-colors">
                <Image src="/wp-content/uploads/2023/10/Report.webp" alt="Report" width={80} height={80} className="object-contain" />
              </div>
              <h4 className="font-bold text-xl text-[#043b22] mb-3">Report</h4>
              <p className="text-sm text-gray-600 leading-relaxed px-2">
                Detailed insights and actionable data are compiled to outline the best agricultural strategies for your land.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-[#f9fbfe] flex items-center justify-center p-6 shadow-md mb-6 border-2 border-transparent hover:border-[#df6c1f] transition-colors">
                <Image src="/wp-content/uploads/2023/10/Product-finalization.webp" alt="Product Finalization" width={80} height={80} className="object-contain" />
              </div>
              <h4 className="font-bold text-xl text-[#043b22] mb-3">Product Finalization</h4>
              <p className="text-sm text-gray-600 leading-relaxed px-2">
                We select the optimal organic fertilizers, seeds, and farming solutions tailored specifically to your profile.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-[#f9fbfe] flex items-center justify-center p-6 shadow-md mb-6 border-2 border-transparent hover:border-[#df6c1f] transition-colors">
                <Image src="/wp-content/uploads/2023/10/ground-Execution.webp" alt="Ground Execution" width={80} height={80} className="object-contain" />
              </div>
              <h4 className="font-bold text-xl text-[#043b22] mb-3">Ground Execution</h4>
              <p className="text-sm text-gray-600 leading-relaxed px-2">
                Our experts assist in implementing the recommended practices to ensure healthy crop growth and sustainability.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-[#f9fbfe] flex items-center justify-center p-6 shadow-md mb-6 border-2 border-transparent hover:border-[#df6c1f] transition-colors">
                <Image src="/wp-content/uploads/2023/10/Additional-Benefits.webp" alt="Additional Benefits" width={80} height={80} className="object-contain" />
              </div>
              <h4 className="font-bold text-xl text-[#043b22] mb-3">Additional Benefits</h4>
              <p className="text-sm text-gray-600 leading-relaxed px-2">
                Enjoy ongoing support, market linkages, and continuous monitoring for long-term agricultural success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <section className="w-full py-16 px-6 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <h2 className="text-4xl font-bold text-[#043b22]">Our Clients & Partners</h2>
          <div className="w-24 h-1 bg-[#df6c1f] mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          {/* Gradient masks for smooth fade effect at edges */}
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee hover:[animation-play-state:paused] py-4">
            {/* Set 1 */}
            <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/PWMSPL_LOGO.jpg" alt="Plastroots Waste Management" width={200} height={100} className="object-contain h-24 md:h-32 w-auto scale-110 mix-blend-multiply" />
              </div>
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/Geoclaim_1.png" alt="Geoclaim Energy Solutions" width={200} height={100} className="object-contain h-12 md:h-16 w-auto" />
              </div>
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/PF_LOGO.png" alt="Plastroots Foundation" width={200} height={100} className="object-contain h-24 md:h-32 w-auto scale-110" />
              </div>
            </div>
            {/* Set 2 */}
            <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/PWMSPL_LOGO.jpg" alt="Plastroots Waste Management" width={200} height={100} className="object-contain h-24 md:h-32 w-auto scale-110 mix-blend-multiply" />
              </div>
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/Geoclaim_1.png" alt="Geoclaim Energy Solutions" width={200} height={100} className="object-contain h-12 md:h-16 w-auto" />
              </div>
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/PF_LOGO.png" alt="Plastroots Foundation" width={200} height={100} className="object-contain h-24 md:h-32 w-auto scale-110" />
              </div>
            </div>
            {/* Set 3 */}
            <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/PWMSPL_LOGO.jpg" alt="Plastroots Waste Management" width={200} height={100} className="object-contain h-24 md:h-32 w-auto scale-110 mix-blend-multiply" />
              </div>
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/Geoclaim_1.png" alt="Geoclaim Energy Solutions" width={200} height={100} className="object-contain h-12 md:h-16 w-auto" />
              </div>
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/PF_LOGO.png" alt="Plastroots Foundation" width={200} height={100} className="object-contain h-24 md:h-32 w-auto scale-110" />
              </div>
            </div>
            {/* Set 4 */}
            <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/PWMSPL_LOGO.jpg" alt="Plastroots Waste Management" width={200} height={100} className="object-contain h-24 md:h-32 w-auto scale-110 mix-blend-multiply" />
              </div>
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/Geoclaim_1.png" alt="Geoclaim Energy Solutions" width={200} height={100} className="object-contain h-12 md:h-16 w-auto" />
              </div>
              <div className="flex items-center justify-center min-w-[150px] md:min-w-[200px] h-24 md:h-32">
                <Image src="/Images/PF_LOGO.png" alt="Plastroots Foundation" width={200} height={100} className="object-contain h-24 md:h-32 w-auto scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
