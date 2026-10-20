// useEffect: بيشغّل الحركة أول ما الكومبوننت يتعرض، وبيوقفها لما يتقفل
// useRef: مرجع للشريط نفسه، عشان نقدر نحرك السكرول بتاعه من الكود
import { useEffect, useRef } from "react";

// أسماء الشركات: نفس أسماء الملفات في public/icons
const logos = ["amazon", "dribbble", "hubspot", "notion", "netflix", "zoom"];

// Clients: شريط الشعارات
// بيتحرك لوحده بهدوء، ولما الماوس يعدي عليه أو تلمسه على الموبايل بيقف
// وتقدر تسكرول بالماوس (Shift + عجلة) أو بالسوايپ على الموبايل
function Clients() {
  // trackRef: هنا بنحفظ الشريط
  const trackRef = useRef(null);

  // pausedRef: لو true الحركة بتقف
  // استخدمنا ref مش state عشان تغيير الوقفة ما يعملش رسم جديد للكومبوننت
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let frame = 0;
    let animationId;

    // step: بتتنفذ في كل فريم من فريمات المتصفح
    const step = () => {
      frame++;

      // بنتحرك بكسل كل فريمين، عشان الحركة تبقى هادية مش سريعة
      if (!pausedRef.current && frame % 2 === 0) {
        el.scrollLeft += 1;

        // لما نوصل لنص الشريط (وهو نسخة كاملة تانية من الشعارات)،
        // نرجع للبداية، والزائر ما يحسش بأي قطع
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      // نطلب الفريم الجاي
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    // تنظيف: لما الكومبوننت يتقفل، بنوقف الحركة عشان ما تفضلش شغالة في الخلفية
    return () => cancelAnimationFrame(animationId);
  }, []);

  // الشعارات مكررة مرتين، عشان الحركة تبان مستمرة من غير فراغ
  const doubled = [...logos, ...logos];

  return (
    <section className="w-full border-y border-neutral-900 bg-[#0b0b0b] py-10 md:py-14">

      {/* الشريط: overflow-x-auto يخليه يسكرول بالإيد، والسكرول بار مخفي */}
      {/* onMouseEnter/Leave و onTouchStart/End بيوقفوا الحركة لما تكون متفاعل معاه */}
      <div
        ref={trackRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => (pausedRef.current = false)}
        className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {doubled.map((name, index) => (
          // المسافة بين الشعارات جوا كل عنصر، عشان النسختين يبقوا متطابقين
          <div key={`${name}-${index}`} className="flex flex-shrink-0 items-center px-8 md:px-14">

            {/* الشعار: باهت لحد ما الماوس يعدي عليه، وبيكبر على الكمبيوتر */}
            <img
              src={`/icons/logo-${name}.svg`}
              alt={name}
              className="h-8 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-12"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// تصدير القسم عشان App.jsx يستخدمه
export default Clients;