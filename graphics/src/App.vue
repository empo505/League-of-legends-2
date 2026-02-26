<script setup>
  import Cbutton from "./components/Cbutton.vue";
  import {ref, computed} from "vue";
  import {vue_game} from "./graph_traverse_return.ts";
  import {game_test} from "./story.ts";
  
  const gameData = ref(game_test);
  const currentNode = ref(0);
  const gameActive = ref(false);
  // const imgUrl = new URL('./assets/background1.png', import.meta.url).href
  //const backgroundImage = ref("https://img.craftpix.net/2023/04/Free-Nature-Backgrounds-Pixel-Art2.png")

const currentBg = computed(() => {
  const img = gameData.images[currentNode.value];

  return {
    backgroundImage: `url('${img}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
});

  const startGame = () => {
    currentNode.value = 0;
    gameActive.value = true;
  };

const makeChoice = (index) => {
const result = vue_game(gameData.value, currentNode.value, index);  
  if (result.nextNode === null) {
    alert("The game is over!");
    gameActive.value = false;
  } else {
    currentNode.value = result.nextNode;
  }
};

</script>

<template>
  
   <div class="game-wrapper" :style="currentBg">
    <img :src="imgUrl"/>
    <h1 style="color: red; background: black;">LEAGUE OF LEGENDS 2</h1>
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
</template>


