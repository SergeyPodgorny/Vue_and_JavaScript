<template>
    <div class="container">

        <h2 class="h2_text">Login</h2>
            
            <div class="input">
                <input
                class="form-control"
                id="username_field"
                type="username"
                v-model=username
                placeholder="Enter Username"/>
            </div>

           <div class="input" >
                <input
                class="form-control"
                id="password_field"
                type="password"
                v-model=password
                placeholder="Enter Password">
           </div>

           <p v-if="this.$store.getters.isApiErrorOccured">error</p>
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
            }        
        },
        password:{
            get(){
                return this.$store.state.password
            },    
            set(newPassword){
                this.$store.commit('setPassword', newPassword)
            } 
        }
    }

}

</script>