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
    GOOGLE_API_KEY: 'AIzaSyAOgRCpjCpoIfNeyDL5CxW2nVt0hD1iexo',
    POSTER_API_ACCESS_TOKEN: '198381:78956798666468f0d7fde56893b15402',
POSTER_API_URL: 'https://joinposter.com/api'
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
