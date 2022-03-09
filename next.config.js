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
  },
};
