const postcssCustomMedia = require("postcss-custom-media");
const postcssMixins = require("postcss-mixins");
const postcssGlobalData = require("@csstools/postcss-global-data");

module.exports = {
  plugins: [
    postcssMixins(),
    postcssGlobalData({
      files: ["src/styles/utils/mixins/media-query.css"],
    }),
    postcssCustomMedia(),
  ],
};
