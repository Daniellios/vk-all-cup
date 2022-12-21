// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   NEXT_PUBLIC_SUPABASE_URL: "https://ctccqwbourkyucxgqccn.supabase.co",
  //   NEXT_PUBLIC_SUPABASE_KEY:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL2FyY2hpdmUvQXJjaGl2ZS5qc29uIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcxNjA2NjgyLCJleHAiOjE5ODY5NjY2ODJ9.JwrHUAJSp_RRjgu8r0Zz8XYO2Ae7x9HvnNflyimtD2A",
  // },

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
