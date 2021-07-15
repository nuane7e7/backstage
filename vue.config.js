const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  publicPath: process.env.VUE_APP_CDN,
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        include: ["./src/icons"],
      });
    config.resolve.alias.set("@", resolve("src"))
      .set("api", resolve("src/api"))
      .set("cpt", resolve("src/components"))
      .set("u", resolve("src/utils"))
  },
  configureWebpack: {
    devtool: 'source-map'
    },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/css/global.scss";`,
      },
    },
  },
};