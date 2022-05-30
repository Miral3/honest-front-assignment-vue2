const API_END_POINT = 'https://interview.honestfund.kr/tech/frontend/personal';

export default {
  install(Vue) {
    Vue.prototype.$request = async (url, options) => {
      try {
        const response = await fetch(`${API_END_POINT}${url}`, {
          ...options,
          headers: {
            'Content-Type': 'application/json'
          }
        });

        return await response.json();
      } catch (e) {
        console.log(e.message);
      }
    }
  }
}