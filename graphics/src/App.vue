<script setup>
  import Cbutton from "./components/Cbutton.vue";
  import {ref} from "vue";'

  const penis = ref(true)

  function peniskoll(){
    penis.value = !penis.value
  }
</script>

<template>
  <div>
    <h1>Pool party Gragas
    <Cbutton @click="peniskoll">Tryck för penis
      </Cbutton>
    <h1 v-if="penis"> PENIS </h1>
    <h1 v-else> penis...? </h1>

   </div>
</template>


