export const siteNavigation = {
  topNavigation: {
    about: {
      label: 'About',
      link: '/about',
    },
    categories: {
      label: 'Category',
      link: '/category',
    },
    events: {
      label: 'Events',
      link: '/events',
    },
    community: {
      label: 'Community',
      items: {
        discussions: {
          label: 'Discussions',
          link: '/discussions',
        },
        support: {
          label: 'Support',
          link: '/support',
        },
      },
    },
    projects: {
      label: 'Projects',
      link: '/projects',
    },
    blog: {
      label: 'Blog',
      link: '/blog',
    },
  },
  footerLinks: [
    {
      link: 'https://',
      text: '',
    },
  ],
  socialLinks: [
    {
      icon: 'twitter',
      link: 'https://twitter.com/',
      alt: 'Twitter',
    },
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/company/',
      alt: 'LinkedIn',
    },
  ],
  organizationMenu: {
    // render view org and add org based on roles [user.roles === ADMIN | USER], hide view org if role is user,
    'view-organization': {
      label: 'View Organization',
      link: '/', // dynamic url - /organization/${user?.organizationId}
      icon: 'view-org-icon',
      alt: 'view-org',
    },
    'add-organization': {
      label: 'Add Organization',
      link: '/organization/create',
      icon: 'add-org-icon',
      alt: 'add-org',
    },

    // only show this if role has changed from user to admin
    'manage-organization': {
      label: 'Manage Organization',
      link: '/organization/manage/dashboard',
      icon: 'manage-org-icon',
      alt: 'manage-org',
    },
    //the first three are dependent on roles
    'add-event': {
      label: 'Add event',
      link: '/events/create',
      icon: 'add-event-icon',
      alt: 'add-event',
    },
  },
  profileNav: {
    profile: {
      label: 'Profile',
      link: '/', // a dynamic url
      icon: 'profile-icon',
      alt: 'profile',
    },
    // notification: {
    //   label: 'Notification',
    //   link: '/notification',
    //   icon: 'notification-icon',
    //   alt: 'notification',
    // },
    logout: {
      label: 'Logout',
      link: '/account/logout',
      icon: 'logout-icon',
      alt: 'logout',
    },
  },
};
