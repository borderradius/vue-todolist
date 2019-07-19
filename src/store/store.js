import Vue from 'vue';
import Vuex from 'vuex';

// use - global로 사용할 수 있도록 추가.
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  // state값에 접근하는 방법
  // this.$store.state.xxx 접근을 쉽게.
  // computed 도 가능.
  getters: {
    // getNumber(state) {
    //   return state.num;
    // },
    // doubleNumber(state) {
    //   return state.num * 2;
    // }
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);  
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
  actions: {

  },
});