import ArticleCarousel from "@/app/components/ArticleCarousel/articleCarousel";
import H2 from "@/app/components/Headings/H2/h2";
import { Button } from "@/components/ui/button";

const Articles = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="container max-w-5xl px-5">
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex w-full flex-col gap-3 md:w-[60%]">
            <div className="flex flex-col justify-center px-10 md:px-24">
              <div className="flex flex-col gap-2">
                <H2 className="font-medium">
                  Read top <span className="text-primary">articles</span> from
                  health experts
                </H2>
                <p className="mb-8 text-small leading-relaxed text-text md:text-med">
                  Get the latest health articles from our experts. We cover a
                  wide range of topics from
                  <br />
                </p>
              </div>
              <div className="hidden md:block">
                <Button className="text-small text-white">
                  See all articles
                </Button>
              </div>
            </div>
          </div>
          <div className="mb-7 flex w-full md:w-[40%]">
            <ArticleCarousel />
          </div>
          <div className="w-full md:hidden">
            <Button className="w-full text-small text-white">
              See all articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
