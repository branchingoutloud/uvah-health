import { contents } from "@/utilities/constants/constants";
import { colors } from "@/utilities/themes/colors";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-12 md:flex-row md:py-24">
        <div className="flex w-full flex-col items-center text-center md:mb-0 md:mb-16 md:w-1/2 md:w-[60%] md:items-start md:text-left lg:flex-grow">
          <h1 className="title-font mb-4 text-large font-semibold text-gray-900 md:text-exlarge">
            Transforming Women's <br />
            Health with <span className="text-primary">Care</span>
          </h1>
          <p className="mb-8 text-small leading-relaxed text-text md:text-med">
            {contents.hero.description}
          </p>
          <div className="relative mb-16">
            <Image
              className="object-cover object-center md:hidden md:translate-x-16"
              src={contents.hero.image}
              alt={contents.hero.title}
              width={1200}
              height={700}
            />
          </div>
          <div className="flex justify-center">
            <Link href="/book-appointment">
              <button
                className={`hover:bg-primary-focus inline-flex rounded-xl border-0 bg-primary px-8 py-4 text-sm text-white focus:outline-none md:text-med`}
              >
                {contents.hero.button}
              </button>
            </Link>
          </div>
        </div>
        <div className="relative flex w-[40%] items-center justify-center lg:max-w-2xl">
          <div className="absolute hidden md:block">
            <Image
              className="object-cover object-center md:translate-x-16"
              src={contents.hero.image}
              alt={contents.hero.title}
              width={450}
              height={250}
            />
            <Image
              className="-translate-x-12 -translate-y-12 object-cover object-center md:-translate-x-20"
              src={contents.hero.imagePopup}
              alt={contents.hero.title}
              width={350}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
