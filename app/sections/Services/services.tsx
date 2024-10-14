"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import Card1 from "../../components/Cards/Card1/card1";
import { contents } from "@/utilities/constants/constants";
import H2 from "@/app/components/Headings/H2/h2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store/store";
import { fetchServices } from "@/lib/store/slices/services/thunks";
import { addServices } from "@/lib/store/slices/services/reducer";
import { CardImage1 } from "@/public";
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
      <div className="container mx-auto px-5 py-16">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
          <div className="mb-12 flex justify-between text-center">
            <H2 className="">
              <span className="text-primary">UVAH Health</span> Service
            </H2>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="px-4 py-2 text-exsmall text-primary"
              >
                See More
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="-m-4 flex flex-wrap">
            {!loading || !error ? (
              services.map((service, index) => {
                if (index < 3) {
                  return (
                    <Card1
                      id={service.id}
                      key={service.id}
                      title={service.name}
                      description={service.serviceDes}
                      image={service.serviceImage}
                    />
                  );
                }
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <CollapsibleContent className="-m-4 flex flex-wrap">
            {!loading || !error ? (
              services.map((service, index) => {
                if (index >= 3) {
                  return (
                    <Card1
                      id={service.id}
                      key={service.id}
                      title={service.name}
                      description={service.serviceDes}
                      image={service.serviceImage}
                    />
                  );
                }
              })
            ) : (
              <p>Loading...</p>
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default Services;
