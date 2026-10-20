// الحركة اللي بتطلع القسم مع السكرول
import Reveal from "./components/Reveal";

// الناف بار والهيرو: بيظهروا على طول، مش محتاجين حركة مع السكرول
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// الأقسام اللي هتتحرك مع السكرول
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Reasons from "./components/Reasons";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// المكون الرئيسي: بيجمع كل الأقسام بالترتيب
function App() {
  return (
    <main className="min-h-screen">
      {/* الناف بار ثابت فوق، مش محتاج حركة */}
      <Navbar />

      {/* الهيرو بيظهر أول ما الصفحة تفتح */}
      <Hero />

      {/* About عنده حركة الظهور جواه من قبل، فمش محتاج Reveal تاني */}
      <About />

      {/* باقي الأقسام: كل واحد بيطلع لما يدخل الشاشة */}
      <Reveal>
        <VisionMission />
      </Reveal>

      <Reveal>
        <Reasons />
      </Reveal>

      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <Portfolio />
      </Reveal>

      <Reveal>
        <Team />
      </Reveal>

      <Reveal>
        <Clients />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Reveal>
        <CTA />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}

export default App;