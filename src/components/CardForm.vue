<template>
  <form @submit.prevent="onSubmit">
    <slot/>
  </form>
</template>

<script>
export default {
    props: {
      onSubmit: {
        type: Function,
        default: function() {
          return;
        }
      }
    }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 616px;
  height: 624px;
  padding: 64px 120px;
  border-radius: 16px;
  background-color: #FFF;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}
</style>