<script setup>
  import Cbutton from "./components/Cbutton.vue";
  import {ref} from "vue";
  import {vue_game} from "./graph_traverse_return.ts";
  import {game_test} from "../story.ts";
  
  const gameData = ref(game_test);
  const currentNode = ref(0);
  const gameActive = ref(false);

  const startGame = () => {
    currentNode.value = 0;
    gameActive.value = true;
  };

const makeChoice = (index) => {
  // index is 0, 1, 2... from v-for
const result = vue_game(gameData.value, currentNode.value, index);  
  if (result.nextNode === null) {
    alert("The game is over!");
    gameActive.value = false;
  } else {
    // Update the ref to the new node number
    currentNode.value = result.nextNode;
  }
};
  
</script>

<template>
  <div class="game-wrapper">
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
      <p>{{ gameData.story[currentNode] }}</p>
      </div>
    </div>
      <div class="options-outer-bar">
      <div class="options-container">
      <div v-for="(option, i) in gameData.options[currentNode]" :key="i" class="option-item">
        <Cbutton @click="makeChoice(i)">
          <span class="gold-text"> </span>{{ option }}
        </Cbutton>
      </div>
    </div>
      </div>
    </div>
  </main>
</div>
</template>

