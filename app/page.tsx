import Intro from "../components/intro";
import About from "../components/about";
import Contact from "../components/contact";
export default function Landing() {
  return (
    <main id='home' className=" flex flex-col items-center pt-10 md:pt-10 px-4">
      <Intro/>
      <About/>
      <Contact/>
    </main>
  );
}
