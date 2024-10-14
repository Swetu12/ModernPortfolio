import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Clients = () => {
  const words = [
    {
      text: "Kind",
    },
    {
      text: "words",
    },
    {
      text: "from",
    },
    {
      text: "satisfied",
      className: "text-purple dark:text-purple",
    },
    {
      text: "clients.",
      className: "text-purple dark:text-purple",
    },
  ];
  return (
    <div className="py-20" id="testimonials">
      <div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="flex flex-col items-center max-lg:mt-10 lg:mt-20">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Clients;
