import svgIcon from "./svg-icon";

/**引入所有图标 */
const req = require.context("./svg", false, /\.svg$/);
/**注入图片 */
const requireAll = reqContext => reqContext.keys().map(reqContext);
requireAll(req);

export default {
  install: app => app.component(svgIcon.name, svgIcon)
  // install(Vue) {
  //     Vue.component(svgIcon.name, svgIcon)
  // }
};
