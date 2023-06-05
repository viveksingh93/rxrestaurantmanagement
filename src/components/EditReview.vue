<template>
<HeaderComp />
<h1>Edit Review </h1>

<form class="add">
    <input type="text" placeholder="Enter Name" v-model="Restaurant.name" name="name" />
    <input type="text" placeholder="Enter Address" v-model="Restaurant.address" name="address" />
    <input type="text" placeholder="Enter Contact" v-model="Restaurant.contactNo" name="Contact" />
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
</form>
</template>

<style>
</style>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios';
export default {
    name: 'EditReview',
    components: {
        HeaderComp
    },
    data() {
        return {
            Restaurant: {
                id:'',
                Name: '',
                address: '',
                contactNo: ''
            }
        }
    },
    methods: {
        async updateRestaurant() {
            let result = await axios.put(
                `http://localhost:5081/api/Resturent?id=${this.$route.params.id}`, {
                Name:this.Restaurant.name,
                address:this.Restaurant.address,
                contactNo:this.Restaurant.contactNo,
                id:this.$route.params.id
            });
            console.log(result.data)
            if (result.status == 200) {
                this.$router.push({
                    name: 'Home'
                });
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {

            this.$router.push({
                name: 'Signup'
            })
        }
        const result = await axios.get('http://localhost:5081/api/Resturent/' + this.$route.params.id)
        this.Restaurant = result.data
    }
}
</script>
