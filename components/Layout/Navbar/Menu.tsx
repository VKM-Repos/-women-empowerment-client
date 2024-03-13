"use-client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronFilledIcon } from "@/components/Common/Icons/chevronFilled.icon";
import { useAppContext } from "@/lib/context/app-context";
import CreateOrgFirstModal from "@/app/(main)/events/components/CreateOrgFirstModal";
import { useModal } from "@/lib/context/modal-context";
type SubLink = {
  icon?: React.ReactNode | null;
  text: string;
  href: string;
  type: string | null;
};

type MenuItemProps = {
  link: string;
  text: string;
  subLinks?: SubLink[] | null;
  icon?: React.ReactNode | null;
  showChevron?: boolean;
  onclick?: () => void;
};

type SubMenuProps = {
  subLinks: SubLink[];
  isOpen: boolean;
  howChevron?: boolean;
};

export const MenuContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <nav className="flex justify-center items-center space-x-8 px-8 py-6 capitalize">
      {children}
    </nav>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({
  link,
  subLinks,
  text,
  icon,
  showChevron = true,
  onclick
}) => {
  const pathname = usePathname();
  const isLinkActive = pathname.startsWith(link);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleShowMenu = () => {
    setIsSubMenuOpen((prevState) => !prevState);
  };
  console.log(link);

  return (
    <div>
      <div className="relative" onClick={handleShowMenu}>
        {link != "" ? (
          <Link
            href={link}
            className={`flex items-center space-x-2 ${isLinkActive ? "text-btnWarning " : "text-primaryBlack"
              }`}
            onClick={onclick}
          >
            <span className={`${icon ? "" : "link"}`}>
              {text} {icon}
            </span>
            {subLinks && showChevron && (
              <ChevronFilledIcon
                className={`transition-transform duration-150 ease-in-out ${isSubMenuOpen ? "rotate-90 text-btnWarning" : ""
                  }`}
              />
            )}
          </Link>
        ) : (
          <button
            className={`flex items-center space-x-2 ${isLinkActive ? "text-btnWarning " : "text-primaryBlack"
              }`}
          >
            <span className={`${icon ? "" : "link"}`}>
              {text} {icon}
            </span>
            {subLinks && showChevron && (
              <ChevronFilledIcon
                className={`transition-transform duration-150 ease-in-out ${isSubMenuOpen ? "rotate-90 text-btnWarning" : ""
                  }`}
              />
            )}
          </button>
        )}
        {subLinks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isSubMenuOpen ? 1 : 0 }}
          >
            <SubMenu subLinks={subLinks} isOpen={isSubMenuOpen} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const SubMenu: React.FC<SubMenuProps> = ({ subLinks, isOpen }) => {
  const pathname = usePathname();
  const { showModal } = useModal();
  const hnadleBlocker = () => {
    showModal(<CreateOrgFirstModal />);
  };
  return (
    <div>
      <div
        className={`absolute top-[calc(100%_+_1rem)] ${subLinks.length == 2 ? "left-[50%]" : ""
          } transform -translate-x-1/2 ${isOpen ? "" : "hidden"}`}
      >
        <div className="bg-primaryWhite backdrop-blur-sm rounded-lg overflow-hidden border border-gray-400 shadow-xl p-4 flex flex-col space-y-4">
          {subLinks.map((item, index) => {
            const isLinkActive = pathname.startsWith(item.text);
            console.log(item.type);
            if (item?.type == "button")
              return (
                <div
                  onClick={hnadleBlocker}
                  className={`flex items-center cursor-pointer px-1 ${item.text == "Manage Organization" ? "w-[190px]" : ""
                    }  ${isLinkActive ? "text-btnWarning " : "text-primaryBlack"
                    }`}
                  key={item.text}
                >
                  <span
                    className={`${subLinks.length == 2 ? "" : "flex-[0.2]"}`}
                  >
                    {item.icon}
                  </span>{" "}
                  <span className="text-sm flex-[1]">{item.text}</span>
                </div>
              );
            else
              return (
                <Link
                  className={`flex items-center px-1 ${item.text == "Manage Organization" ? "w-[190px]" : ""
                    }  ${isLinkActive ? "text-btnWarning " : "text-primaryBlack"
                    }`}
                  key={item.href}
                  href={item.href}
                >
                  <span
                    className={`${subLinks.length == 2 ? "" : "flex-[0.2]"}`}
                  >
                    {item.icon}
                  </span>{" "}
                  <span className="text-sm flex-[1]">{item.text}</span>
                </Link>
              );
          })}
        </div>
      </div>
    </div>
  );
};
