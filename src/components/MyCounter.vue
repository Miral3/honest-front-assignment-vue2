<template>
  <div class=counter__wrapper>
    <span>{{minute}}:{{second}}</span>
  </div>
</template>

<script>
export default {
  props: {
    initialMinute: {
      type: Number,
      default: 0
    },
    initialSecond: {
      type: String,
      default: "00"
    },
    timeOver: {
      type: Function,
      default: function() {
        return;
      }
    }
  },
  data() {
    return {
      minute: this.initialMinute,
      second: this.initialSecond,
      timerId: null,
      timeOutId: null
    }
  },
  computed: {
    time() {
      return (this.minute * 60 + this.second * 1) * 1000 + 500;
    }
  }
  ,
  methods: {
    timer() {
      this.timerId = setInterval(() => {
        --this.second;
        if (this.second >= 0 && this.second < 10) {
          this.second = "0" + this.second;
        }
        if (this.second < 0) {
          --this.minute;  
          this.second = 59;
        }
      }, 1000);
      
      this.timeOutId = setTimeout(() => {
        clearTimeout(this.timerId);
        this.timeOver();
      }, this.time)
    },
    resetTimer() {
      clearTimeout(this.timerId);
      clearTimeout(this.timeOutId);
      this.minute = this.initialMinute;
      this.second = this.initialSecond;
      this.timer();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.timer();
    });
  },
  destroyed() {
    clearTimeout(this.timeOutId);
  }
}
</script>
<style scoped>
  .counter__wrapper {
    display: inline;
    float: right;
    color: #F3494A;
    font-weight: 500;
  }
</style>