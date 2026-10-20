// استيراد: نحتاج useState لو هنستخدم حاجة تفاعلية، هنا مش محتاجينها بس نسيبها للمستقبل
// قايمة المميزات: كل ميزة ليها عنوان ووصف وأيقونة
const reasons = [
  {
    title: "Superior Broadcasting Quality",
    text: "Experience superior broadcasting quality with our production media website, delivering pristine audio and video for your audience's enjoyment.",
    icon: "/icons/reason-quality.svg",
  },
  {
    title: "Inventive Event Coverage",
    text: "Capture every moment with inventive event coverage that brings your story to life through dynamic visuals and seamless production.",
    icon: "/icons/reason-coverage.svg",
  },
  {
    title: "Cutting-Edge Web Design",
    text: "Transform your online presence with cutting-edge web design that blends creativity and functionality for a seamless user experience.",
    icon: "/icons/reason-web.svg",
  },
];

// Reasons: قسم "ليه تختار Lanttro"
// بيعرض 3 مميزات جنب بعض على الكمبيوتر، وتحت بعض على الموبايل
function Reasons() {
  return (
    // section: القسم كامل بياخد عرض الشاشة
    <section className="w-full bg-[#0e0e0e] py-24">

      {/* حاوية المحتوى: أقصى عرض ومسافات جانبية */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* العنوان الرئيسي للقسم */}
        <h2 className="text-center text-4xl font-semibold md:text-5xl">
          <span className="text-neutral-500">Reasons to Choose </span>
          <span className="text-white">Lanttro</span>
        </h2>

        {/* الوصف تحت العنوان */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-neutral-400">
          Partnering with Lanttro offers a multitude of advantages. Experience increased brand
          visibility, improved customer engagement, and higher ROI.
        </p>

        {/* شبكة المميزات: عمود واحد على الموبايل، وتلاتة على الكمبيوتر */}
        <div className="mt-16 grid gap-12 md:grid-cols-3">

          {/* بنلف على القايمة ونعرض كل ميزة */}
          {reasons.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">

              {/* الدايرة اللي فيها الأيقونة */}
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900">
                <img src={item.icon} alt="" className="h-10 w-10" />
              </div>

              {/* عنوان الميزة */}
              <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>

              {/* وصف الميزة */}
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">{item.text}</p>

              {/* زرار Learn More */}
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-neutral-700 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
              >
                Learn More <span>→</span>
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

// تصدير المكون عشان App.jsx يقدر يستخدمه
export default Reasons;