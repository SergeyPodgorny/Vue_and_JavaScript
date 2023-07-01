import AUTHORIZATION_API_URL from '@/constants/authorizationApiUrl.js'
import axios from 'axios'
import { createStore } from 'vuex'


export default createStore({
  state: {
    accessToken: '',
    username:'',
    password:'',
    authenticated: false,
    apiErrorOccured: false,
    apiErrorMessage:''
  },
  getters: {
    getAccessToken(state){
        return state.accessToken
    },
    getUsername(state){
      return state.username
    },
    getPassword(state){
      return state.password
    },
    isAuthenticated(state){
      return state.authenticated
    },
    isApiErrorOccured(state){
      return state.apiErrorOccured
    },
    getApiErrorMessage(state){
      return state.apiErrorMessage
    }
  },
  mutations: {
    saveAccessToken(state,accessToken){
        state.accessToken = accessToken
    },
    setUsername(state,username){
      state.username = username
    },
    setPassword(state,password){
      state.password = password
    },
    setAuthentication(state, authenticated){
      state.authenticated = authenticated
    },
    setApiErrorOccurence(state, isApiErrorOccured){
      state.apiErrorOccured = isApiErrorOccured
    },
    setApiErrorMesage(state,apiErrorMessage){
      state.apiErrorMessage = apiErrorMessage
    }
  },
  actions: {

    async login({ commit, state }){         

          await axios.post(AUTHORIZATION_API_URL,
            {
                username:state.username,
                password:state.password
                
            })
            .then((response)=>{
              commit('saveAccessToken', response.data.token)
              commit('setAuthentication', true)
              commit('setApiErrorOccurence', false)
              commit('setApiErrorMesage', ' ')
            }).catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
                commit('setApiErrorOccurence', true)
                commit('setApiErrorMesage', error.response.data.message)
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
              }
              console.log(error.config)
            });
    },
    

  },
  modules: {
  }
})