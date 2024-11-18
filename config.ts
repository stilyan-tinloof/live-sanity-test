const baseUrlWithoutProtocol =
  process.env.VERCEL_ENV === "production"
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
    : process.env.VERCEL_BRANCH_URL;

const baseUrl = baseUrlWithoutProtocol
  ? `https://${baseUrlWithoutProtocol}`
  : "http://localhost:3000";

const config = {
  baseUrl: baseUrl,
  sanity: {
    apiVersion: "2023-06-21",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    studioUrl: "/studio",
    // Not exposed to the front-end, used solely by the server
    token: process.env.SANITY_READ_TOKEN || "",
  },
  siteName: "Sanity Live Test",
};

export default config;
