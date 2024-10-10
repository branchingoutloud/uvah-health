import { Card1Interface } from "@/utilities/commonInterface/commonInterface";

import Image from "next/image";
import React from "react";
import CircularButton from "../../CircularButton/circularButton";

const Card1 = ({ id, title, description, image }: Card1Interface) => {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="relative flex h-full flex-col justify-between rounded-3xl bg-card bg-opacity-75 px-7 py-8">
        <div className="mb-4 flex flex-col">
          <h3 className="title-font text-med2 font-medium text-gray-900">
            {title}
          </h3>
          <p className="line-clamp-2 text-exsmall leading-relaxed text-text">
            {description}
          </p>
        </div>
        <Image
          className="h-28 rounded-2xl object-cover object-center"
          src={image}
          alt="cardImage"
          width={600}
          height={400}
        />
        <CircularButton variant="primary" />
      </div>
    </div>
  );
};

export default Card1;
