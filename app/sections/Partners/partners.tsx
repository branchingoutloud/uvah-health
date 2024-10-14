import H2 from "@/app/components/Headings/H2/h2";
import { PharmaLogo, PyrackLogo } from "@/public";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="mx-auto px-4 py-16">
      <H2>
        Our <span className="text-primary">Partners</span>
      </H2>
      <p className="mb-12 text-med text-text">
        We are privileged to work alongside distinguished partners who share our
        vision for improving healthcare delivery. Their expertise and dedication
        play a vital role in our mission to provide comprehensive and innovative
        solutions.
      </p>
      <div className="flex items-center justify-center space-x-16">
        <div className="relative flex h-40 w-40 items-center">
          <Image
            src={PyrackLogo}
            alt="Pyrack Logo"
            width={160}
            height={160}
            className="h-48 w-64 object-contain"
          />
        </div>
        <div className="relative h-40 w-40">
          <Image
            src={PharmaLogo}
            alt="PharmaAI Logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
