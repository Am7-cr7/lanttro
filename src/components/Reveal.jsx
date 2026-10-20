// useEffect: بيشغّل المراقبة أول ما الكومبوننت يتعرض
// useRef: بيحفظ مرجع للعنصر اللي هنراقبه
// useState: بيحفظ هل القسم ظهر ولا لأ
import { useEffect, useRef, useState } from "react";

// Reveal: أي حاجة نحطها جواه بتطلع بحركة لما تدخل الشاشة وإنت بتسكرول
// delay: تأخير الحركة بالملي ثانية (اختياري)
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver: المتصفح بيراقب هل العنصر ظاهر على الشاشة ولا لأ
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // القسم ظهر، نشغّل الحركة
          setVisible(true);
          // نوقف المراقبة، عشان الحركة تحصل مرة واحدة بس
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15, // لازم 15% من القسم يظهر قبل ما الحركة تبدأ
        rootMargin: "0px 0px -40px 0px", // بيبدأ شوية قبل ما القسم يوصل للآخر
      }
    );

    observer.observe(el);

    // تنظيف: لما الكومبوننت يتقفل، بنوقف المراقبة
    return () => observer.disconnect();
  }, []);

  return (
    // reveal: الكلاس اللي في index.css (مخفي ومنزاح لتحت)
    // is-visible: بيتضاف لما القسم يظهر، فيطلع لمكانه
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// تصدير الكومبوننت عشان App.jsx يستخدمه
export default Reveal;