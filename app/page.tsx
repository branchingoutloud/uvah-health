import Articles from "./sections/Articles/articles";
import BookSection from "./sections/BookSection/bookSection";
import Experts from "./sections/Experts/experts";
import Hero from "./sections/Hero/hero";
import Services from "./sections/Services/services";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <Hero />
        <Services />
        <BookSection />
        <Articles />
        <Experts />
      </div>
    </div>
  );
}
