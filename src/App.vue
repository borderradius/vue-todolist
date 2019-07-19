<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
    <button @click="clickBtn">popup message</button>
    <button @click="delayClickBtn">delay popup message</button>
    <hr>
    <Demo></Demo>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
import Demo from './components/Demo';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['message']),
    ...mapGetters(['reverseMessage']),
  },
  methods: {
    ...mapMutations(['clickBtn']),
    ...mapActions(['delayClickBtn']),
    authLogin() {},
    displayTable() {},
    //  clearAllItems() {
    //   localStorage. clear();
    //   this.$store.state.todoItems = [];
    // },
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    Demo,
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: none;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
