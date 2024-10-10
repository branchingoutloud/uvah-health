"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { VitaminsAndSupplements } from "@/public";
import React, { useEffect, useState } from "react";
import Card4 from "../Cards/Card4/card4";
import { addBlogs } from "@/lib/store/slices/blogs/reducer";
import { AppDispatch, RootState } from "@/lib/store/store";
import { contents } from "@/utilities/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/lib/store/slices/blogs/thunks";

const ArticleCarousel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: RootState) => state.BlogsReducer.blogs);
  console.log(blogs);

  // fetch from api endpoint and store here
  useEffect(() => {
    dispatch(fetchBlogs());
    // dispatch(addBlogs([...contents.articleSection.blogs]));
  }, []);

  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (api) {
      const intervalId = setInterval(() => {
        api.scrollNext();
      }, 3000); // Changed to 3000 milliseconds (3 seconds)

      return () => clearInterval(intervalId);
    }
  }, [api]);

  // const items = [
  //   {
  //     id: 1,
  //     title: "CARD HEADING 1",
  //     description:
  //       "Practical tips for living a healthy life, and preventive measures to avoid diseases.",
  //     image: VitaminsAndSupplements,
  //     footerText: "Dr. K.V.Bindra",
  //   },
  //   {
  //     id: 2,
  //     title: "CARD HEADING 2",
  //     description:
  //       "Practical tips for living a healthy life, and preventive measures to avoid diseases.",
  //     image: VitaminsAndSupplements,
  //     footerText: "Dr. K.V.Bindra",
  //   },
  //   {
  //     id: 3,
  //     title: "CARD HEADING 3",
  //     description:
  //       "Practical tips for living a healthy life, and preventive measures to avoid diseases.",
  //     image: VitaminsAndSupplements,
  //     footerText: "Dr. K.V.Bindra",
  //   },
  //   {
  //     id: 4,
  //     title: "CARD HEADING 4",
  //     description:
  //       "Practical tips for living a healthy life, and preventive measures to avoid diseases.",
  //     image: VitaminsAndSupplements,
  //     footerText: "Dr. K.V.Bindra",
  //   },
  // ];

  return (
    <Carousel
      setApi={setApi}
      className="mx-auto w-full max-w-xs"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {blogs.map((item) => (
          <CarouselItem key={item.id}>
            {/* <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{item.content}</span>
              </CardContent>
            </Card> */}
            <Card4
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.blogImage}
              description={item.blogText}
              footerText={item.author}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ArticleCarousel;
