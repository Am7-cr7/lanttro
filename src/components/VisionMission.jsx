// VisionMission: قسم الرؤية والرسالة
// الصندوق الأسود الكبير من غير بوردر زيادة، والصور جواه بتتلون وتكبر لما تعدي عليها بالماوس
function VisionMission() {
  return (
    <section className="w-full bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* الصندوق الكبير: أسود وحواف دايرية، من غير بوردر */}
        {/* overflow-hidden: عشان الخلفية تفضل جوا الحواف الدايرية */}
        <div className="relative overflow-hidden rounded-[40px] bg-black p-8 md:p-16">

          {/* خلفية الدخان: لو الصورة مش موجودة الكود مش بيوقف، الخلفية هتفضل سودا */}
          <div className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 bg-[url('/images/vision-bg.png')]" />

          {/* المحتوى فوق الخلفية */}
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* 1) الرؤية: العنوان والنص */}
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-semibold md:text-5xl">
                <span className="text-neutral-500">Our </span>
                <span className="text-white">Vision</span>
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-400">
                To be the leaders in the media production industry, crafting a world where
                creativity meets technology to create unforgettable experiences. We strive to
                deliver genuine value that makes a positive impact on our communities and clients.
              </p>
            </div>

            {/* 2) صورة اللابتوب: بدون بوردر، وفيها ظل داخلي ناعم */}
            {/* shadow inset: بيدي الصورة عمق زي التصميم من غير إطار */}
            <div className="overflow-hidden rounded-[32px] shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
              <img
                src="/images/vision-laptop.png"
                alt="Laptop and books on a desk"
                className="img-hover h-64 w-full object-cover md:h-80"
              />
            </div>

            {/* 3) صورة العدسة */}
            <div className="overflow-hidden rounded-[32px] shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
              <img
                src="/images/vision-lens.png"
                alt="Camera lens close-up"
                className="img-hover h-64 w-full object-cover md:h-80"
              />
            </div>

            {/* 4) الرسالة: العنوان والنص */}
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-semibold md:text-5xl">
                <span className="text-neutral-500">Our </span>
                <span className="text-white">Mission</span>
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-400">
                At Lanttro, we are committed to creating media content that captivates minds and
                inspires hearts. We are here to bring our clients' ideas to life by delivering
                unique and impactful experiences, driven by passion, creativity, and integrity.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// تصدير القسم عشان App.jsx يستخدمه
export default VisionMission;