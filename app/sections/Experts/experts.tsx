import Card5 from "@/app/components/Cards/Card5/card5";
import H2 from "@/app/components/Headings/H2/h2";
import { contents } from "@/utilities/constants/constants";

const Experts = () => {
  return (
    <section className="">
      <div className="container mx-auto px-5 py-10 md:py-16">
        <div className="flex flex-col">
          <H2>
            Meet the <span className="text-primary">Experts</span> Behind Your
            Care
          </H2>
          <p className="mb-8 text-small leading-relaxed text-text md:text-med">
            Our expert team is dedicated to delivering compassionate,
            personalized care, supporting every aspect of women&apos;s health
            and wellness, from prevention to advanced treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-12 md:grid-cols-4 md:px-0">
          {contents.experts.experts.map((expert) => (
            <Card5
              key={expert.id}
              id={expert.id}
              name={expert.name}
              designation={expert.designation}
              qualification={expert.qualification}
              image={expert.image}
              about={expert.about}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
