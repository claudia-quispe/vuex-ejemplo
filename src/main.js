import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'The Wedding Singer', genre: 'Family' },
      { id: 2, title: 'Step by Step', genre: 'Family' },
      { id: 3, title: 'CHome Alone', genre: 'Family' },
      { id: 4, title: 'Groundhog Day', genre: 'Comedy' },
      { id: 4, title: '10 Things', genre: 'Comedy' },
      { id: 4, title: 'The Truman Show', genre: 'Comedy' },
    ]
  },
  // more stuff will go here later
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
