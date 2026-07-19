import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages等の静的ホスティング向けに全ページをHTMLとして書き出す
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
