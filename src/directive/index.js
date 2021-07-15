let files = require.context("./modules", false, /\.js$/);
export default {
  install: app => files.keys().forEach(key => {files(key).default(app)})
};