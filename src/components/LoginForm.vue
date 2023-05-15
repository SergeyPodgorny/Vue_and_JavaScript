<template>
    <div class="container">

        <h2 class="h2_text">Login</h2>
            
            <div class="input">
                <input
                class="form-control"
                type="username"
                v-model="username"
                placeholder="Enter Username"/>
            </div>

           <div class="input" >
                <input
                class="form-control"
                type="password"
                v-model="password"
                placeholder="Enter Password">
           </div>

           <button type="submit" id="login_button" v-on:click="login">Submit</button>
    </div>
</template>

<script>

import AUTHORIZATION_API_URL from '@/constants/authorizationApiUrl.js'
import axios from 'axios'

export default {
    name:"LoginForm",
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        async login(){
            await axios.post(AUTHORIZATION_API_URL,
            {
                username:this.username,
                password:this.password
            })
        }
    }
}

</script>