<script setup lang="ts">
    import {ref} from 'vue'
    import Sbutton from '@/components/start-button.vue'

    const name = ref("")
    const gameStarted = ref(false)

    const startGame = () => {
        if (name.value.length > 0) {
            gameStarted.value = true
        }
    }
</script>

<template>
  <main class="center-container">
    <div class="content">
        <div v-if="!gameStarted">
            <input v-model.lazy="name" type="text" placeholder="Your name"> 
            <button @click="startGame">START GAME</button>           
        </div>
    
        <div v-else>
            <h2>Good luck, {{ name }}!</h2>
            <p>Game is loading...</p>
            <button @click="gameStarted = false">Go back</button>
        </div>
    </div>
  </main>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Skapar jämnt avstånd mellan input, text och knapp */
  text-align: center;
  padding: 2rem;
  background-color: wheat;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

input[type="text"] {
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Effekt när man klickar i rutan */
input[type="text"]:focus {
  border-color: #42b883; /* Vues signatur-grön */
  box-shadow: 0 0 8px rgba(66, 184, 131, 0.2);
}

p {
  font-family: sans-serif;
  color: #333;
  font-weight: 500;
}
</style>