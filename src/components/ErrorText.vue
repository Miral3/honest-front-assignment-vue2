<template>
  <span>올바른 {{ text }}를 입력해주세요.</span>  
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
  span {
    display: block;
    color: #F3494A;
    font-size: 13px;
  }
  .active {
    visibility: hidden;
  }
</style>