// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Imran Nazir";
export const SITE_DESCRIPTION =
  "Expert Freelance Web Developer For Hire | JavaScript, TypeScript, React & Next.js Specialist | AWS Certified Developer | Creating responsive, high-performance websites and web applications with modern technologies including Tailwind CSS and Astro. Transform your digital presence with professional custom web development services.";
export const TWITTER_HANDLE = "@imrannazirmir";
export const MY_NAME = "Imran Nazir";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
