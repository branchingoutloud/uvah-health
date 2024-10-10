import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contents } from "@/utilities/constants/constants";

export default function Card2() {
  return (
    <div className="relative">
      <div className="flex h-24 w-28 z-40 bg-background rounded-bl-3xl absolute top-0 right-0">
        <div className="absolute top-0 right-0 h-20 w-24 rounded-2xl bg-primary"></div>
      </div>
      <Card className="w-full overflow-hidden rounded-3xl relative group py-4 shadow-none">
        <div className="m-12">
          <div className="absolute inset-0">
            <Image
              className="opacity-50"
              src={contents.bookSection.card1.image}
              alt="Mountain landscape"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
          <div
            className="absolute inset-0 bg-primary opacity-60 group-hover:opacity-70 transition-opacity duration-300"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <CardContent className="flex flex-col p-0 gap-2">
              <CardTitle className="text-4xl font-semibold text-white mb-3 w-[60%]">
                Consultation with our expert guidance
              </CardTitle>
              <p className="text-med text-offtext text-light line-clamp-2 mb-5">
                Experience the breathtaking beauty of mountain landscapes. This
                stunning view captures the essence of nature's grandeur,
                inviting you to explore and connect with the great outdoors.
              </p>
              <div className="">
                <Button
                  variant="secondary"
                  className="text-lg text-primary w-auto"
                >
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
