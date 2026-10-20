// useState: عشان نعرف قايمة الموبايل مفتوحة ولا مقفولة
import { useState } from "react";

// الروابط: الاسم اللي بيظهر، والـ id للقسم اللي بيوديله
const links = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Our Team", id: "our-team" },
  { label: "About Us", id: "about-us" },
  { label: "Contact Us", id: "contact-us" },
];

// Navbar: الشريط اللي فوق، ثابت وبيفضل ظاهر وإنت بتسكرول
function Navbar() {
  // open: بيحدد هل قايمة الموبايل مفتوحة
  const [open, setOpen] = useState(false);

  return (
    // fixed: الشريط ثابت فوق
    // backdrop-blur-md: خلفية ضبابية خفيفة لما الكلام يعدي من ورا
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0e0e0e]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">

        {/* اللوجو: بيكبر شوية لما الماوس يعدي عليه */}
        <a href="#home" className="text-2xl font-bold tracking-wide transition duration-300 hover:scale-105">
          Lanttro
        </a>

        {/* روابط الكمبيوتر: بتظهر من 768px وفوق */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm text-neutral-300">
            {links.map((link) => (
              // nav-link: الخط اللي بيتمدد تحت الكلام (متعرف في index.css)
              <li key={link.id}>
                <a href={`#${link.id}`} className="nav-link hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* زرار القايمة للموبايل: بيتقلب بين ☰ و ✕ */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-2xl transition duration-300 hover:scale-110 md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* قايمة الموبايل: بتنزل من فوق بحركة ناعمة */}
      {/* مقفولة: ارتفاعها صفر وشفافة. مفتوحة: ارتفاعها كامل وظاهرة */}
      <nav
        className={`overflow-hidden border-t bg-[#0e0e0e] transition-all duration-500 md:hidden ${
          open ? "max-h-96 border-neutral-800 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 text-neutral-300">
          {links.map((link) => (
            <li key={link.id}>
              {/* onClick: بيقفل القايمة أول ما تختار رابط */}
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="nav-link block hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// تصدير الناف بار عشان App.jsx يستخدمه
export default Navbar;