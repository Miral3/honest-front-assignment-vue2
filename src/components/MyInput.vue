<template>
  <input
  :style="{width: typeof size === 'number' 
  ? `${size}px` : size}" 
  @input="$emit('update', $event)" />
</template>

<script>
export default {
  props: {
    size: {
      type: [String, Number],
      default: 80
    }
  }
}
</script>

<style scoped>
  input {
    padding: 10px 10px;
    border: 1px solid #E2E3E6;
    border-radius: 6px;
    outline: none;
    box-sizing: border-box;
  }
</style>