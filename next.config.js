/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

// const withImages = require("next-images");
// module.exports = withImages({
//   webpack(config, options) {
//     return config;
//   },
// });
module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["ddangkongschool.com"],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
