<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer">
            <i class="fas fa-plus addBtn"
               @click="addTodo"></i>
        </span>

        <Modal v-if="showModal">
            <h3 slot="header">
                주의
                <i class="fas fa-times closeModalBtn"
                   @click="showModal = false"></i>
            </h3>
            <div slot="body">추가할 내용을 입력해주세요.</div>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default { 
    data () {
        return {
            newTodoItem: "",
            showModal: false,
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = "";
        },
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: #FFF;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputbox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: #FFF;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b083
}
</style>
