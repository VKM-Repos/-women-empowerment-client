import React, { useState } from "react";
// import { links } from "./links";
import Link from "next/link";
import { ChevronFilledIcon } from "@/components/Common/Icons/chevronFilled.icon";

type NavLinkProps = {
  links: any[];
};
const NavLinks = ({ links }: NavLinkProps) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            {link.submenu ? (
              <span
                className="py-7 flex gap-1 justify-between items-center md:pr-0 pr-5 "
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                <span className="">
                  {link.name} {link?.icon}
                </span>
                <ChevronFilledIcon
                  className={`transition-transform duration-150 ease-in-out group-hover:rotate-90 ${
                    link?.showArrow
                      ? "group-hover:text-btnWarning"
                      : "text-white-100 group-hover:text-white-100"
                  } `}
                />
              </span>
            ) : (
              <Link href={link.href || ""}>{link?.name}</Link>
            )}
            {link.submenu && (
              <div>
                <div
                  className={`absolute  group-hover:z-50 ${
                    link.sublinks[1]?.text == "Manage Organization"
                      ? "-ml-[80px] top-[80px]"
                      : link?.sublinks.length > 2
                      ? "-ml-[30px] top-[80px]"
                      : "-ml-[10px] top-16"
                  } hidden group-hover:md:block hover:md:block`}
                >
                  <div className="bg-white-100 border border-gray-500 rounded-md px-4 py-4 flex flex-col gap-3">
                    {link?.sublinks?.map((link: any) => (
                      <div className="flex">
                        <Link href={link?.href} className=" font-light text-sm">
                          <span className="flex gap-4">
                            <span className=""> {link?.icon}</span>
                            <span className="">{link?.text}</span>
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
