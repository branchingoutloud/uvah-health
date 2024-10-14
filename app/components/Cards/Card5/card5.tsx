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
      <div
        style={{
          borderTopLeftRadius: "3.5rem",
          borderBottomRightRadius: "3.5rem",
        }}
        className="relative flex aspect-[3/4] w-full max-w-sm overflow-hidden rounded-br-3xl border border-card bg-card pt-12 shadow-lg"
      >
        <Image
          src={image}
          alt={about}
          height={200}
          width={300}
          className="inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-end py-6 text-center text-text">
        <h2 className="text-lg font-medium text-bodytext">{name}</h2>
        <p className="text-sm">{designation}</p>
        <p className="text-sm">{qualification}</p>
      </div>
    </div>
  );
};

export default Card5;
