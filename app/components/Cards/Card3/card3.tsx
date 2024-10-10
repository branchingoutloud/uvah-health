import Image from "next/image";
import { Card } from "@/components/ui/card";
import { contents } from "@/utilities/constants/constants";

export default function Card3() {
  return (
    <div className="relative w-full h-full">
      <div className="flex h-24 w-28 z-40 bg-background rounded-tr-3xl absolute bottom-0 left-0 border-t border-r border-primary">
        <div className="h-20 w-24 absolute bottom-0 left-0 rounded-2xl bg-primary"></div>
      </div>
      <Card className="w-md h-full overflow-hidden rounded-3xl relative group p-8 border-primary shadow-none">
        <div className="absolute inset-0">
          <Image
            className="z-30"
            src={contents.bookSection.card2.image1}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0">
          <Image
            className="object-cover"
            src={contents.bookSection.card2.image2}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </Card>
    </div>
  );
}
