<template>
<div>
    <HeaderComp />
    <!-- <h2>List Of Restaurant</h2> -->
    <h2></h2>
    <div v-for="item in Review" :key="item.id">
       
    <div class style="align-content: center; text-align: -webkit-center;">
        Ratings  & Review  <router-link :to="'/Edit-Review/'+item.id" class="Update">--></router-link>
        <br>
        {{ item.name }}
    </div>
    </div>

</div>
</template>

<script>
import HeaderComp from './HeaderComp.vue'

import axois from 'axios';

export default {
    name: 'HomeComp',
    data() {
        return {
            name: '',
            reviewRate: 0,
            description:'',
            dateTime:''
        }
    },
    components: {
        HeaderComp
    },
    methods: {
        async loadData() {
            let user = localStorage.getItem('user-info')
            this.name = JSON.parse(user).name
            if (!user) {

                this.$router.push({
                    name: 'Signup'
                })
            }
            let result = await axois.get('http://localhost:5081/api/Resturent')
            console.log(result.data)
            this.Review = result.data
        }
    },
    mounted() {
        this.loadData();
        // if (result.status == 201) {

        //     localStorage.setItem('user-info', JSON.stringify(result.data))
        //     this.$router.push({
        //         name: 'Home'
        //     })
        // }
    }

};
</script>

<style>
.bg-color {
    background: antiquewhite !important;
    ;
}

td {
    width: 300px;
    background-color: antiquewhite;
    text-align: initial;
    height: 40px;

}

table {
    margin: auto;
    text-align: justify;
    padding: 35px;
}

.tes {
    padding: 16px 14px
}

.homebtn {
    /* width: 100px;
    height: 40px; */
    background-color: #a70c1e;
    color: white;
    border: 1px solid skyblue;
    cursor: pointer;
}

.Update {
    background-color: #fff;
color: #211010;
border: 0px solid white;
cursor: pointer;
}
</style>
