// useState: عشان نعرف الزرار اتضغط ولا لأ (يفتح الخدمات ولا يقفلها)
import { useState } from "react";

// قايمة الخدمات: كل خدمة ليها اسمها وأيقونتها
// عايز تضيف خدمة؟ ضيفها هنا وخلاص
const services = [
  { title: "VIDEO PRODUCTION", icon: "/icons/video.svg" },
  { title: "BROADCAST PRODUCTION", icon: "/icons/broadcast.svg" },
  { title: "4K BROADCAST SERVICES", icon: "/icons/4k.svg" },
  { title: "360-DEGREE SERVICES", icon: "/icons/360.svg" },
  { title: "PHOTOGRAPHY", icon: "/icons/photo.svg" },
  { title: "DRONE SERVICES", icon: "/icons/drone.svg" },
  { title: "POST-PRODUCTION SERVICES", icon: "/icons/post.svg" },
  { title: "AUDIO PRODUCTION", icon: "/icons/audio.svg" },
  { title: "TIMELAPSE SERVICES", icon: "/icons/timelapse.svg" },
  { title: "EVENT MANAGEMENT SERVICES", icon: "/icons/event.svg" },
  { title: "LIVE STREAMING AND VIRTUAL EVENTS", icon: "/icons/live.svg" },
  { title: "BRANDING AND IDENTITY SERVICES", icon: "/icons/branding.svg" },
  { title: "SOCIAL MEDIA CONTENT CREATION", icon: "/icons/social.svg" },
  { title: "EDUCATIONAL AND TRAINING MATERIALS", icon: "/icons/education.svg" },
  { title: "CONTENT STRATEGY AND DEVELOPMENT", icon: "/icons/strategy.svg" },
];

// ServiceCard: كارت واحد للخدمة، والكود بيتكرر لكل خدمة في القايمة
function ServiceCard({ title, icon }) {
  return (
    // relative: عشان العناصر اللي جواه تتحسب من مكانه
    // overflow-hidden: أي حاجة تطلع بره الكارت تتقص
    <div className="relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-10 text-center">

      {/* الخلفية: نقط صغيرة متكررة، وده اللي بيدي الكارت الملمس */}
      {/* pointer-events-none: عشان الخلفية ما تمنعش الضغط على الزرار */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2b2b2b_1px,transparent_1px)] bg-[length:14px_14px] opacity-60" />

      {/* المحتوى: relative و z-10 عشان يبان فوق الخلفية */}
      <div className="relative z-10 flex flex-1 flex-col items-center">

        {/* منطقة الأيقونة: فيها الدواير اللي حواليها */}
        <div className="relative flex h-28 w-28 items-center justify-center">

          {/* الدايرة الأولى: قريبة من الأيقونة */}
          <span className="absolute inset-0 rounded-full border border-neutral-800" />

          {/* الدايرة التانية: أكبر شوية */}
          <span className="absolute -inset-6 rounded-full border border-neutral-900" />

          {/* الدايرة التالتة: أكبر وأخف */}
          <span className="absolute -inset-12 rounded-full border border-neutral-900/60" />

          {/* الأيقونة نفسها: فوق الدواير */}
          <img src={icon} alt="" className="relative z-10 h-10 w-10" />
        </div>

        {/* اسم الخدمة: حروف كابيتال وخط عريض */}
        <h3 className="mt-10 text-lg font-semibold uppercase tracking-wide">
          {title}
        </h3>

        {/* زرار Learn More: مستطيل بحواف دايرية وحدود رفيعة */}
        {/* mt-auto: بيخلي الزرار ينزل لتحت الكارت على طول */}
        <a
          href="#"
          className="mt-auto inline-flex items-center gap-3 rounded-full border border-neutral-700 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          Learn More <span>→</span>
        </a>
      </div>
    </div>
  );
}

// Services: قسم الخدمات كله
// بيعرض 3 خدمات في الأول، وزرار See All يفتح الباقي
function Services() {
  // showAll: false يعني نعرض 3 بس، true يعني نعرض الكل
  const [showAll, setShowAll] = useState(false);

  // لو الزرار مش مضغوط، نقطع القايمة عند أول 3 خدمات
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    // id="services" عشان لينك الـ Navbar يوصله
    <section id="services" className="w-full bg-[#0e0e0e] py-24">

      {/* حاوية المحتوى: أقصى عرض ومسافات جانبية */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* العنوان: Our رمادي و Services أبيض */}
        <h2 className="text-center text-4xl font-semibold md:text-5xl">
          <span className="text-neutral-500">Our </span>
          <span className="text-white">Services</span>
        </h2>

        {/* الوصف تحت العنوان */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-neutral-400">
          Our comprehensive range of services includes video production, broadcast production,
          photography, live streaming, and more. Whether you're a startup or an established
          enterprise, our experts will craft solutions that drive results.
        </p>

        {/* شبكة الكروت: عمود على الموبايل، اتنين على التابلت، تلاتة على اللابتوب */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* بنلف على الخدمات المعروضة ونرسم كارت لكل واحدة */}
          {visibleServices.map((service) => (
            <ServiceCard key={service.title} title={service.title} icon={service.icon} />
          ))}

        </div>

        {/* زرار See All: يفتح ويقفل الخدمات الزيادة */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full border border-neutral-700 px-8 py-3 text-sm transition hover:bg-white hover:text-black"
          >
            {showAll ? "Show Less" : "See All ↓"}
          </button>
        </div>

      </div>
    </section>
  );
}

// تصدير القسم عشان App.jsx يستخدمه
export default Services;