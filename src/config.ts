// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE =
  "Work With a Freelance Developer | React, Node.js & AWS ";
export const SITE_DESCRIPTION =
  "Expert freelance web developer specializing in React, Node.js, and AWS. I build fast, scalable websites and apps tailored to your business needs. Let's work together.";
export const TWITTER_HANDLE = "@imrannazirmir";
export const MY_NAME = "Imran Nazir";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
