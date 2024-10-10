import { Button } from "@/components/ui/button";
import { ArrowOutward } from "@/public";
import { CircularButtonInterface } from "@/utilities/commonInterface/commonInterface";

const CircularButton = ({ variant }: CircularButtonInterface) => {
  return (
    <Button
      variant={"ghost"}
      className={`${
        variant === "primary" ? "absolute" : ""
      } rounded-full bg-primary hover:bg-primary-hover outline outline-secondary outline-4 p-5 h-0 bottom-4 right-4`}
    >
      <ArrowOutward className="absolute" />
    </Button>
  );
};

export default CircularButton;
