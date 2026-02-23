<script setup lang="ts">
import { ref } from 'vue'
import start_button from './components/start_button.vue'

const count = ref(0)

</script>

<template>
    <div>
      <h1>Welcome to Game</h1>
      <start_button @click="count++">
        Click to start the game
      </start_button>
      <div>
        {{ count }}
      </div>
    </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-weight: bold;
  display: block;
  margin: 0 auto;
}
</style>
