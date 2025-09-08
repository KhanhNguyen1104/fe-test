import { strapi } from "@strapi/client";

const strapiClient = strapi({
  baseURL: process.env.BASE_URL || "http://localhost:1337",
});

export default strapiClient;
