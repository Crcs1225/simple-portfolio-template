import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isDarkMode: false
    };
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    }
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit('toggleDarkMode');
    }
  },
  getters: {
    isDarkMode: state => state.isDarkMode
  }
});

export default store;