<template>
<img class="" alt="Vue logo" src="../assets/radix.jpg">
<h1>Sign Up</h1>
<div class="register">

    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="mobileNo" placeholder="Enter Mobile No" />
    <input type="text" v-model="emailId" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <input type="text" v-model="IsActive" placeholder="Enter 0/1" />
    <button v-on:click="signup">Submit</button>
    <p>click here to <router-link to="/Login">Login</router-link></p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'signUp',
    data() {
        return {
            name: '',
            emailId: '',
            password: '',
            isActive:'',
            mobileNo:''
        }
    },
    methods: {
      async  signup() {
            console.log("signup", this.name, this.emailId, this.password,this.IsActive,this.mobileNo)
            let result = await axios.post("http://localhost:5081/api/Users",{
            // let result = await axios.post("https://localhost:7005/api/Users",{
                name:this.name,
                emailId:this.emailId,
                mobileNo:this.mobileNo,
                password:this.password,
                IsActive:this.IsActive

            });
            console.log(result.data);
            if(result.status==201){
                alert("SignUp Done")
                localStorage.setItem('user-info',JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
        }
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
