const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");
const withMDX = require("@zeit/next-mdx")();

module.exports = withPlugins([
  [withTypescript],
  [
    withMDX,
    {
      pageExtensions: ["js","tsx", "jsx", "mdx"]
    }
  ],
  [withCss, { cssModules: true }]
]);
