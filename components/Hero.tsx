import { FaGithub } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#8850F8"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#8850F8"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#8850F8"
        />
      </div>

      <div className="h-screen w-full  bg-white dark:bg-grid-light_purple/[0.10] absolute top-0 left-0 flex items-center justify-center">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative mx-8 md:mx-0 my-20 z-10">
        <div className="max-w-[89vw] sm:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi Im Tiara, Currently Pursuing a Degree in Informatics Engineering at Brawijaya University"
            className="text-center text-[35px] sm:text-5xl"
          />
          <p className="text-center text-main_purple md:tracking-wider mb-4 text-lg sm:text-2xl">
            Every project tells a story - Let&apos;s explore mine.
          </p>

          <a href="https://github.com/tiaracalistaka">
            <MagicButton title="Github" icon={<FaGithub />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
