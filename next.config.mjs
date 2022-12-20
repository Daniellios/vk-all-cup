// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    enableUndici: true,
    appDir: true,
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/inbox",
        permanent: true,
      },
    ];
  },
};
export default config;
