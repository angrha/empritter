import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

const auth = 'tweet-auth'
const baseUrl = 'http://localhost:3000'

const store = new Vuex.Store({
  state: {
    login: false,
    tweetList: [],
    formPost: false
  },
  mutations: {
    isLogin (state, payload) {
      state.login = payload
    },
    mutatedTweet (state, payload) {
      state.tweetList = payload.tweets
    },
    checkForm (state, payload) {
      state.formPost = payload
    }
  },
  actions: {
    signin ({ commit }, payload) {
      axios.post(baseUrl + '/api/users/signin', payload)
        .then(response => {
          console.log(response.data)
          localStorage.setItem(auth, response.data.token)
          commit('isLogin', true)
          router.push({name: 'Tweets'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    signout ({ commit }) {
      localStorage.clear()
      commit('isLogin', false)
      router.push({ name: 'Home' })
    },
    checkLogin ({ commit }) {
      if (localStorage.getItem(auth)) {
        commit('isLogin', true)
      }
    },
    signup ({commit}, payload) {
      axios.post(baseUrl + '/api/users/signup', payload)
        .then(response => {
          alert('sign up berhasil')
          router.push({name: 'Home'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllTweet ({ commit }) {
      axios.get(baseUrl + '/api/tweets')
        .then(response => {
          console.log(response.data.tweets)
          commit('mutatedTweet', response.data)
        })
    },
    posting ({ commit }) {
      commit('checkForm', true)
    },
    postTweet ({commit}, payload) {
      axios.post(baseUrl + '/api/tweets', payload, {
        headers: {
          token: localStorage.getItem(auth)
        }
      })
        .then(response => {
          console.log(response.data)
          router.push({ name: 'Tweets' })
        })
        .catch(err => console.log(err))
    }
  }
})

export default store
