"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import Card1 from "../../components/Cards/Card1/card1";
import { contents } from "@/utilities/constants/constants";
import H2 from "@/app/components/Headings/H2/h2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store/store";
import { fetchServices } from "@/lib/store/slices/services/thunks";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Services = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { services, loading, error } = useSelector(
    (state: RootState) => state.ServiceReducer
  );
  console.log(services);

  const [isOpen, setIsOpen] = React.useState(false);

  // fetch from api endpoint and store here
  useEffect(() => {
    dispatch(fetchServices());
    // dispatch(addServices([...contents.serviceCards]));
  }, []);

  return (
    <section className="body-font">
      <div className="container mx-auto px-5 py-10 md:py-16">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
          <div className="mb-7 flex justify-center text-center md:mb-12 md:justify-between">
            <H2 className="">
              <span className="text-primary">UVAH Health</span> Service
            </H2>
            <CollapsibleTrigger className="hidden md:block" asChild>
              <Button
                variant="outline"
                className="px-4 py-2 text-exsmall text-primary"
              >
                {!isOpen ? "See More" : "See Less"}
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="flex flex-wrap">
            {!loading || !error ? (
              services.map((service, index) => {
                if (index < 3) {
                  return (
                    <Card1
                      id={service.id}
                      key={service.id}
                      title={service.name}
                      description={service.serviceDes}
                      image={service.serviceImage || ""}
                    />
                  );
                }
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <CollapsibleContent className="mb-4 flex flex-wrap">
            {!loading || !error ? (
              services.map((service, index) => {
                if (index >= 3) {
                  return (
                    <Card1
                      id={service.id}
                      key={service.id}
                      title={service.name}
                      description={service.serviceDes}
                      image={service.serviceImage || ""}
                    />
                  );
                }
              })
            ) : (
              <p>Loading...</p>
            )}
          </CollapsibleContent>
          <CollapsibleTrigger className="w-full md:hidden" asChild>
            <Button
              variant="outline"
              className="px-4 py-2 text-exsmall text-primary"
            >
              {!isOpen ? "See More" : "See Less"}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </div>
    </section>
  );
};

export default Services;
