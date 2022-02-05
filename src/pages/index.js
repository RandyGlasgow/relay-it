import About from "@/components/home/About";
import Backend from "@/components/home/Backend";
import Frontend from "@/components/home/Frontend";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Backend />
      <Frontend />
    </div>
  );
}
