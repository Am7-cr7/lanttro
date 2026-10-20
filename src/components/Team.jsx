// أيقونات السوشيال اللي عملناها بـ SVG
import { Instagram, Twitter, Linkedin } from "./SocialIcons";

// بيانات الفريق
const team = [
  { name: "John Smith", role: "Co-Founder & CEO", image: "/images/team-john.png" },
  { name: "Sarah Adams", role: "Head of Design", image: "/images/team-sarah.png" },
  { name: "Michael Williams", role: "Project Manager", image: "/images/team-michael.png" },
  { name: "Emily Johnson", role: "Lead Web Developer", image: "/images/team-emily.png" },
  { name: "Jessica Lee", role: "UX/UI Designer", image: "/images/team-jessica.png" },
  { name: "Robert Johnson", role: "Lead Mobile App Developer", image: "/images/team-robert.png" },
  { name: "Emma Taylor", role: "Digital Marketer", image: "/images/team-emma.png" },
  { name: "Olivia Martin", role: "Content Specialist", image: "/images/team-olivia.png" },
];

// كارت عضو واحد
function TeamCard({ member }) {
  return (
    <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0b] px-6 py-10 text-center transition duration-500 hover:-translate-y-2 hover:border-neutral-600 hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)]">

      {/* الجريداينت الرمادي من ورا الكارت */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neutral-600/30 via-neutral-800/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* الخلفية المنقطة */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2b2b2b_1px,transparent_1px)] bg-[length:14px_14px] opacity-60" />

      <div className="relative z-10 flex flex-col items-center">

        {/* إطار الصورة */}
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-neutral-800 transition duration-500 group-hover:scale-105 group-hover:border-neutral-500">
          <img
            src={member.image}
            alt={member.name}
            className="h-24 w-24 rounded-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
          />
        </div>

        <h3 className="mt-6 text-lg font-semibold">{member.name}</h3>

        <span className="mt-4 rounded-full border border-neutral-700 px-5 py-2 text-sm text-neutral-300">
          {member.role}
        </span>

        {/* أيقونات السوشيال: خط بيتمدد تحت كل واحدة */}
        <div className="mt-6 flex gap-3">
          <a href="#" className="btn-underline rounded-full bg-neutral-900 p-3">
            <Instagram size={16} />
          </a>
          <a href="#" className="btn-underline rounded-full bg-neutral-900 p-3">
            <Twitter size={16} />
          </a>
          <a href="#" className="btn-underline rounded-full bg-neutral-900 p-3">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

// Team: قسم فريق العمل
function Team() {
  return (
    <section id="our-team" className="w-full bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <h2 className="text-center text-4xl font-semibold md:text-5xl">
          <span className="text-neutral-500">Our </span>
          <span className="text-white">Team</span>
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;