const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/BRAVO68WEB/another-quote-webapp/gh-pages/' : '',
};

module.exports = nextConfig;
