// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Imran Nazir";
export const SITE_DESCRIPTION =
  "Freelance Web Develeoper for hire. I build websites and web applications using modern technologies like Javascript, Typescript, React, Next.js, Tailwind CSS, and Astro. AWS Developer Certified.";
export const TWITTER_HANDLE = "@imrannazirmir";
export const MY_NAME = "Imran Nazir";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
