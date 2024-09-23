import Intro from "../../components/intro";
import About from "../../components/about";
import Contact from "../../components/contact";

export default function Landing() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro/>
      <About/>
      <Contact/>
    </main>
  );
}
