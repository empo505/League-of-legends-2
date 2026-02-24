<script setup lang="ts">
    import {ref} from 'vue'
    const titel = ref('Welcome to Game')
</script>

<template>
  <header>
    <span>{{ titel }}</span>
  </header>
</template>

<style scoped>
header span{
  font-size: xx-large;
  text-align: center;
  font-weight: bold;
  display: block;
  margin: 0 auto;
}
</style>