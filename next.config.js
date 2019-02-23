const withCss = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/
});

module.exports = withTypescript(
  withMDX(
    withCss({
      cssModules: true,
    pageExtensions: ["js", "jsx", "ts", "tsx"],
    target: "serverless",
  }))
);