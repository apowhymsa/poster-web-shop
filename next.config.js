/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "poster-shop.joinposter.com",
        port: "",
        pathname: "/upload/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    LIQPAY_PUBLIC: 'sandbox_i48537052364',
    LIQPAY_PRIVATE: 'sandbox_ChdqptB0uycfzyRv4L27m2A9ibndyJrKDxvDSTig',
    GOOGLE_API_KEY: 'AIzaSyAOgRCpjCpoIfNeyDL5CxW2nVt0hD1iexo'
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin allow-popups",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
