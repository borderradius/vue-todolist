import Vue from 'vue';
import Vuex from 'vuex';

// use - global로 사용할 수 있도록 추가.
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        num: 10
    },
    // state값에 접근하는 방법
    // this.$store.state.xxx 접근을 쉽게.
    // computed 도 가능.
    getters: {
        getNumber(state) {
            return state.num;
        },
        doubleNumber(state) {
            return state.num * 2;
        }
    }
    mutations: {

    },
    actions: {

    },
});