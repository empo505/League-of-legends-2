<script setup>
  import {ref, watch, computed} from "vue";
  import {play_buttonsound, play_textsound, pause_textsound, textSound, buttonSound} from "./soundeffects.ts"
  import {game_test} from "./story.ts";
  import {vue_game} from "./graph_traverse_return.ts";
  import Cbutton from "./components/Cbutton.vue";

  const game = game_test;
  const gameData = ref(game);
  const gameActive = ref(false);
  const currentNode = ref(0);
  const displayedStory = ref("");

  // Function that goes through the image array and updates the background pictures
  const backgroundStyle = computed(() => {
    const path = game?.images?.[currentNode.value];
    return {
      backgroundImage: `url("${path}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      minWidth: "100vw"
    };
  });

  // Starts the game
  const startGame = () => {
    currentNode.value = 0;
    gameActive.value = true;
  };

  // Plays the game and when the game is over resets it
  const makeChoice = (index) => {
    play_buttonsound();
    const result = vue_game(gameData.value, currentNode.value, index);
    if (result.nextNode === null) {
      alert("The game is over!");
      gameActive.value = false;
    } else {
        currentNode.value = result.nextNode;
    }
  };

  let typewriterInterval = null;

  // Makes the text come one letter at the time and puts sound over it
  const typeWriter = (text) => {
    clearInterval(typewriterInterval);
    displayedStory.value = "";
    play_textsound();
    let i = 0;

    typewriterInterval = setInterval(() => {
      if (i < text.length) {
        displayedStory.value += text.charAt(i);
        i++;
      } else {
        clearInterval(typewriterInterval);
        pause_textsound();
      }
    }, 20);
  };

  watch(currentNode, (newNode) => {
    typeWriter(gameData.value.story[newNode]);
  });

  watch(gameActive, (active) => {
    if (active) typeWriter(gameData.value.story[currentNode.value]);
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
      <div v-if="!gameActive" class="start-screen">
        <h2>Welcome to game!</h2>
          <Cbutton @click="startGame">Press to play!</Cbutton>
      </div>

      <div v-else class="story-screen">
        <div class content-area>
          <div class="story-card">
            <p>{{ displayedStory }}</p>
          </div>
        </div>

        <div class="options-outer-bar">
          <div class="options-container">
            <div v-for="(option, i) in gameData.options[currentNode]" :key="i" class="option-item">
              <Cbutton @click="makeChoice(i)">
                <span class="gold-text"> </span>
                  {{ option }}
              </Cbutton>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>