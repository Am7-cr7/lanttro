// بيانات المشاريع
const projects = [
  {
    title: "Innovative E-commerce Platform",
    category: "Web Development",
    date: "January 2022",
    image: "/images/project-ecommerce.png",
    text: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
  },
  {
    title: "Mobile App for Enhanced Fitness",
    category: "Mobile App Development",
    date: "March 2022",
    image: "/images/project-fitness.png",
    text: "Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.",
  },
  {
    title: "Modern Corporate Website",
    category: "Web Design",
    date: "April 2022",
    image: "/images/project-corporate.png",
    text: "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices.",
  },
  {
    title: "Digital Marketing Success Story",
    category: "Digital Marketing",
    date: "May 2022",
    image: "/images/project-marketing.png",
    text: "Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads.",
  },
];

// كارت المشروع
function ProjectCard({ project }) {
  return (
    // group: لما نعدي على الكارت، العناصر جواه تتحرك
    <div className="group rounded-3xl border border-neutral-900 bg-[#111111] p-6 transition duration-500 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

      {/* إطار الصورة */}
      <div className="relative overflow-hidden rounded-2xl">

        {/* الصورة: أبيض وأسود، وتتلون وتكبر لما تعدي عليها */}
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0 md:h-72"
        />

        {/* غلاف الزرار: على الموبايل ظاهر، وعلى الكمبيوتر بيطلع لما تعدي على الكارت */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transition duration-500 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">

          {/* الزرار الأصلي اللي عجبك: بيتملى بالأبيض من تحت */}
          <a
            href="#"
            className="btn-fill block whitespace-nowrap rounded-full border border-neutral-600 bg-black/80 px-5 py-2 text-sm"
          >
            View Projects Details →
          </a>
        </div>
      </div>

      {/* عنوان المشروع */}
      <h3 className="mt-6 text-lg font-semibold">{project.title}</h3>

      {/* التصنيف والتاريخ */}
      <div className="mt-2 flex justify-between text-sm text-neutral-400">
        <span>Category: {project.category}.</span>
        <span>{project.date}</span>
      </div>

      {/* الوصف */}
      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{project.text}</p>
    </div>
  );
}

// Portfolio: قسم أعمالنا السابقة
function Portfolio() {
  return (
    <section id="projects" className="w-full bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <h2 className="text-center text-4xl font-semibold md:text-5xl">
          <span className="text-neutral-500">Our </span>
          <span className="text-white">Portfolio</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-neutral-400">
          Witness the brilliance of our previous projects. Our portfolio showcases the successful
          collaborations we've had with diverse clients across various industries.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* زرار View All Projects: نوع الحدود المتوهجة */}
        <div className="mt-12 flex justify-center">
          <a href="#" className="btn-glow rounded-full px-8 py-3 text-sm">
            View All Projects →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;