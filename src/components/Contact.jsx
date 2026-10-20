// useState: حالة الفورم (مستني، بيتبعت، تم)
// useRef: عشان نفضي الفورم بعد الإرسال
import { useRef, useState } from "react";

// Contact: قسم التواصل
function Contact() {
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

  // بيتنفذ لما تدوس Send
  function handleSubmit(e) {
    // منع الصفحة من الـ refresh
    e.preventDefault();
    setStatus("loading");

    // تأخير عشان نشوف الحركة، مش إرسال حقيقي
    setTimeout(() => {
      setStatus("success");
      formRef.current?.reset();
    }, 1800);
  }

  return (
    <section id="contact-us" className="w-full bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="grid items-center gap-10 rounded-[40px] border border-neutral-900 bg-[#111111] p-8 md:p-14 lg:grid-cols-2">

          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Let's connect constellations</h2>
            <p className="mt-4 text-neutral-400">
              Let's align our constellations! Reach out and let the magic of collaboration illuminate
              our skies.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">

              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="First Name" required className="rounded-xl border border-neutral-800 bg-[#0b0b0b] px-4 py-3 text-sm outline-none focus:border-neutral-500" />
                <input type="text" placeholder="Last Name" required className="rounded-xl border border-neutral-800 bg-[#0b0b0b] px-4 py-3 text-sm outline-none focus:border-neutral-500" />
              </div>

              <input type="email" placeholder="Email" required className="rounded-xl border border-neutral-800 bg-[#0b0b0b] px-4 py-3 text-sm outline-none focus:border-neutral-500" />

              <input type="tel" placeholder="Phone Number" className="rounded-xl border border-neutral-800 bg-[#0b0b0b] px-4 py-3 text-sm outline-none focus:border-neutral-500" />

              <textarea placeholder="Message" rows={5} className="resize-none rounded-xl border border-neutral-800 bg-[#0b0b0b] px-4 py-3 text-sm outline-none focus:border-neutral-500" />

              {/* زرار Send: الخلفية المتدرجة بتتحرك لما الماوس يعدي */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className="btn-gradient flex h-12 items-center justify-center gap-2 rounded-xl font-semibold disabled:cursor-not-allowed"
              >
                {status === "idle" && "Send"}

                {status === "loading" && (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                )}

                {status === "success" && (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path className="check-path" d="M4 12l5 5L20 6" />
                    </svg>
                    <span>Sent!</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/project-marketing.png"
              alt="Video editor working on a project"
              className="img-hover h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;