import { ProfileFallback } from "@/public";
import { Card5Interface } from "@/utilities/commonInterface/commonInterface";
import Image from "next/image";

const Card5 = ({
  id,
  name,
  about,
  designation,
  qualification,
  image = ProfileFallback,
}: Card5Interface) => {
  return (
    <div className="">
      <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-br-3xl rounded-tl-3xl bg-card p-12 shadow-lg">
        <Image
          src={image}
          alt="Background image"
          layout="fill"
          className="object-center-bottom absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-end py-6 text-center text-text">
        <h2 className="mb-2 text-2xl font-bold">Card Title</h2>
        <p className="text-sm">Additional content can go here</p>
      </div>
    </div>
  );
};

export default Card5;
