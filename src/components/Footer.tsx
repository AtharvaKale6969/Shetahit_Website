import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f7f9f4] text-[#333333] py-16 mt-auto border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        
        {/* Column 1: Logo & Info */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-start">
            <Image 
              src="/wp-content/uploads/2023/10/Shetahit.webp" 
              alt="Shetahit Logo" 
              width={80} 
              height={100} 
              className="object-contain"
            />
          </div>
          <div className="text-[15px] font-medium text-[#115e59]">
            Improving Farming! Improving Lives
          </div>
          <p className="text-[14px] text-gray-700 leading-relaxed">
            Established in 2023, Shetahit Farm Solutions<br />
            is the private limited company working in the<br />
            agricultural sector.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-[#333333] hover:text-[#df6c1f] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" className="text-[#333333] hover:text-[#df6c1f] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="text-[#333333] hover:text-[#df6c1f] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-[#333333] hover:text-[#df6c1f] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col space-y-4 lg:ml-8">
          <h3 className="text-[15px] font-bold text-[#222222] mb-1">Quick Links</h3>
          <ul className="space-y-3.5 text-[14px] text-[#444444]">
            <li><Link href="/about" className="hover:text-[#df6c1f] transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-[#df6c1f] transition-colors">Products & Services</Link></li>
            <li><Link href="/farmers-welfare-program" className="hover:text-[#df6c1f] transition-colors">Farmers Welfare Program</Link></li>
            <li><Link href="/blog" className="hover:text-[#df6c1f] transition-colors">Blog</Link></li>
            <li><Link href="/career" className="hover:text-[#df6c1f] transition-colors">Career</Link></li>
            <li><Link href="/contact" className="hover:text-[#df6c1f] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col space-y-6 text-[14px] text-gray-700">
          
          <div className="flex items-start space-x-3">
            <svg className="w-[18px] h-[18px] mt-0.5 text-[#333333] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <div>
              <p className="text-[#333333] mb-1">Register Office:</p>
              <p className="leading-relaxed">
                Plot no 12A, 1st Floor, Smruti Nagar Rd,<br />
                Smruti Nagar, Koradi, Bokara,<br />
                Nagpur Maharashtra 441111
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg className="w-[18px] h-[18px] mt-0.5 text-[#333333] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
            <div>
              <p className="text-[#333333] mb-1">Mobile:</p>
              <p className="text-[#444444]">+91 7123100024</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg className="w-[18px] h-[18px] mt-0.5 text-[#333333] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <div>
              <p className="text-[#333333] mb-1">Email:</p>
              <a href="mailto:sales@shetahit.com" className="text-[#138e91] hover:underline font-medium">sales@shetahit.com</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
