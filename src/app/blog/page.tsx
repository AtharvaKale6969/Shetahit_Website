import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Live Organic! Breath Natural!",
      category: "Farming",
      date: "July 29, 2021",
      excerpt:
        "Food quality and safety are the primary concerns of Indian consumers today. The growing environmental and food safety concerns have created a significant demand for yield from green and sustainable [...]",
      image: "/wp-content/uploads/2021/07/Live-Organic-Breath-Natura.webp",
      link: "/blog/live-organic-breath-natural",
    },
    {
      id: 2,
      title: "Organic Farming",
      category: "Farming",
      date: "July 20, 2021",
      excerpt:
        "Organic Farming! The name itself exudes a breath of healthy air and healthy food grains. It is emerging as the latest way of producing crops and the organic farming becoming [...]",
      image: "/wp-content/uploads/2021/07/Organic-Farming.webp",
      link: "/blog/organic-farming",
    },
  ];

  return (
    <main className="w-full bg-[#f9f9f9] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-[#043b22] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="/Images/blog-hero.jpg" 
            alt="Blog Background" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">Our Blog</h1>
          <p className="text-lg md:text-xl text-[#e8f3ee] max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            Insights, updates, and knowledge for a sustainable future.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Main Content Area */}
        <div className="w-full lg:w-3/4 flex flex-col gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <Link href={post.link} className="block relative w-full md:w-2/5 aspect-video md:aspect-auto">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </Link>

              {/* Content Section */}
              <div className="p-8 w-full md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center text-sm font-semibold uppercase tracking-wider mb-3">
                  <Link href="#" className="text-[#df6c1f] hover:text-[#043b22] transition-colors">
                    {post.category}
                  </Link>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#043b22] mb-4 hover:text-[#df6c1f] transition-colors leading-tight">
                  <Link href={post.link}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link
                    href={post.link}
                    className="inline-block px-6 py-2.5 bg-[#df6c1f] text-white font-medium rounded hover:bg-[#043b22] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar Area */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm p-8 sticky top-32">
            <h3 className="text-xl font-bold text-[#043b22] mb-6 pb-4 border-b border-gray-100">
              Recent Posts
            </h3>
            <ul className="flex flex-col gap-4">
              {posts.map((post) => (
                <li key={`sidebar-${post.id}`}>
                  <Link
                    href={post.link}
                    className="text-gray-700 hover:text-[#df6c1f] font-medium transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
