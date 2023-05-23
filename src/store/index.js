import AUTHORIZATION_API_URL from '@/constants/authorizationApiUrl.js'
import axios from 'axios'
import { createStore } from 'vuex'


export default createStore({
  state: {
    accessToken: '',
    username:'',
    password:''
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
                if (response.status>= 400 && response.status <= 600){
                    throw new Error("Bad response")
                }
                else{
                    commit('saveAccessToken', response.data.token)
                }
            })
    },
    

  },
  modules: {
  }
})