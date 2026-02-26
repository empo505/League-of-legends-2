  import { computed } from 'vue';
    import {game_test} from "./story";
    import { ref } from 'vue';

export const backgroundStyle = computed(() => {
  const path = game?.images?.[currentNode.value];
  

 
  
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