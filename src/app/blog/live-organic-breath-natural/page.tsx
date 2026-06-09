import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="w-full pt-32 pb-20 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm font-bold uppercase tracking-widest text-[#df6c1f] mb-4">
            <span>Farming</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#043b22] mb-6 leading-tight">
            Live Organic! Breath Natural!
          </h1>
          <div className="flex items-center text-gray-500 font-medium">
            <span>July 29, 2021</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-md">
          <Image
            src="/wp-content/uploads/2021/07/Live-Organic-Breath-Natura.webp"
            alt="Live Organic! Breath Natural!"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Food quality and safety are the primary concerns of Indian consumers today. The growing environmental and food safety concerns have created a significant demand for yield from green and sustainable cultivation methods. Modern farming methods often lead to biodiversity loss and monoculture, which are huge factors in the environment’s decline. Pesticides and chemical usage are rampant in Indian agriculture, causing water and soil contamination.
          </p>
          <p>
            Considering this, companies are prioritising organic farming, which is one of the most effective ways to not only provide food security and improve farmers’ livelihoods but also eliminate the use of harmful chemicals. An organic agricultural system promotes and enhances the health of the agro ecosystem, including biodiversity, biological cycles, and soil biological activities. It helps reduce greenhouse gas emissions, encourages soil & water conservation, and improves crop yields.
          </p>
          <p>
            Due to this, the industry has been steadily shifting from traditional farming to organic and sustainable farming methods. Organic farming immensely contributes to the overall economy, ecology, and social welfare improvement.
          </p>

          <h3 className="text-2xl font-bold text-[#043b22] mt-10 mb-4">Income Growth</h3>
          <p>
            Farmers bear the brunt of economic exploitation by middlemen and large corporations. The government’s minimum support price (MSP) system is often not appropriately implemented, and farmers cannot get fair prices for their produce. As a result, they are forced to take loans from moneylenders at high-interest rates. This vicious cycle of debt leads to farmers’ suicide, poverty, and protests.
          </p>
          <p>
            Organic farming allows farmers to get better prices for their produce as there is a growing demand for organic products. Organic farming in India is not just restricted to a few certified organic farmers. Many Indian farmers are practising organic methods and, with government efforts, they can now get certification for their organic products. For example, the Paramparagat Krishi Vikas Yojna (PKVY) (Traditional Agriculture Development Scheme) promotes cluster-based organic farming with PGS (Participatory Guarantee System) certification. The scheme assists INR 50,000 per hectare for three years, of which 62% is given as an incentive towards organic inputs.
          </p>

          <h3 className="text-2xl font-bold text-[#043b22] mt-10 mb-4">Environments Impact</h3>
          <p>
            Organic farming is a set of agricultural production practices that maintain and enhance the health of ecosystems and soil biodiversity. It is done by using diverse species, incorporating crop rotations, and using natural pest management techniques. The use of chemical pesticides and fertilisers is prohibited in organic farming. Organic agriculture helps in reducing greenhouse gas emissions and has a positive impact on climate change.
          </p>
          <p>
            It is estimated that on a global scale, organic farming can benefit biodiversity by ~34% and abundance by ~50%. Organic farming has a protective role to play in environmental conservation. Instead of synthetic inputs, it relies on ecological processes, biodiversity, and cycles adapted to local conditions. This system often integrates three main objectives: environmental health, economic profitability, and social and economic equity.
          </p>

          <h3 className="text-2xl font-bold text-[#043b22] mt-10 mb-4">Consumers benefit from a health and quality perspective</h3>
          <p>
            The global pandemic has made people more conscious about their health and what they are eating. People want to know where their food is coming from and how it is being grown. Falling immunities, hazardous diseases like cancer, food allergies, hormonal imbalances, PCOS, and much more can be attributed to chemical and pesticide residues in modern production, which can be tackled with organic food.
          </p>
          <p>
            Organic food is often considered healthier because it is free from harmful chemicals and pesticides. The rise in healthy eating habits like consuming more fruits and vegetables, whole grains, and plant-based proteins has increased the demand and sale of organic products.
          </p>

          <h3 className="text-2xl font-bold text-[#043b22] mt-10 mb-4">GDP Growth</h3>
          <p>
            The growth of the organic food market is driven by health awareness among consumers, changes in lifestyle, and a rise in income levels. Organic agriculture has the potential to contribute significantly to the Indian economy.
          </p>
          <p>
            The sector positively impacts GDP growth, employment generation, and export earnings. It also promotes sustainable development. The agricultural industry contributes around 14% of GDP and employs 42% of the workforce (Times of India). The country has the potential to become a global leader in organic agriculture and can contribute significantly to GDP growth.
          </p>

          <h3 className="text-2xl font-bold text-[#043b22] mt-10 mb-4">Looking Forward</h3>
          <p>
            The economic benefits of organic farming are not just restricted to farmers. The entire value chain benefits from increased demand and production from input providers to retailers. Thus, the future for organic farming in India is to increase the area under cultivation, promote farmer-to-consumer linkages, and create an enabling policy environment.
          </p>
          <p>
            While the government has taken some initiatives to promote organic farming in the country, the private sector has also promoted organic farming in India. Some companies have set up their organic farms, while others have provided financial assistance to farmers for conversion to organic methods. With the right policies in place, India has the potential to become a global leader in organic agriculture.
          </p>
        </div>

        {/* Footer actions */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link href="/blog" className="text-[#043b22] font-bold hover:text-[#df6c1f] transition-colors flex items-center gap-2">
            <span>←</span> Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
