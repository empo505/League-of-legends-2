
<template>
  <div>
    <p data-testid="count">Count: {{ count }}</p>
    <button data-testid="inc" @click="inc">+1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref<number>(0);
function inc() {
  count.value += 1;
}
</script>

<style scoped>
/* valfritt */
</style>
