// useReveal: Hook بيراقب العنصر، ولما يدخل الشاشة بيضيف عليه كلاس is-visible
import { useEffect, useRef, useState } from "react";

export function useReveal() {
  // ref: بنربطه بالعنصر اللي عايزين نراقبه
  const ref = useRef(null);

  // isVisible: بيتحول لـ true لما العنصر يظهر على الشاشة
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // IntersectionObserver: متصفح بيراقب هل العنصر ظاهر ولا لأ
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // نوقف المراقبة بعد أول مرة، عشان الحركة تحصل مرة واحدة بس
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 } // لازم 15% من العنصر يظهر قبل ما الحركة تبدأ
    );

    observer.observe(element);

    // تنظيف: لما الكومبوننت يتقفل، بنوقف المراقبة
    return () => observer.disconnect();
  }, []);

  // بنرجع الـ ref، وكلاس بيتغير حسب الحالة
  return { ref, className: isVisible ? "reveal is-visible" : "reveal" };
}