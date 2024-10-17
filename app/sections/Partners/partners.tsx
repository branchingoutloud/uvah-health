import H2 from "@/app/components/Headings/H2/h2";
import { PharmaLogo, PyrackLogo } from "@/public";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="mx-auto px-4 py-10 md:py-16">
      <H2>
        Our <span className="text-primary">Partners</span>
      </H2>
      <p className="mb-12 text-small text-text md:text-med">
        We are privileged to work alongside distinguished partners who share our
        vision for improving healthcare delivery. Their expertise and dedication
        play a vital role in our mission to provide comprehensive and innovative
        solutions.
      </p>
      <div className="flex flex-col items-center justify-center gap-7 space-x-16 md:flex-row">
        <div className="items- relative flex">
          <Image
            src={PyrackLogo}
            alt="Pyrack Logo"
            width={160}
            height={160}
            className="w-full object-contain"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={PharmaLogo}
            alt="PharmaAI Logo"
            width={160}
            height={160}
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
