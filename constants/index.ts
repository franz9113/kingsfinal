export const NAV_LINKS = [
    { href: "/", key: "home", label: "Home" },
    {
      href: "",
      key: "how_hilink_work",
      label: "Products",
      dropdown: [
        {href:"/product/bencocky", key: "bencocky", label: "Ben Cocky" },
        {href:"/product/limvodka", key: "limvodka", label: "Lim Vodka" },
        {href:"/product/loyalbandit", key: "loyalbandit", label: "Loyal Bandit" },
      ],
    },
    { href: "/about", key: "about", label: "About" },
    { href: "/contact", key: "contact", label: "Contact" },
  ];
  

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    // "/facebook.svg",
    // "/instagram.svg",
    // "/twitter.svg",
    // "/youtube.svg",
    // "/wordpress.svg",
  ],
};
