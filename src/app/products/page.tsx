"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const S3_BASE = "http://shetahit-web.s3-website.ap-south-1.amazonaws.com/";

interface Product {
  name: string;
  sub: string;
  img: string;
  desc: string;
}

interface Category {
  title: string;
  icon: string;
  products: Product[];
}

const fvfCategories: Category[] = [
  {
    title: "Grains",
    icon: "🌾",
    products: [
      { name: "Rice", sub: "Multiple varieties", img: "Shetahit Website/FVF Catalogue/Grains/Rice/Rice 1.jpg", desc: "Premium quality rice sourced directly from farmers. Available in multiple varieties including basmati, non-basmati, and specialty varieties. Ideal for manufacturers, traders, and exporters." },
      { name: "Wheat", sub: "Premium grade", img: "Shetahit Website/FVF Catalogue/Grains/Wheat/Wheat 1.jpg", desc: "High-grade wheat with consistent quality standards. Suitable for flour mills, food processors, and traders. Sourced from best wheat-growing regions." },
      { name: "Chickpeas (Chana)", sub: "High protein", img: "Shetahit Website/FVF Catalogue/Grains/Chana Chickpeas/Chana Chickpeas 1.jpg", desc: "Premium chickpeas known for their rich protein content and consistent size. Perfect for dal mills, food processors, and direct retail." },
      { name: "Soybean", sub: "High oil content", img: "Shetahit Website/FVF Catalogue/Grains/Soybeans/Soybean 1.avif", desc: "High-quality soybeans with excellent oil content. Suitable for oil extraction, protein meal production, and food processing industries." },
      { name: "Maize", sub: "Feed & food grade", img: "Shetahit Website/FVF Catalogue/Grains/Maize/Maize 1.jpeg", desc: "Fresh and dried maize varieties for feed, food, and starch industries. Consistent quality with proper moisture levels." }
    ]
  },
  {
    title: "Pulses",
    icon: "🫘",
    products: [
      { name: "Split Chickpeas", sub: "Chana Dal", img: "Shetahit Website/FVF Catalogue/Pulses/Split Chickpeas (Chana Dal)/Split Chickpeas Chana Dal 1.jpg", desc: "Processed split chickpeas with uniform color and size. High protein content, excellent cooking quality. Ready for retail and bulk supply." },
      { name: "Pigeon Pea", sub: "Toor Dal", img: "Shetahit Website/FVF Catalogue/Pulses/Pigeon Pea (Toor Dal)/Pigeon pea Toor Dal 1.webp", desc: "Premium quality toor dal with consistent split and clean processing. One of the most consumed pulses — available in both oily and dry varieties." }
    ]
  },
  {
    title: "Fruits",
    icon: "🍊",
    products: [
      { name: "Orange (Santra)", sub: "Nagpur specialty", img: "Shetahit Website/FVF Catalogue/Fruits/Orange/Orange 1.jpg", desc: "Juicy, sweet Nagpur oranges — the \"Orange City\" specialty. Fresh, premium-grade produce available in season for direct consumption and processing." },
      { name: "Sweet Lime", sub: "Mosambi", img: "Shetahit Website/FVF Catalogue/Fruits/Sweet lime Mosambi/Mosambi 1.jpg", desc: "Fresh, quality mosambi with high juice content. Popular for juice bars, hotels, and retail markets. Available in prime season." },
      { name: "Lemon", sub: "High citric acid", img: "Shetahit Website/FVF Catalogue/Fruits/Lemon/Lemon 1.jpg", desc: "Farm-fresh lemons with high citric acid content. Available in multiple grades for culinary, food processing, and export markets." }
    ]
  },
  {
    title: "Vegetables",
    icon: "🧅",
    products: [
      { name: "Onion", sub: "Long shelf-life, export quality", img: "Shetahit Website/FVF Catalogue/Vegetables/Onion/onion 1.webp", desc: "Long shelf-life onions sourced from prime growing regions. Special focus on export-quality produce with proper grading and sorting." }
    ]
  },
  {
    title: "Dry Fruits",
    icon: "🥜",
    products: [
      { name: "Cashew", sub: "W180, W240, W320 grades", img: "Shetahit Website/FVF Catalogue/Dry Fruits/Cashews/Cashew 1.jpg", desc: "Premium whole cashews with W180, W240, W320 grading. Rich, buttery flavor with proper processing standards for retail and bulk supply." },
      { name: "Almonds", sub: "Regular & blanched", img: "Shetahit Website/FVF Catalogue/Dry Fruits/Almonds/Almonds 1.webp", desc: "Selected almonds with consistent size and quality. Rich in nutrients, available in regular and blanched variants for retail and industrial use." }
    ]
  },
  {
    title: "Spices",
    icon: "🌶️",
    products: [
      { name: "Cardamom", sub: "High essential oil", img: "Shetahit Website/FVF Catalogue/Spices/Cardamom/Cardamom 1.jpg", desc: "Aromatic green cardamom from premium growing regions. High essential oil content, used in food processing, beverages, and spice blends." },
      { name: "Cloves", sub: "Premium aromatic", img: "Shetahit Website/FVF Catalogue/Spices/Cloves/Cloves 1.webp", desc: "Whole dried cloves with strong aromatic properties. Used in spice blends, essential oil extraction, and food processing." },
      { name: "Cinnamon", sub: "Sticks & powder", img: "Shetahit Website/FVF Catalogue/Spices/Cinnamon/Cinnamon 1.webp", desc: "Premium cinnamon sticks and powder with rich flavor. Available in multiple grades for retail packaging, food processing, and exports." },
      { name: "Black Pepper", sub: "Whole & ground", img: "Shetahit Website/FVF Catalogue/Spices/Black Pepper/Black pepper 1.jpg", desc: "High-grade black pepper with strong piperine content. Available in whole, cracked, and ground forms for all culinary and industrial applications." },
      { name: "Nutmeg", sub: "Whole & ground", img: "Shetahit Website/FVF Catalogue/Spices/NutMeg/Nutmeg 1.jpeg", desc: "Whole and ground nutmeg with distinct aroma. Used in baking, beverages, spice blends, and pharmaceutical applications." }
    ]
  },
  {
    title: "Other Commodities",
    icon: "🫚",
    products: [
      { name: "Chilli (Red Dried)", sub: "Multiple grades", img: "Shetahit Website/FVF Catalogue/Other/Chilli ( Red Dried )/Red Chilli 1.jpg", desc: "Vibrant red dried chillies with consistent color and heat level. Available in multiple varieties and grades for spice processing and export." },
      { name: "Turmeric", sub: "High curcumin content", img: "Shetahit Website/FVF Catalogue/Other/Turmeric/Turmeric 1.jpg", desc: "High-curcumin turmeric with bright yellow color. Available in raw, polished, and finger forms. Used in food, pharmaceutical, and cosmetic industries." }
    ]
  }
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<"fvf" | "agri" | "consulting">("fvf");
  const [selectedProduct, setSelectedProduct] = useState<{ product: Product, category: string } | null>(null);

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

      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveTab("fvf")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === "fvf" ? "bg-[#043b22] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            🌾 FVF Supply
          </button>
          <button 
            onClick={() => setActiveTab("agri")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === "agri" ? "bg-[#043b22] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            🌱 Agri-MPD (Yugantra)
          </button>
          <button 
            onClick={() => setActiveTab("consulting")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === "consulting" ? "bg-[#043b22] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            🧑‍💼 Farm Consulting
          </button>
        </div>

        {/* FVF Panel */}
        {activeTab === "fvf" && (
          <div className="animate-fade-in">
            {/* Intro block */}
            <div className="flex flex-col md:flex-row items-center gap-10 bg-[#f9f9f9] p-8 md:p-12 rounded-3xl mb-16">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#043b22] mb-4">Food Vegetable Fruit (FVF) Supply</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide reliable and consistent supply of agricultural produce to manufacturers, traders, exporters, and retailers — with a strong focus on quality, consistency, and long shelf-life produce.
                </p>
                <a 
                  href={`${S3_BASE}Shetahit Website/FVF Catalogue/Shetahit_Product_Catalog.pdf`} 
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#df6c1f] text-white font-bold rounded-lg hover:bg-[#c25a17] transition-colors"
                >
                  📄 Download Product Catalog
                </a>
              </div>
              <div className="flex-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={`${S3_BASE}Shetahit Website/FVF Catalogue/Grains/Rice/Rice 1.jpg`} 
                  alt="Product Catalog" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Product Categories */}
            <div className="space-y-16">
              {fvfCategories.map((cat, idx) => (
                <div key={idx} className="border-t border-gray-100 pt-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl">{cat.icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-[#043b22]">{cat.title}</h3>
                      <span className="text-gray-500 font-medium">{cat.products.length} Products</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {cat.products.map((prod, pidx) => (
                      <div 
                        key={pidx} 
                        onClick={() => setSelectedProduct({ product: prod, category: cat.title })}
                        className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer border border-transparent hover:border-[#df6c1f]/30"
                      >
                        <div className="w-full aspect-square overflow-hidden bg-gray-50 relative">
                          <img 
                            src={S3_BASE + prod.img} 
                            alt={prod.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-[#043b22] px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                              View Details
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="font-bold text-[#043b22] text-lg mb-1 line-clamp-1">{prod.name}</h4>
                          <p className="text-sm text-gray-500 mb-3 line-clamp-1">{prod.sub}</p>
                          <span className="inline-block px-3 py-1 bg-[#e8f3ee] text-[#043b22] text-xs font-bold rounded-md">
                            {cat.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Agri-MPD (Yugantra) Panel */}
        {activeTab === "agri" && (
          <div className="animate-fade-in">
            <div className="flex flex-col lg:flex-row gap-12 items-start bg-[#f9fbfe] rounded-3xl p-8 md:p-12 mb-12">
              <div className="flex-1 w-full space-y-4">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img src={`${S3_BASE}Shetahit Website/Yugantra Product/yugantra 1.png`} alt="Yugantra Organic Compost" className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 relative aspect-video rounded-xl overflow-hidden shadow-sm">
                    <img src={`${S3_BASE}Shetahit Website/Yugantra Product/yugantra 2.png`} alt="Yugantra Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 relative aspect-video rounded-xl overflow-hidden shadow-sm">
                    <img src={`${S3_BASE}Shetahit Website/Yugantra Product/yugantra 3.png`} alt="Yugantra Application" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-[#df6c1f] font-bold text-sm uppercase tracking-wider mb-2 block">Agri-MPD by Shetahit</span>
                <h2 className="text-4xl font-bold text-[#043b22] mb-2">Yugantra</h2>
                <p className="text-xl italic text-gray-500 mb-6 font-serif">"Good for your Soil, Good for your Plant"</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Yugantra is an agriculture-focused solution designed to improve soil enrichment and promote healthy plant growth for better crop productivity and sustainable farming. Our organic compost manure harnesses the power of nature to nurture your fields season after season.
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
                
                <a href="/contact" className="inline-block px-8 py-4 bg-[#df6c1f] text-white font-bold rounded-lg hover:bg-[#c25a17] transition-colors">
                  Enquire About Yugantra
                </a>
              </div>
            </div>
            
            <div className="relative w-full rounded-3xl overflow-hidden shadow-xl max-h-[500px]">
              <img src={`${S3_BASE}Shetahit Website/Yugantra Product/yugantra 4.png`} alt="Yugantra in Field" className="w-full object-cover object-center" />
            </div>
          </div>
        )}

        {/* Farm Consulting Panel */}
        {activeTab === "consulting" && (
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

              <a href="/contact" className="inline-block px-8 py-4 bg-[#df6c1f] text-white font-bold rounded-lg hover:bg-[#c25a17] transition-colors">
                Book a Consultation
              </a>
            </div>
            
            <div className="flex-1 w-full flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img src={`${S3_BASE}Shetahit Website/Farmers Consulting/Farmers Consulting 3.png`} alt="Farm Consulting" className="w-full h-full object-cover" />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img src={`${S3_BASE}Shetahit Website/Farmers Consulting/Farmers Consulting 4.png`} alt="Farm Advisory" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative bg-gray-100 aspect-square md:aspect-auto">
                <img 
                  src={S3_BASE + selectedProduct.product.img} 
                  alt={selectedProduct.product.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 left-4 w-10 h-10 bg-white/80 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md md:hidden"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col relative">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors hidden md:block"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <span className="inline-block px-4 py-1 bg-[#e8f3ee] text-[#043b22] font-bold rounded-md text-sm mb-4 w-fit">
                  {selectedProduct.category}
                </span>
                
                <h2 className="text-4xl font-extrabold text-[#043b22] mb-2">{selectedProduct.product.name}</h2>
                <h4 className="text-lg font-medium text-gray-500 mb-8">{selectedProduct.product.sub}</h4>
                
                <div className="prose prose-lg text-gray-700 mb-10 flex-grow">
                  <p className="leading-relaxed">{selectedProduct.product.desc}</p>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href={`/contact?subject=Inquiry about ${encodeURIComponent(selectedProduct.product.name)}`}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#df6c1f] text-white font-bold rounded-lg hover:bg-[#c25a17] transition-all group"
                  >
                    Enquire Now 
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Click outside to close (background overlay) */}
          <div className="absolute inset-0 z-[-1]" onClick={() => setSelectedProduct(null)}></div>
        </div>
      )}

    </main>
  );
}
