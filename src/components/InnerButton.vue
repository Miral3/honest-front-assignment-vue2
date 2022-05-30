<template>
  <button @click="onClick">
    <slot />
  </button>  
</template>

<script>
export default {
    props: {
      onClick: {
        type: Function,
        default: function() {
          return;
        }
      }
    }
}
</script>

<style scoped>
  button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding-right: 10px;
    border: none;
    background: none;
    cursor: pointer;
    color: #2E85FF;
  }
</style>