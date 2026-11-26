import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
