const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? {}
    : require("next-server/constants");

const config = {
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return config;
  }
  const withPlugins = require("next-compose-plugins");
  const withTypescript = require("@zeit/next-typescript");
  const withCss = require("@zeit/next-css");
  const withMDX = require("@zeit/next-mdx")();
  return withPlugins(
    [
      [withTypescript],
      [
        withMDX,
        {
          pageExtensions: ["js", "tsx", "jsx", "mdx"]
        }
      ],
      [withCss, { cssModules: true }]
    ],
    config
  );
};
