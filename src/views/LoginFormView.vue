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

           <div>
            {{ this.$store.getters.getAccessToken }}
           </div>

           <button type="submit" id="login_button" v-on:click="this.$store.dispatch('login')">Submit</button>
    </div>
</template>

<script>

export default {
    name:"LoginForm",
    data(){
        return{
            username:"",
            password:""
        }
    }
}

</script>