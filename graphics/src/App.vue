<script setup>
  import {ref, watch, computed} from "vue";
  import {play_soundfile, pause_soundfile, textSound, buttonSound} from "./soundeffects-2.ts"
  import {game_test} from "./story.ts";
  import {vue_game} from "./graph_traverse_return.ts";
  import Cbutton from "./components/Cbutton.vue";

  const game = game_test;
  const gameData = ref(game);
  const gameActive = ref(false);
  const currentNode = ref(0);
  const displayedStory = ref("");
  const imageIndex = ref(0);
  const inventory = ref([]);
  let typewriterInterval = null;

  // Updates the image index 
  const nextImage = () => {
    play_soundfile(buttonSound);  
    imageIndex.value++
  };

  // Function that goes through the image array and updates the background pictures
  const backgroundStyle = computed(() => {
    let path;
    if (Array.isArray(gameData.value.images[currentNode.value])) {
      path = gameData.value.images[currentNode.value][imageIndex.value]; 
    } else {
      path = gameData.value.images[currentNode.value];
    }
    return {
      backgroundImage: `url("${path}")`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      minHeight: '100vh',
      minwidth: "100vw",
      backgroundRepeat: 'no-repeat',
    };
  }); 

  // Starts the game
  const startGame = () => {
    currentNode.value = 0;
    gameActive.value = true;
  };
  const stopGame = () => {
    gameActive.value = false;
    currentNode.value = 0;
    imageIndex.value = 0;
    inventory.value = [];
  }

  // Stops the game


  // Plays the game and when the game is over resets it
  const makeChoice = (index) => {
    play_soundfile(buttonSound);
    const result = vue_game(gameData.value, currentNode.value, index, inventory.value);
    inventory.value = result.inventory;
    currentNode.value = result.nextNode;
    imageIndex.value = 0;
  };

  // Makes the text come one letter at the time and puts sound over it
  const typeWriter = (text) => {
    if (typewriterInterval) {
      clearInterval(typewriterInterval);
      typewriterInterval = null;
    }
    pause_soundfile(textSound);

    if (!text || !gameActive.value) {
      displayedStory.value = "";
      return;
    }

    displayedStory.value = "";
    let i = 0;

    play_soundfile(textSound);

    typewriterInterval = setInterval(() => {
      if (i < text.length) {
        displayedStory.value += text.charAt(i);
        i++;
      } else {
        clearInterval(typewriterInterval);
        typewriterInterval = null;
        pause_soundfile(textSound);
      }
    }, 25);
  };

  // Runs typewriter when node updates, except for the starting node
  watch(currentNode, (newNode) => {
      imageIndex.value = 0; 
      typeWriter(gameData.value.story[newNode][0]);
    });
  
  // Runs typewriter when clicking on "Next"
  watch(imageIndex, (newIdx) => {
    const currentStoryArray = gameData.value.story[currentNode.value];
    if (currentStoryArray && currentStoryArray[newIdx]) {
      typeWriter(currentStoryArray[newIdx]);
    }
  });

  // Starts the first text when the game is activated 
  watch(gameActive, (active) => {
    if (active) {
      typeWriter(gameData.value.story[currentNode.value][imageIndex.value]);
    }
  });
</script>


<template>
  
  <div class="game-wrapper" :style="backgroundStyle">
    <audio ref ="buttonSound" src="/666herohero-click-21156.mp3"></audio>
    <audio ref ="textSound" src="/freesound_community-text-sound-4-30218.mp3"></audio>

    <header class="game-header">
      <h1>SPEL</h1>
    </header>

    <main class="game-content">
      {{ gameData.graph.adj[currentNode] }} {{ currentNode }}
      <div v-if="!gameActive" class="start-container">
        <h2>Welcome to game!</h2>
          <Cbutton @click="startGame">Press to play!</Cbutton>
      </div>

      <div v-else class="story-screen">
        
          <div class="story-card">
            <p>{{ displayedStory }}</p>
          </div>
          <div class="inventory-bar">{{ inventory }}</div>
        <div class="options-outer-bar">
          <div v-if="imageIndex + 1 < game.images[currentNode].length" class="options-container">
            <Cbutton @click="nextImage">Next</Cbutton>
          </div>

          <div v-else>
            <div v-if="gameData.options[currentNode]?.length > 0" class="options-container">
             
              <div v-for="(option, i) in gameData.options[currentNode]" :key="i" class="option-item">
                <Cbutton @click="makeChoice(i)">
                  <span class="gold-text"> </span>
                  {{ option }}
                  
                </Cbutton>
                <Cbutton v-if="i + 1 === gameData.options[currentNode].length && inventory.includes(gameData.nodeneeds[currentNode][0])" @click="makeChoice(i + 1)">
                  {{ gameData.nodeneeds[currentNode][1] }}
                </Cbutton>
              </div>
            </div>

            <div v-else class="options-container">
              <Cbutton @click="stopGame">OKEY</Cbutton>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>