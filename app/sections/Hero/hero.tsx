import { contents } from "@/utilities/constants/constants";
import { colors } from "@/utilities/themes/colors";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:text-left lg:flex-grow">
          <h1 className="title-font mb-4 text-exlarge font-semibold text-gray-900">
            Transforming Women's <br />
            Health with <span className="text-primary">Care</span>
          </h1>
          <p className="mb-8 text-med leading-relaxed text-text">
            {contents.hero.description}
          </p>
          <div className="flex justify-center">
            <Link href="/book-appointment">
              <button
                className={`inline-flex rounded-xl border-0 bg-primary px-8 py-4 text-med text-white hover:bg-primary focus:outline-none`}
              >
                {contents.hero.button}
              </button>
            </Link>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center lg:max-w-2xl">
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
