const strName = "token"
export default {
  state: () => ({
    token: null || window.sessionStorage.getItem(strName)
  }),
  mutations: {
    SET_TOKEN: (state, token) => {
      if (token) {
        window.sessionStorage.setItem(strName, JSON.stringify(token));
        state.token = token;
      } else {
        state.token = null;
        window.sessionStorage.removeItem(strName)
      }

    }
  },
  actions: {},
  getters: {
    token: state => state.token
  }
};