// Hero: أول قسم الزائر بيشوفه
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[#1d1d1d] pt-28 pb-16"
    >
      {/* كلمة Lanttro الكبيرة في الخلفية */}
      <span className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[18vw] font-bold leading-none text-[#1c1c1c] lg:right-[4%]">
        Lanttro
      </span>

      {/* المحتوى فوق الخلفية */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2">

        {/* العمود الأول: الكلام والزرار */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Digital Solutions{" "}
            <span className="text-neutral-500">That</span>
            <br />
            <span className="text-neutral-500">Drive Success</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-neutral-400 lg:mx-0">
            Lanttro is a leading production company specializing in large-scale events and live
            broadcasts. We deliver exceptional results for major corporations.
          </p>

          {/* زرار بسهم: السهم بيتحرك لليمين لما الماوس يعدي */}
          <a
            href="#contact-us"
            className="btn-arrow mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black"
          >
            Contact Now!
            <span className="arrow">→</span>
          </a>
        </div>

        {/* العمود التاني: الكاميرا */}
        <div className="flex justify-center">
          <img
            src="/images/hero-camera.png"
            alt="Professional camera on tripod"
            className="w-full max-w-lg object-contain [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;