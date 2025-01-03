"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { awards } from "@/data";

const Awards = () => {
  return (
    <section id="awards">
      <h2 className="text-center text-3xl md:text-4xl mt-20 font-bold text-dark_purple">
        Awards <span className="text-main_purple"> and </span> Recognitions
      </h2>

      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={awards} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Awards;
