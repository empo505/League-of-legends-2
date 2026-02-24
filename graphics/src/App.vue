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
const result = vue_game(gameData.value, currentNode.value, index + 1);  
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
  <h1 style="color: red; background: black;">LEAGUE PF LEGENDS 2</h1>
   <div>
    <div v-if="!gameActive">
      <h1>Welcome to the game!</h1>
      <Cbutton @click="startGame">Start Game</Cbutton>
    </div>

    <div v-else>
      <p>{{ gameData.story[currentNode] }}</p>

      <div v-for="(option, i) in gameData.options[currentNode]" :key="i">
        <Cbutton @click="makeChoice(i)">
          Option {{ i + 1 }}: {{ option }}
        </Cbutton>
      </div>
    </div>
  </div> 
</template>

