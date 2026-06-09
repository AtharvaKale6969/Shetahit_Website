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
            Organic Farming
          </h1>
          <div className="flex items-center text-gray-500 font-medium">
            <span>July 20, 2021</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-md">
          <Image
            src="/wp-content/uploads/2021/07/Organic-Farming.webp"
            alt="Organic Farming"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Organic Farming! The name itself exudes a breath of healthy air and healthy food grains. It is emerging as the latest way of producing crops and the organic farming becoming must as multiple dieses are increasing day by day. Organic farming traces back to traditional old methods of farming along with invented methods where production cost is getting less and obviously production is increasing rapidly. It helps to review the fertility level of the soil and also helps to maintain balance in nature and human live. Organic farming involves the usage of everything natural – seeds, manures and growth promoters.
          </p>
          <p>
            No chemicals or fertilizers are used for agricultural practices. Organic fruits and vegetables are making rounds of the market at high prices because it defines the new style of living and good health and also statoscope. It has been proved by researchers that as a result of hybrids, we have traces of pesticides in our body. But by consuming organic farm produce, it can be reduced and resulted in terms of good health.
          </p>
          <p>
            So, if you want to get a life get going and take up organic farming. Go organic! Breathe organic! Live Organic!
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
