import Card2 from "@/app/components/Cards/Card2/card2";
import Card3 from "@/app/components/Cards/Card3/card3";
import H2 from "@/app/components/Headings/H2/h2";
import React from "react";

const BookSection = () => {
  return (
    <section className="flex">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col w-full items-center">
          <H2 className="max-w-3xl text-center mb-12 font-semibold">
            Experience exceptional healthcare with our
            <span className="text-primary"> Professional doctors</span> through
            convenient appointment
            <span className="text-primary"> consultations.</span>
          </H2>
          <div className="flex justify-center gap-6 w-full">
            <div className="md:w-1/2">
              <Card2 />
            </div>
            <div className="md:w-1/2">
              <Card3 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
