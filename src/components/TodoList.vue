<template>
	<transition-group name="list" tag="ul">
		<li 
			v-for="(todoItem, index) in this.storedTodoItems"                                v-bind:key="todoItem.item" 
			class="shadow">
			<i class="fas fa-check checkBtn"
				v-bind:class="{checkBtnCompleted: todoItem.completed}"
				@click="toggleOneItem({todoItem, index})"></i>
			<span v-bind:class="{textCompleted: todoItem.completed}">
				{{ todoItem.item }}
			</span>   
			<span class="removeBtn" 
				@click="removeOneItem({todoItem, index})">
				<i class="fas fa-trash-alt"></i>
			</span>
		</li>
	</transition-group>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';	

export default {
	computed: {
		...mapGetters(['storedTodoItems'])
	},
	methods: {
		// 첫번째 방법, 헬퍼는 자동으로 인자까지 넘겨준다. 인자를 객체로 넘기고 있으므로
		// 템플릿에서도 {todoItem, index} 처럼 객체로 넘겨야함.
		// ...mapMutations({
		// 	removeTodo: 'removeOneItem'
		// }),
		// 두번쨰 방법
		...mapMutations([
			'removeOneItem',
			'toggleOneItem',
		]), 
		// removeTodo(todoItem, index) {
		// 	this.$store.commit('removeOneItem', {todoItem, index});
		// },
		// toggleComplete(todoItem, index) {
		// 	this.$store.commit('toggleOneItem', {todoItem, index});
		// },
	},
}
</script>

<style scoped>
ul {
	list-style-type: none;
	padding-left: 0px;
	margin-top: 0;
	text-align: left;
}
li {
	display: flex;
	min-height: 50px;
	height: 50px;
	line-height: 50px;
	margin: 0.5rem 0;
	padding: 0 0.9rem;
	background: #FFF;
	border-radius: 5px;
}
.removeBtn {
	margin-left: auto;
	color: #de4343;
}
.checkBtn {
	line-height: 45px;
	color: #62acde;
	margin-right: 5px;
}
.checkBtnCompleted {
	color: #b3adad;
}
.textCompleted {
	text-decoration: line-through;
	color: #b3adad;
}
/* 트랜지션 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
