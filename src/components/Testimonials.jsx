// بيانات آراء العملاء: الكلام والاسم والمنصب والصورة
const testimonials = [
  {
    text: "Lanttro transformed our business around! Their digital strategies helped us reach new heights and increase our revenue by 30% in just a few months. Highly recommended!",
    name: "Sarah Thompson",
    role: "Founder of BlueBloom Fashion",
    image: "/images/client-sarah.png",
  },
  {
    text: "Working with Lanttro was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Mark Roberts",
    role: "Founder of GreenEarth Eco Store",
    image: "/images/client-mark.png",
  },
  {
    text: "The mobile app Lanttro developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
    name: "Lisa Williams",
    role: "Head of Product at HealthTech Innovations",
    image: "/images/client-lisa.png",
  },
  {
    text: "Lanttro transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our vision made the entire process smooth and hassle-free.",
    name: "Michael Johnson",
    role: "Marketing Manager at GlobalTech Solutions",
    image: "/images/client-michael.png",
  },
];

// Testimonials: قسم آراء العملاء
// الكروت بتتعرض جنب بعض وتقدر تسكرول أفقياً على الموبايل والكمبيوتر
function Testimonials() {
  return (
    <section className="w-full bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* العنوان: Our رمادي و Testimonials أبيض */}
        <h2 className="text-center text-4xl font-semibold md:text-5xl">
          <span className="text-neutral-500">Our </span>
          <span className="text-white">Testimonials</span>
        </h2>

        {/* الوصف تحت العنوان */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-neutral-400">
          Don't just take our word for it; hear what our satisfied clients have to say about their
          experience with Lanttro. We take pride in building lasting relationships and delivering
          exceptional results.
        </p>

        {/* صف الكروت: overflow-x-auto يخليه يسكرول أفقياً، snap-x يثبّت الكروت */}
        {/* [scrollbar-width:none] بيخفي شريط السكرول */}
        <div className="mt-16 flex snap-x gap-6 overflow-x-auto pb-6 [scrollbar-width:none]">
          {testimonials.map((item) => (
            // min-w: عرض ثابت للكارت، ومش بيتضغط مع باقي الكروت
            <div key={item.name} className="flex min-w-[300px] snap-start flex-col md:min-w-[380px]">

              {/* كارت الكلام */}
              <div className="flex flex-1 flex-col rounded-2xl border border-neutral-800 bg-[#111111] p-8">

                {/* أيقونة تويتر في مربع صغير فوق الكلام */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-neutral-300">
                  <span className="text-sm font-bold">X</span>
                </div>

                {/* نص الرأي */}
                <p className="text-sm leading-relaxed text-neutral-300">{item.text}</p>
              </div>

              {/* بيانات صاحب الرأي تحت الكارت */}
              <div className="mt-6 flex items-center gap-4 px-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-neutral-400">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// تصدير القسم عشان App.jsx يستخدمه
export default Testimonials;