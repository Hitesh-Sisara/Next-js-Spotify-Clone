const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    domains: ["uayiihecxwhbvwenbytf.supabase.co"],
  },
});

module.exports = nextConfig;
