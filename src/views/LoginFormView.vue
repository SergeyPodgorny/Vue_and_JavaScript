<template>
    <div class="container">

        <h2 class="h2_text">Login</h2>
            
            <div class="input">
                <input
                class="form-control"
                type="username"
                v-model=username
                placeholder="Enter Username"/>
            </div>

           <div class="input" >
                <input
                class="form-control"
                type="password"
                v-model=password
                placeholder="Enter Password">
           </div>

           <button type="submit" id="login_button" v-on:click="this.$store.dispatch('login')">Submit</button>
    </div>
</template>

<script>

export default {
    name:"LoginForm",
    computed:{
        username:{
            get(){
                return this.$store.state.username
            },
            set(newUsername){
                this.$store.commit('setUsername', newUsername)
                console.log(this.$store.getters.getUsername)    
            }        
        },
        password:{
            get(){
                return this.$store.state.password
            },    
            set(newPassword){
                this.$store.commit('setPassword', newPassword)
                console.log(this.$store.getters.getPassword)    
            } 
        }
    }

}

</script>