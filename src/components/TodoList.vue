<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems"                 v-bind:key="index" 
                class="shadow">
                <i class="fas fa-check checkBtn"
                   v-bind:class="{checkBtnCompleted: todoItem.completed}"
                   @click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">
                    {{ todoItem.item }}
                </span>   
                <span class="removeBtn" 
                      @click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoItems: [],
        }
    },
    // 인스턴스가 생성되자마자 실행되는 라이프사이클 훅
    // 생성되는 시점에 해당 사이클의 내용이 실행.
    created: function() {
        console.log(localStorage);
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                };
            }
        }
    },
    methods: {
        removeTodo(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        toggleComplete(todoItem, index) {
            console.log(todoItem, index);
            todoItem.completed = !todoItem.completed;
        },
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


</style>
