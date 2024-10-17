import Image from "next/image";
import { Card } from "@/components/ui/card";
import { contents } from "@/utilities/constants/constants";

export default function Card3() {
  return (
    <div className="relative h-80 w-full md:h-full">
      <div className="absolute bottom-0 left-0 z-40 flex h-24 w-28 rounded-tr-3xl border-r border-t border-primary bg-background">
        <div className="absolute bottom-0 left-0 h-20 w-24 rounded-2xl bg-primary"></div>
      </div>
      <Card className="w-md group relative h-full overflow-hidden rounded-3xl border-primary p-8 shadow-none">
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
