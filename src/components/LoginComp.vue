<template>
<img class="" alt="Vue logo" src="../assets/radix.jpg">
<h1>Login </h1>



<div class="login">

    <input type="text" v-model="emailId" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    

    <button v-on:click="login">Login</button>
    <p>click here to <router-link to="/Sign-up"> Sign-up</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'

//import axios from 'axios'
export default {
    name: 'LoginComp',
    data() {
        return {
            emailId: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:5081/api/Users/UserLogin?EmailId=${this.emailId}&password=${this.password}`);
                if (result.status == 200) {
                    console.warn("check",result.data)
                    localStorage.setItem('user-info', JSON.stringify(result.data));
                    this.$router.push({ name: 'Home' })
                }
                console.warn(result)
                
        },
    },
    mounted(){
        let user=localStorage.getItem('user-info')
            if(user){

           this.$router.push({name:'Home'})
        }
    }
}
</script>

<style>

</style>
