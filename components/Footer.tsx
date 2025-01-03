import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-main_purple">
          Ready to <span className="text-dark_purple">team up</span> and create
          impactful solutions?
        </h1>
        <p className="text-main_purple md:mt-5 lg:xl text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-row gap-4 mt-4">
          <a href="https://www.linkedin.com/in/tiara-calista/">
            <MagicButton
              title="LinkedIn"
              icon={<FaLinkedin />}
              position="right"
            />
          </a>
          <a href="https://www.instagram.com/tiara_atarian/">
            <MagicButton
              title="Instagram"
              icon={<FaInstagram />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center"></div>
    </footer>
  );
};

export default Footer;
