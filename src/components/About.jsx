// استيراد الـ Hook اللي بيخلي القسم يظهر بحركة لما تسكرول
import { useReveal } from "../hooks/useReveal";

// SectionTitle: العنوان المشترك بلونين، هنستخدمه هنا
import SectionTitle from "./SectionTitle";

// About: قسم "من نحن"
// id="about-us" عشان لينك الـ Navbar يوصله
function About() {
  // reveal: فيه الـ ref اللي بنربطه بالقسم، والـ className اللي بيتغير لما يظهر
  const reveal = useReveal();

  return (
    <section id="about-us" className="w-full bg-[#0e0e0e] py-24">

      {/* الحاوية: ref بنربطه هنا، وclassName بيحدد هل القسم مخفي ولا ظاهر */}
      <div ref={reveal.ref} className={`mx-auto max-w-7xl px-6 md:px-10 ${reveal.className}`}>

        {/* العنوان: About رمادي و Us أبيض */}
        <SectionTitle muted="About" bold="Us" />

        {/* الفقرة: الوصف الكامل للشركة */}
        <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-relaxed text-neutral-400 md:text-lg">
          Lanttro is a leading production company specializing in large-scale events and live
          broadcasts. With a focus on delivering exceptional results for major corporations,
          Lanttro has a proven track record in producing concerts, events, and other high-profile
          projects. Based in Saudi Arabia, Lanttro's reach extends globally, allowing them to take
          on international projects as well. Lanttro is comprised of a team of experienced industry
          professionals with over 16 years of combined experience.
        </p>

        {/* الخط الرأسي الرفيع تحت الفقرة */}
        <div className="mx-auto mt-16 h-24 w-px bg-neutral-700" />

      </div>
    </section>
  );
}

// تصدير القسم عشان App.jsx يستخدمه
export default About;