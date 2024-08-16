import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

type TAppTabs = {
  tabs: {
    label: string;
    value?: string;
  }[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

const AppTabs = ({ tabs, activeTab, setActiveTab }: TAppTabs) => {
  return (
    <AnimatePresence>
      <div className={`flex gap-2 md:gap-8 border-b border-b-[#EAECEE]`}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.value ? tab.value : tab.label)}
            className={`${
              activeTab === (tab.value ? tab.value : tab.label)
                ? "text-primary"
                : "hover:text-primary text-[#827E7E]"
            } relative px-2 py-1 md:py-1.5 text-xs md:text-sm font-medium transition`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === (tab.value ? tab.value : tab.label) && (
              <motion.span
                layoutId="bubble"
                className={`absolute inset-0 z-10 border-b md:border-b-2 border-b-primary`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
    </AnimatePresence>
  );
};
export default AppTabs;
