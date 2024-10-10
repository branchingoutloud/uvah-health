import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import CircularButton from "../../CircularButton/circularButton";
import { Card4Interface } from "@/utilities/commonInterface/commonInterface";

export default function Card4({
  title,
  description,
  image,
  footerText,
  link,
}: Card4Interface) {
  return (
    <Card className="w-md rounded-3xl bg-card p-3">
      <CardHeader>
        <div className="">
          <CardTitle className="text-small font-medium text-primary">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h- aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            height={100}
            width={356}
          />
        </div>
        <p className="line-clamp-2 text-small text-text">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="text-small font-medium">{footerText}</p>
        <CircularButton />
      </CardFooter>
    </Card>
  );
}
