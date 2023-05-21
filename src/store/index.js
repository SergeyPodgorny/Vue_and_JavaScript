import AUTHORIZATION_API_URL from '@/constants/authorizationApiUrl.js'
import axios from 'axios'
import { createStore } from 'vuex'


export default createStore({
  state: {
    accessToken: ''
  },
  getters: {
    getAccessToken(state){
        return state.accessToken
    }
  },
  mutations: {
    saveAccessToken(state,accessToken){
        state.accessToken = accessToken
    }
  },
  actions: {

    async login(ctx){
        await axios.post(AUTHORIZATION_API_URL,
            {
                username:'admin',
                password:'password'
            })
            .then((response)=>{
                if (response.status>= 400 && response.status <= 600){
                    throw new Error("Bad response")
                }
                else{
                    ctx.commit('saveAccessToken', response.data.token)
                }
            })
    }

  },
  modules: {
  }
})