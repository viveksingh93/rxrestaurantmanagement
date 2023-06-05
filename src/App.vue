<template>
<!--   
  <signUp />
  <HomeComp/> -->

  <router-view>
    

  </router-view>
  <Teleport to="#footer">

    <FooterComp />
</Teleport>
</template>

<script>
import FooterComp from './components/FooterComp.vue'
export default {
  name: 'App',
  components:{
    FooterComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.logo {
    width: 150px;
}
body{
  padding: 0px;
  margin: 0px;
}
.register input, .login input, .add input{
    width: 300px;
    height: 20px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button, .login button {
    width: 300px;
    height: 40px;
    background-color: skyblue;
    color: white;
    border: 1px solid skyblue;
    cursor: pointer;
}
</style>
