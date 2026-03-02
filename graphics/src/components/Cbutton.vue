<template>
  <button class="hextech-button" v-bind="$attrs">
    <span class="button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
// This ensures the click doesn't get applied to a random div
export default {
  inheritAttrs: false
}
</script>

<style scoped>
/* Your existing styles are perfect, keep them! */
/* Inside Cbutton.vue <style scoped> */
.hextech-button {
  z-index: 10;
  background: rgba(45, 36, 25, 0.4); /* Dark see-through center */
  border: 2px solid #8B7355; /* Dark BurlyWood border */
  color: #8B7355;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.25s ease-in-out;
}

.hextech-button:hover {
  background: #8B7355; /* Fills with Dark BurlyWood */
  color: #1a1612;      /* Contrast text */
  box-shadow: 0 0 15px rgba(139, 115, 85, 0.5);
  transform: scale(1.02); /* Subtle pop forward */
}
</style>