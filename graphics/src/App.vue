<script setup>
  import Cbutton from "./components/Cbutton.vue";
  import {ref} from "vue";
  import {vue_game} from "./graph_traverse_return.ts";
  import {game_test} from "../story.ts";
  import { computed } from 'vue';

const backgroundStyle = computed(() => {
 
      let path;
  
  if (Array.isArray(gameData.value.images[currentNode.value])) {
    path = gameData.value.images[currentNode.value][imageIndex.value]; 
  } else {
    path = gameData.value.images[currentNode.value];
  }

 
  
  return {
    backgroundImage: `url("${path}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minwidth: "100vw"
  
  };
}); 
  const game = game_test
  const gameData = ref(game);
  const currentNode = ref(0);
  const gameActive = ref(false);
  const imageIndex = ref(0);

  const nextImage = () => {
      imageIndex.value++
  }

  const startGame = () => {
    currentNode.value = 0;
    gameActive.value = true;
  };
  const stopGame = () => {
    gameActive.value = false;
    currentNode.value = 0;
  }

const makeChoice = (index) => {
  // index is 0, 1, 2... from v-for
const result = vue_game(gameData.value, currentNode.value, index);  

    currentNode.value = result.nextNode;
    imageIndex.value = 0;
  
};
  
</script>

<template>
 
<div class="game-wrapper" :style="backgroundStyle">  
       <header class="game-header">
        <h1>SPEL</h1>
      </header>
    <main class="game-content">
    <div v-if="!gameActive" class="start-screen">
      <h2>Welcome to game!</h2>
      <Cbutton @click="startGame">Press to play!</Cbutton>
    </div>

    <div v-else class="story-screen">
      <div class content-area>
      <div class="story-card">
      <p>{{ gameData.story[currentNode][imageIndex] }}</p>
      </div>
      
    </div>
      <div class="options-outer-bar">
        <div v-if="imageIndex + 1 < game.images[currentNode].length">
        <Cbutton @click="nextImage">Next</Cbutton>
      </div>
      <div v-else>
      <div v-if="gameData.options[currentNode]?.length > 0" class="options-container">

      <div v-for="(option, i) in gameData.options[currentNode]" :key="i" class="option-item">
        <Cbutton @click="makeChoice(i)">
          <span class="gold-text"> </span>{{ option }}
        </Cbutton>
      </div>
    
    </div>
    <div v-else>
      <Cbutton @click="stopGame">OKEY</Cbutton>
      
    </div>
      </div>
      </div>
    </div>
  </main>
</div>
</template>
