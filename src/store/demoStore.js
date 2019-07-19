import Vue from 'vue';
import Vuex from 'vuex';

// use - global로 사용할 수 있도록 추가.
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    price: 100
  },
  getters: {
    originalPrice(state) {
      return state.price;
    },
    doublePrice(state) {
      return state.price * 2;
    },
    triplePrice(state) {
      return state.price * 3;
    },
  }
})