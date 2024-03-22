export const links = [
  {
    name: "About",
    submenu: false,
    href: "/about",
  },
  {
    name: "Category",
    href: "/category",
    submenu: false,
  },
  {
    name: "Event",
    href: "/events",
    submenu: false,
  },
  {
    name: "Community",
    href: "/community",
    submenu: true,
    sublinks: [
      { type: "link", text: "Discussions", href: "/discussions" },
      { type: "link", text: "Support", href: "/support" },
    ],
  },
  {
    name: "Projects",
    submenu: false,
  },
  {
    name: "Blog",
    submenu: false,
  },
];
