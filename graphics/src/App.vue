<script setup>
  import Cbutton from "./components/Cbutton.vue";
  import {ref, computed} from "vue";
  import {vue_game} from "./graph_traverse_return.ts";
  import {game_test} from "../story.ts";
  
  const gameData = ref(game_test);
  const currentNode = ref(0);
  const gameActive = ref(false);
  //const backgroundImage = ref("https://img.craftpix.net/2023/04/Free-Nature-Backgrounds-Pixel-Art2.png")

const currentBg = computed(() => {
  const img = gameData.value.images[currentNode.value];
  if (!img) {
    // Om bilden saknas, använd en stabil testbild så vi ser att CSS:en funkar
    return "https://via.placeholder.com/1920x1080?text=Bild+Saknas";
  }
  return img;
});

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
  <div :style="{ 
      backgroundImage: 'url(' + currentBg + ')', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100vw'
    }">
  <h1 style="color: red; background: black;">LEAGUE OF LEGENDS 2</h1>
   <div>
    <div v-if="!gameActive">
      <h1>Welcome to the game!</h1>
      <Cbutton @click="startGame">Start Game</Cbutton>
    </div>

    <div v-else>
      <p>{{ gameData.story[currentNode] }}</p>
      

      <div v-for="(option, i) in gameData.options[currentNode]" :key="i">
        <Cbutton @click="makeChoice(i)">
          {{ option }}
        </Cbutton>
      </div>
    </div>
  </div> 
  </div>
</template>