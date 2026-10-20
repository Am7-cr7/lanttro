// أيقونات السوشيال من الملف اللي عملناه بـ SVG بنفسنا
import { Instagram, Twitter, Linkedin } from "./SocialIcons";

// الأعمدة اللي في الفوتر: كل عمود عنوان وقايمة روابط
const footerColumns = [
  {
    title: "Home",
    links: ["Mission & Vision", "Why Choose Lanttro?", "Services", "Our Portfolio", "Our Team", "Testimonials", "Contact Us"],
  },
  {
    title: "Services",
    links: ["Video Production", "Broadcast Production", "4K Broadcast Services", "360-Degree Services", "See All"],
  },
  {
    title: "Projects",
    links: ["E-commerce Platform", "Fitness Mobile App", "Corporate Website", "Digital Marketing"],
  },
  {
    title: "About Us",
    links: ["Our Team", "Achievements", "Awards"],
  },
];

// Footer: الفوتر اللي تحت الصفحة
function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* الصف الأول: اللوجو على الشمال والسوشيال على اليمين */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-neutral-900 pb-10 md:flex-row">
          <h2 className="text-2xl font-bold">Lanttro</h2>

          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-400">Follow Us On Social Media</span>

            {/* كل أيقونة بتتملى بالأبيض لما الماوس يعدي عليها */}
            <a href="#" className="btn-fill rounded-full bg-neutral-900 p-3">
              <Linkedin size={16} />
            </a>
            <a href="#" className="btn-fill rounded-full bg-neutral-900 p-3">
              <Instagram size={16} />
            </a>
            <a href="#" className="btn-fill rounded-full bg-neutral-900 p-3">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* الأعمدة: موبايل عمود، تابلت اتنين، لابتوب أربعة */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-6 font-semibold">{column.title}</h3>
              <ul className="flex flex-col gap-3 text-sm text-neutral-400">
                {column.links.map((link) => (
                  <li key={link}>
                    {/* nav-link: الخط اللي بيتمدد تحت الكلام لما الماوس يعدي */}
                    <a href="#" className="nav-link hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* الصف الأخير: حقوق النشر والروابط القانونية */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-900 pt-8 text-sm text-neutral-500 md:flex-row">
          <p>© 2026 Lanttro. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="nav-link hover:text-white">Privacy Policy</a>
            <a href="#" className="nav-link hover:text-white">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

// تصدير الفوتر عشان App.jsx يستخدمه
export default Footer;