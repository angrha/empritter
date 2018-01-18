import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const baseUrl = 'http://localhost:3000'

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    signin ({ commit }, payload) {
      axios.post(baseUrl + '/api/users/signin', payload)
        .then(response => {
          console.log(response.data)
          localStorage.setItem('authLogin', response.data.token)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})

export default store
