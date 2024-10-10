import ArticleCarousel from "@/app/components/ArticleCarousel/articleCarousel";
import H2 from "@/app/components/Headings/H2/h2";
import { Button } from "@/components/ui/button";

const Articles = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="container max-w-5xl px-5">
        <div className="flex w-full">
          <div className="flex w-[60%] flex-col gap-3">
            <div className="flex flex-col justify-center px-24">
              <div className="flex flex-col gap-2">
                <H2 className={"font-medium"}>
                  Read top <span className="text-primary">articles</span> from
                  health experts
                </H2>
                <p className="mb-8 text-med leading-relaxed text-text">
                  Get the latest health articles from our experts. We cover a
                  wide range of topics from
                  <br />
                </p>
              </div>
              <div className="">
                <Button className="text-small text-white">
                  See all articles
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-[40%]">
            <ArticleCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
