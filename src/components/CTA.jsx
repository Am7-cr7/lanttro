// CTA: بانر كبير قبل الفوتر، بيشجع الزائر يتواصل معانا
function CTA() {
  return (
    <section className="w-full bg-[#0e0e0e] px-6 py-24 md:px-10">
      {/* الكارت: خلفية منقطة وحواف دايرية */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-neutral-900 bg-[#0b0b0b] px-6 pt-20">

        {/* الخلفية المنقطة */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2b2b2b_1px,transparent_1px)] bg-[length:14px_14px] opacity-40" />

        {/* المحتوى فوق الخلفية */}
        <div className="relative z-10 text-center">

          {/* العنوان الكبير */}
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-5xl">
            Ready to bring your vision to life?
          </h2>

          {/* الوصف */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-neutral-400 md:text-base">
            Let's turn your ideas into unforgettable productions. Contact our team today and start
            your next project with Lanttro.
          </p>

          {/* زرار التواصل */}
          <p className="mt-12 text-neutral-300">Contact with us now!</p>
          <a
            href="#contact-us"
            className="mt-4 inline-block rounded-full bg-white px-8 py-3 font-medium text-black transition hover:bg-neutral-200"
          >
            Contact Now!
          </a>
        </div>

        {/* اسم الشركة الكبير اللي بيطلع من تحت الكارت */}
        {/* h-40 و overflow-hidden: بيقص الكلمة من تحت زي التصميم */}
        <div className="relative z-10 mt-16 h-40 overflow-hidden md:h-56">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-[8rem] font-bold leading-none text-white md:text-[14rem]">
            Lanttro
          </span>
          {/* طبقة تدرج بتخفي الكلمة تدريجياً من تحت */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] to-transparent" />
        </div>

      </div>
    </section>
  );
}

// تصدير القسم عشان App.jsx يستخدمه
export default CTA;