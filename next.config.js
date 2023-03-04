/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@stripe/firestore-stripe-payments"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        // port: "",
        // pathname: "",
      },
      {
        protocol: "https",
        hostname: "rb.gy",
        // port: "",
        // pathname: "",
      },
    ],
  },
};
