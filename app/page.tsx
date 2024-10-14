import Articles from "./sections/Articles/articles";
import BookSection from "./sections/BookSection/bookSection";
import ContactForm from "./sections/ContactUs/contactUs";
import Experts from "./sections/Experts/experts";
import Hero from "./sections/Hero/hero";
import Partners from "./sections/Partners/partners";
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
        <Partners />
        <ContactForm />
      </div>
    </div>
  );
}
