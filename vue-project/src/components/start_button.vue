<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
    background: pink;
    color: black;
    border: none;
    cursor: pointer;
    text-align: center;
    font-size: large;
    display: block;
    margin: 0 auto;
}
</style>