<template>
  <button class="hextech-button" v-bind="$attrs">
    <span class="button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style scoped>
.hextech-button {
  z-index: 10;
  background: rgba(45, 36, 25, 0.4); 
  border: 2px solid #8B7355; 
  color: #8B7355;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.25s ease-in-out;
  z-index: 10;
}

.hextech-button:hover {
  background: #8B7355; 
  color: #1a1612;      
  box-shadow: 0 0 15px rgba(139, 115, 85, 0.5);
  transform: scale(1.02); 
}
</style>