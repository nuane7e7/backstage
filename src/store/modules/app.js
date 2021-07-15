
export default {
  state: () => ({
    isCollapse: false,
    
  }),
  mutations: {
    SET_ISCOLLAPSE: state => {
      state.isCollapse = !state.isCollapse;
    },
   
  },
  actions: {
    
  },
  getters: {
    isCollapse: state => state.isCollapse,
  
  }
};