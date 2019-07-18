<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearAll">
            Clear All
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        clearAll() {
            this.$emit('clearAll');
        }
    },
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #FFF;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn {
    color: #e20303;
    display: block;
}
</style>
