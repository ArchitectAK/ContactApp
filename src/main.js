import Vue from 'vue'
import Main from './Main.vue'
import router from "./router";

Vue.config.productionTip = false

sessionStorage.setItem(
      "contacts",
      JSON.stringify([
        { id: 0, name: "Ankit Kumar", phone: "+60111111111" },
        { id: 1, name: "Arnav Dhawan", phone: "+6012312312" },
      ])
    );

new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')