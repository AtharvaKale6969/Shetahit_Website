import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="w-full flex flex-col pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full mb-16 text-center">
        <h1 className="text-5xl font-bold text-[#043b22]">Services</h1>
      </div>

      {/* Service 1: Text Left, Image Right */}
      <section className="w-full py-16 bg-gradient-to-r from-white to-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#043b22] mb-6">Organic Farm Fertilizer (OFF)</h2>
            <p className="text-lg text-gray-700 mb-4">
              Organic Farm Fertilizer (OFF) is a Farm-Side service where we consult & train our farmers to build their farm more sustainable by making fertilizer on their own site in an affordable cost. The service helps to boost soil enrichment and impressive result in the farm.
            </p>
            <p className="text-lg text-gray-700">
              It is premium service for the farmers who has their own resource, 10-acre farm and mini-infrastructure to get processing and storing.
            </p>
          </div>
          <div className="flex-1 w-full relative aspect-video md:aspect-[5/4] rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/wp-content/uploads/2023/10/Organic-Farm-Fertilizer.jpg" 
              alt="Organic Farm Fertilizer" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Service 2: Image Left, Text Right */}
      <section className="w-full py-16 bg-gradient-to-l from-white to-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 w-full relative aspect-video md:aspect-[5/4] rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/wp-content/uploads/2023/10/Onsite-Composting-Facility.jpg" 
              alt="Onsite Composting Facility" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#043b22] mb-6">Onsite Composting Facility (OCF)</h2>
            <p className="text-lg text-gray-700 mb-4">
              OCF is a made for Gram Panchayats who has their daily wet waste generation around 2 ton. Where we assess the Gram Panchayat, assist in establishing the facility and handle daily based wet-waste processing and end compost management.
            </p>
            <p className="text-lg text-gray-700">
              OCF service helps to create organized wet waste management for the Gram Panchayat and also give us employment opportunity & partially monetary benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Service 3: Text Left, Image Right */}
      <section className="w-full py-16 bg-gradient-to-r from-white to-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#043b22] mb-6">Soil Testing</h2>
            <p className="text-lg text-gray-700 mb-4">
              It is first and important step that farmers should take for knowing the health of soil and according provide treatment for soil enrichment. In soil testing, a sample is tested to determine its nutrient and contaminant content, acidity and composition. For agriculture sector, the soil is tested for its fertility, expected growth potential.
            </p>
            <p className="text-lg text-gray-700">
              The soil sample is also tested for phosphorus, potassium, magnesium and calcium. We provide service with affordable price by providing report and free consultation to recover the deficiency in soil.
            </p>
          </div>
          <div className="flex-1 w-full relative aspect-video md:aspect-[5/4] rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/wp-content/uploads/2023/10/Soil-Testing.webp" 
              alt="Soil Testing" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Service 4: Image Left, Text Right */}
      <section className="w-full py-16 bg-gradient-to-l from-white to-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 w-full relative aspect-video md:aspect-[5/4] rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/wp-content/uploads/2023/12/krushi-seva-kendra.jpg" 
              alt="Krushi Seva Kendra" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#043b22] mb-6">Krushi Seva Kendra</h2>
            <p className="text-lg text-gray-700 mb-4">
              Krishi Seva Kendra is one where the necessary things related to farming are provided to the farmers, such as fertilizers, pesticides, and seeds etc.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
