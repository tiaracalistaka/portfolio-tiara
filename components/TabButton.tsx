import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
};

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active ? "text-dark_purple" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="focus:outline-none">
      <p
        className={`mr-3 font-semibold hover:text-main_purple ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-main_purple mt-1 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
