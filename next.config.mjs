// Static export so the site can be hosted on GitHub Pages.
// basePath matches the repository name (site lives at /<user>.github.io/portfolio/).
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
};
export default nextConfig;
