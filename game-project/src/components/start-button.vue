<template>
  <button class="game-button">
    <span class="button-content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.game-button {
  /* Grundläggande stil */
  background: #3a5edb; /* Blå färg som matchar din tidigare tanke */
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  text-align: right;
  
  /* Den mörka skuggan under knappen (3D-effekt) */
  box-shadow: 0 8px 0 #2a439b;
  transition: filter 250ms;
}

.button-content {
  display: block;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: #3a5edb;
  color: white;
  font-weight: bold;
  transform: translateY(-8px); /* Flyttar upp den ljust färgade delen */
  transition: transform 250ms cubic-bezier(.3, .7, .4, 1);
}

/* Hover-effekt (knappen blir lite ljusare) */
.game-button:hover {
  filter: brightness(110%);
}

.game-button:hover .button-content {
  transform: translateY(-10px); /* Lyfts lite högre när man hovrar */
  transition: transform 34ms;
}

/* Den fysiska "nedtryckta" effekten vid klick! */
.game-button:active .button-content {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.game-button:active {
  box-shadow: 0 2px 0 #2a439b; /* Skuggan minskar när man trycker */
}
</style>