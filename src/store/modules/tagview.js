const basicRoute = [{
  title: "主页",
  path: "/home"
}]
/**保存标签页 */
const saveTags = data => {
  window.sessionStorage.setItem("tags", JSON.stringify(data))
}

export default {
  state: () => ({
    openTab: JSON.parse(window.sessionStorage.getItem("tags")) || basicRoute, // 所有打开的路由
    activeIndex: JSON.parse(window.sessionStorage.getItem("tagActive")) || '/home', // 高亮路由（当前页）
    excludeComponents: [],
  }),
  mutations: {
    /**设置选中页 */
    SET_ACTIVE: (state, path) => {
      state.activeIndex = path
      window.sessionStorage.setItem("tagActive", JSON.stringify(path))
    },
    /**添加标签 */
    ADD_TAGS: (state, tags) => {
      if (state.openTab.some(s => s.path === tags.path)) return
      state.openTab.push(tags)
      saveTags(state.openTab)
    },
    /**关闭其他 */
    CLOSE_OTHER_TAGS(state, tags) {
      if (state.openTab.length === 1) return
      state.openTab = state.openTab.filter(item => (item.path === tags.path || item.path === basicRoute[0].path))
      saveTags(state.openTab)
    },
    /**关闭全部 */
    CLOSE_ALL_TAGS(state) {
      let  newBasic= [...basicRoute]
      state.openTab =newBasic
      saveTags(newBasic)
    },
    /**删除单个 */
    DELECT_TAGS(state, index) {
      state.openTab.splice(index, 1)
      saveTags(state.openTab)
    },

  },
  actions: {
    close_all({
      commit
    }) {
      commit("CLOSE_ALL_TAGS")
    },
    delect_tags({
      commit
    }, index) {
      commit("DELECT_TAGS", index)
    },
    close_other_tags({
      commit
    }, tags) {
      commit("CLOSE_OTHER_TAGS", tags)
    },
    add_tags({
      commit
    }, tags) {
      commit("ADD_TAGS", tags)
    },
    // close_other_tags({commit},data ) {

    // }
  },
  getters: {
    openTab: state => state.openTab,
    activeIndex: state => state.activeIndex,
  }
};