export default {
  install(Vue) {
    Vue.prototype.$validate = (type, value) => {
      if (!value) {
        return false;
      }

      if (type === 'mobile') {
        const regex = /\d{11}/;
        return value.length === 11 && regex.test(value);
      }
      if (type === 'civilcodeFirst') {
        const regex = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])/;
        return value.length === 6 && regex.test(value);
      }
      if (type === 'civilcodeLast') {
        const regex = /[1-4]\d{6}/;
        return value.length === 7 && regex.test(value);
      }
      if (type === 'name') {
        const regex = /^[가-힣]{2,4}$/;
        return value.length <= 4 && regex.test(value);
      }
      if (type === 'code') {
        return value.length === 6;
      }
    }
  }
}