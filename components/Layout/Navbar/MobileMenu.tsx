import SideMenu from "@/components/Layout/SideMenu/SideMenu";
import { useSideMenu } from "@/lib/context/sidemenu-context";

import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { MenuItem } from "./Menu";

type MobileMenuProps = {};

const MobileMenu: React.FC<MobileMenuProps> = () => {
    const { hideSideMenu } = useSideMenu();

    return (
        <SideMenu onClose={hideSideMenu} isOpen={true}>
            <div className="absolute bg-white-100 w-[70%] h-screen z-10 top-0 px-8 py-5 ">
                <div className="flex justify-between">
                    <Link href="/" className="w-fit flex items-center space-x-2">
                        <Image
                            src={Logo.src}
                            alt=""
                            className="w-[3rem] md:w-[4rem] aspect-auto"
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>

                <div className="flex flex-col gap-5 mt-[100px] text-lg">
                    <MenuItem
                        link="/about"
                        subLinks={null}
                        text="About"
                        onclick={hideSideMenu}
                    />
                    <MenuItem
                        link="/category"
                        subLinks={null}
                        text="Category"
                        onclick={hideSideMenu}
                    />
                    <MenuItem
                        link="/events"
                        subLinks={null}
                        text="Events"
                        onclick={hideSideMenu}
                    />
                    <MenuItem
                        link="#"
                        subLinks={null}
                        text="Community"
                        onclick={hideSideMenu}
                    />
                    <MenuItem
                        link="/projects"
                        subLinks={null}
                        text="Projects"
                        onclick={hideSideMenu}
                    />
                    {/* <MenuItem link="/blog" subLinks={null} text="blog" /> */}
                </div>
                <div className="absolute bottom-3 w-full whitespace-nowrap text-xs">
                    <p>© Copyright 2022. VHDO</p>
                </div>
            </div>
        </SideMenu>
    );
};

export default MobileMenu;
