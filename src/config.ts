import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://everone.co", // replace this with your deployed domain
  author: "Everone Graham",
  desc: "My personal courtyard on the internet.",
  title: "Everone Graham",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/everonegraham",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/everonegraham",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/everonegraham",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/everonegraham",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/everonegraham",
    linkTitle: `${SITE.title} on Pinterest`,
    active: true,
  },
];
