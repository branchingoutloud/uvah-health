import { contents } from "@/utilities/constants/constants";
import { colors } from "@/utilities/themes/colors";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-exlarge mb-4 font-semibold text-gray-900">
            Transforming Women's <br />
            Health with <span className="text-primary">Care</span>
          </h1>
          <p className="mb-8 text-text text-med leading-relaxed">
            {contents.hero.description}
          </p>
          <div className="flex justify-center">
            <button
              className={`inline-flex text-white bg-primary border-0 py-4 px-8 focus:outline-none hover:bg-primary rounded-xl text-med`}
            >
              {contents.hero.button}
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center lg:max-w-2xl w-full ">
          <Image
            className="absolute object-cover object-center md:translate-x-16"
            src={contents.hero.image}
            alt={contents.hero.title}
            width={1200}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
