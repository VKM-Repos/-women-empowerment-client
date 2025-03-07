import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/Popover";
import Link from "next/link";
import OrgAvatar from "@/public/images/org-avatar.svg";
import { usePathname, useRouter } from "next/navigation";
import cn from "classnames";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/Tooltip";
import { Avatar, AvatarImage } from "@/components/UI/Avatar";
import Icon from "@/components/Common/Icons/Icon";
import { Separator } from "@/components/UI/Separator";
import CreateOrgFirstModal from "@/app/(main)/events/components/CreateOrgFirstModal";
import { useModal } from "@/lib/context/modal-context";
import LoginFirstModal from "@/app/(main)/events/components/LoginFirstModal";

export function OrganizationMenu({ user }: any) {
  const { showModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const organizationId = user?.organizationId;
  const isAdmin = user?.role?.includes("ADMIN");

  const handleCreateEvent = () => {
    if (!user) {
      showModal(<LoginFirstModal redirectURL={"/events/create"} />);
    } else if (!user.organizationId) {
      showModal(<CreateOrgFirstModal />);
    } else {
      router.push("/events/create");
    }
  };

  let organizationLinks;
  if (isAdmin) {
    organizationLinks = [
      {
        key: "manage-organization",
        label: "Manage Organization",
        link: "/organization/manage/dashboard",
        icon: "manage-org-icon",
      },
      {
        key: "view-organization",
        label: "View Organization",
        link: `/organization/${organizationId}`,
        icon: "view-org-icon",
      },
      {
        key: "add-event",
        label: "Add Event",
        link: "/events/create",
        icon: "add-event-icon",
        onClick: handleCreateEvent,
      },
    ];
  } else {
    organizationLinks = [
      {
        key: "add-organization",
        label: "Add Organization",
        link: "/organization/create",
        icon: "add-org-icon",
      },
      {
        key: "add-event",
        label: "Add Event",
        link: "/events/create",
        icon: "add-event-icon",
        onClick: handleCreateEvent,
      },
    ];
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="relative flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={OrgAvatar.src} alt={user?.name} />
                </Avatar>
              </span>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="text-primaryWhite bg-primary font-quickSand border-none"
            >
              <p>Organization</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="bg-primaryWhite absolute right-1/2 top-full w-[15rem] rounded shadow-md"
      >
        <ul className="font-quickSand text-gray-200 flex flex-col items-start justify-center gap-2">
          {organizationLinks.map(
            ({ key, label, link, icon, onClick }, index) => (
              <React.Fragment key={key}>
                <li className="flex items-center justify-center gap-4">
                  <Icon name={icon} />
                  {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                  <div
                    onClick={() => {
                      if (key === "add-event" && onClick) {
                        onClick();
                        setIsOpen(false);
                      } else {
                        setIsOpen(false);
                        router.push(link);
                      }
                    }}
                    className={cn(
                      "font-quickSand hover:text-btnWarning relative cursor-pointer text-sm font-medium transition duration-300 ease-in-out hover:no-underline",
                      { "text-btnWarning": currentPath.startsWith(link) }
                    )}
                  >
                    {label}
                  </div>
                </li>
                {index !== organizationLinks.length - 1 && <Separator />}
              </React.Fragment>
            )
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
