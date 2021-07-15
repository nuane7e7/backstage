import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElTag,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElSelect,
  ElOption,
} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss'
const app = createApp(App);
app.config.productionTip = false;



const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElSubmenu,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElTag,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElSelect,
  ElOption,
]
const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]
components.forEach(component => {
  app.component(component.name, component)
})
plugins.forEach(plugin => {
  app.use(plugin)
})
/**svg组件 */
import svgIcon from "./icons";
app.use(svgIcon);
/**自定义指令 */
import directive from "./directive";
app.use(directive);
// app.directive('demo', (el, binding) => {
//   console.log(binding.value.color) // => "white"
//   // console.log(binding.value.text) // => "hello!"
// })
// app.directive('loadmore', (el, binding)=> {
//     const SELECTWRAP_DOM = document.querySelector(
//       '.el-select__popper .el-select-dropdown__wrap'
//     );
//     SELECTWRAP_DOM.addEventListener('scroll', function () {
//       const condition = this.scrollHeight - this.scrollTop <= this.clientHeight;
//       if (condition) {
//         binding.value();
//       }
//     },true);
//   }
// )

/**element 组件注册 */
/* Automatically register components under Button, such as Button.Group */
app
  .use(store)
  .use(router)
  .mount("#app");