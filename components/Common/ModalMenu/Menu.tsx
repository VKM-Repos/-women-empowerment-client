import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ShareDropdown from "@/components/LandingPage/ShareDropDown";

interface MenuProps {
  menuItems: any[];
  showMenu: boolean;
}

export const Menu: React.FC<MenuProps> = ({ menuItems, showMenu }) => {
  if (!showMenu) {
    return null;
  }
  console.log(menuItems);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showMenu ? 1 : 0 }}
    >
      <div
        className={`absolute ${
          menuItems.length > 2 ? "-right-5" : "right-[2%]"
        } mt-1 transform -translate-x-1/2`}
      >
        <div className="bg-primaryWhite px-5 py-2 rounded-md text-sm cursor-pointer">
          {menuItems?.map((item, index) => {
            if (item?.title == "Share") {
              return (
                <button className="flex items-center -ml-1 text-primary">
                  <ShareDropdown
                    text={""}
                    urlToShare={`https://womenhub.org/organization/${item?.organizationId}`}
                  />
                  Share
                </button>
              );
            } else {
              return (
                <Link
                  key={index}
                  className={`flex items-center gap-2 text-primary py-3 px-2${
                    index !== menuItems.length - 1
                      ? " border-b border-stone-800 border-solid border-opacity-10"
                      : ""
                  }`}
                  href={`${item.link}`}
                  target={item?.blank ? "_blank" : ""}
                >
                  <span>{item.icon}</span> {item.title}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </motion.div>
  );
};
