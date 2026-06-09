import Link from "next/link";

export default function CareerPage() {
  const jobs = [
    {
      title: "Interns",
      details: [
        { label: "Qualification", value: "Agri Deploma/Bsc Agri/ Msc Agri/ ABM/ B.Tech / Bsc Chemistry/ Msc Chemistry/ any learner." },
        { label: "Duration", value: "1-6 Months" },
        { label: "Stipend", value: "Based on Performance" },
      ]
    },
    {
      title: "Business Development Executive",
      details: [
        { label: "Qualification", value: "Agri Deploma/B.sc Agri/ M.sc Agri/ ABM/ B.Tech / B.sc Chemistry/ M.sc Chemistry/ MBA (Marketing) & any experience job seeker." },
        { label: "Experience", value: "2-3 years in required field" },
        { label: "Salary", value: "Based on industrial standard, No bar for right candidate" },
      ]
    },
    {
      title: "Area Manager",
      details: [
        { label: "Qualification", value: "Agri Diploma/Bsc Agri/ M.sc Agri/ ABM/ B. Tech / B.sc Chemistry/ M.sc Chemistry/ MBA (Marketing) & any experience job seeker." },
        { label: "Experience", value: "3-5 years in required field" },
        { label: "Salary", value: "Based on Industrial Standards, No Bar for Right Candidates." },
      ]
    }
  ];

  return (
    <main className="w-full pb-20 bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center pt-20 mb-16">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#043b22]/80 z-10"></div>
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("/Images/career-hero.webp")' }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-5 py-2 bg-[#df6c1f] text-white font-bold rounded-full text-sm uppercase tracking-widest mb-6 shadow-lg">
            Join Our Team
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-md">
            Career
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#e8f3ee] opacity-90 drop-shadow-sm">
            Grow With Us
          </h2>
        </div>
      </section>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-12">
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 font-medium">
          Join <span className="text-[#043b22] font-bold">Shetahit Farm Solutions Pvt. Ltd.</span> and be a part of transforming the agricultural ecosystem.
        </p>
        <p className="text-lg text-gray-500">
          We are always looking for passionate individuals in:
        </p>
      </div>

      {/* Job Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <div key={index} className="bg-[#f9f9f9] border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-[#043b22] mb-4 line-clamp-2 min-h-[3.5rem]">
              {job.title}
            </h3>
            
            <div className="w-16 h-1 bg-[#df6c1f] mb-6 rounded-full"></div>

            <div className="flex flex-col gap-5 text-gray-700 text-left mb-8 w-full">
              {job.details.map((detail, idx) => (
                <div key={idx} className="flex flex-col">
                  <strong className="text-xs uppercase tracking-wider text-[#043b22] mb-1">{detail.label}</strong>
                  <span className="text-sm leading-relaxed">{detail.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto w-full pt-6 border-t border-gray-200">
              <Link 
                href="#apply-now"
                className="flex items-center justify-center w-full gap-2 px-6 py-3 bg-[#df6c1f] text-white font-medium rounded-lg hover:bg-[#043b22] transition-colors"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l173.1 40.8c5.8 1.4 11.8 1.4 17.6 0l196.5-46.2c5.9-1.4 9.4-7.1 8-13l-4.5-18.8c-1.4-5.9-7.1-9.4-13-8L224 88.4 26.4 41.6c-5.9-1.4-11.7 2.1-13.1 8L8.8 68.4c-1.4 5.9 2 11.7 4.8 11.4zM224 160c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path>
                </svg>
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Apply Now Form Section */}
      <div id="apply-now" className="max-w-3xl mx-auto px-6 mt-20">
        <div className="bg-[#043b22] text-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(4,59,34,0.3)] border border-white/10 relative overflow-hidden">
          {/* Decorative subtle pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <h3 className="text-3xl font-extrabold mb-8 text-center">Submit Your Application</h3>
          <form className="flex flex-col gap-6 relative z-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-200 ml-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter Your Name" 
                className="px-6 py-3.5 bg-white rounded-full text-gray-900 placeholder-gray-400 border-2 border-transparent outline-none focus:border-[#df6c1f] transition-colors shadow-inner" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-200 ml-2">Mobile Number</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="Enter Mobile Number" 
                className="px-6 py-3.5 bg-white rounded-full text-gray-900 placeholder-gray-400 border-2 border-transparent outline-none focus:border-[#df6c1f] transition-colors shadow-inner" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-200 ml-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter Your Email" 
                className="px-6 py-3.5 bg-white rounded-full text-gray-900 placeholder-gray-400 border-2 border-transparent outline-none focus:border-[#df6c1f] transition-colors shadow-inner" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="resume" className="text-sm font-semibold text-gray-200 ml-2">Upload Resume (PDF, JPEG, PNG)</label>
              <input 
                type="file" 
                id="resume" 
                accept=".pdf,.jpeg,.png,.jpg" 
                className="w-full px-6 py-3 bg-white rounded-full text-gray-600 border-2 border-transparent outline-none file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#e8f3ee] file:text-[#043b22] hover:file:bg-[#d8efe5] file:transition-colors file:cursor-pointer cursor-pointer shadow-inner" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="position" className="text-sm font-semibold text-gray-200 ml-2">Applying For</label>
              <select 
                id="position" 
                className="px-6 py-3.5 bg-white rounded-full text-gray-900 border-2 border-transparent outline-none focus:border-[#df6c1f] transition-colors shadow-inner appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 1.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.25rem' }}
              >
                <option value="Interns">Interns</option>
                <option value="Business Development Executive">Business Development Executive</option>
                <option value="Area Manager">Area Manager</option>
              </select>
            </div>

            <button 
              type="button" 
              className="mt-6 w-full py-4 bg-[#df6c1f] text-white text-lg font-bold rounded-full hover:bg-white hover:text-[#df6c1f] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
