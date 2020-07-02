import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import VueResource from 'vue-resource'
import store from './store'
import { url } from './utils/config'

// Socket config
Vue.use(new VueSocketIO({
  debug: true,
  connection: `${url}/video-chat`,
  vuex: {
    store, // Attach the store
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
}))

// Vue resource for http
Vue.use(VueResource)

// Vue instance
new Vue({
  //router,
  store, // Attach the store
  render: h => h(App)
}).$mount('#app')
