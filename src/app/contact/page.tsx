import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-[#043b22] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="/Images/contact-hero.webp" 
            alt="Contact Us Background" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-8">
          <span className="inline-block px-4 py-1.5 bg-[#df6c1f] text-white font-bold rounded-full text-sm uppercase tracking-widest mb-6 shadow-sm">
            Get in touch
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">Have questions in mind?</h1>
          <p className="text-lg md:text-xl text-[#e8f3ee] max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            Feel free to drop us a line or for business contact on the below contact information.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#f9f9f9] rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-2xl font-bold text-[#043b22] mb-8">Our Contact Information</h3>
              
              <div className="flex flex-col gap-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-white text-[#df6c1f] rounded-full shadow-sm mt-1">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Register Office:</strong> Plot no 12A, 1st Floor, Smruti Nagar Rd, Smruti Nagar, Koradi, Bokara, Nagpur Maharashtra 441111
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-white text-[#df6c1f] rounded-full shadow-sm mt-1">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600">
                      <a href="tel:+917123100024" className="hover:text-[#df6c1f] transition-colors">+91 7123100024</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-white text-[#df6c1f] rounded-full shadow-sm mt-1">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:sales@shetahit.com" className="hover:text-[#df6c1f] transition-colors">sales@shetahit.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-4 pt-8 border-t border-gray-200">
              <p className="font-bold text-gray-900 mb-6">Connect us with social media</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61553188672484&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-gray-600 hover:text-[#df6c1f] rounded-full shadow-sm transition-colors">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="https://instagram.com/shetahit?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-gray-600 hover:text-[#df6c1f] rounded-full shadow-sm transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/company/shetahit-farm-solutions/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-gray-600 hover:text-[#df6c1f] rounded-full shadow-sm transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="https://www.youtube.com/@Shetahit_farm_solution" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-gray-600 hover:text-[#df6c1f] rounded-full shadow-sm transition-colors">
                  <FaYoutube className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your full name" 
                  className="px-4 py-3 rounded-md bg-[#f9f9f9] border border-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-[#df6c1f] focus:border-transparent transition-all" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email Address" 
                  className="px-4 py-3 rounded-md bg-[#f9f9f9] border border-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-[#df6c1f] focus:border-transparent transition-all" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-gray-700">Contact Details</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Contact Details" 
                  className="px-4 py-3 rounded-md bg-[#f9f9f9] border border-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-[#df6c1f] focus:border-transparent transition-all" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="query" className="text-sm font-bold text-gray-700">Your Query</label>
                <textarea 
                  id="query" 
                  rows={5} 
                  placeholder="Type your Query" 
                  className="px-4 py-3 rounded-md bg-[#f9f9f9] border border-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-[#df6c1f] focus:border-transparent transition-all resize-none" 
                ></textarea>
              </div>

              <button 
                type="button" 
                className="mt-4 px-8 py-4 bg-[#df6c1f] text-white font-bold rounded-md hover:bg-[#043b22] transition-colors w-fit"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
