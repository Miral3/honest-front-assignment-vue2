<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
  button {
    padding: 16px 0;
    background-color: #0444A1;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #FFF;
    font-weight: 600;
    cursor: pointer;
  }
  button:disabled {
    background-color: #DEDFE2;
    cursor: default;
  }
</style>