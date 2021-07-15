export default app => app.directive('loadmore', (el, binding) => {
  const SELECTWRAP_DOM = document.querySelector( '.el-select__popper .el-select-dropdown__wrap');
  SELECTWRAP_DOM.addEventListener('scroll', function () {
    const condition = this.scrollHeight - this.scrollTop <= this.clientHeight;
    if (condition) {
      binding.value();
    }
  });
})