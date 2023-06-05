<template>
<HeaderComp />
<!-- <h1>Add Comment</h1> -->
<h1>Write a Review</h1>
<div class="rating">
    <span
      v-for="star in stars"
      :key="star"
      class="star"
      :class="{ 'filled': star <= selectedStar }"
      @click="selectStar(star)"
    >
      &#9733;
    </span>
  </div>
<div class="add">
    <div>
        <textarea type="text" placeholder="Enter Description" v-model="Restaurant.Name" name="name" />
    </div>
    <button type="button" v-on:click="AddReview" class="add">Add Review</button>
</div>
</template>

<style>
.star {
    font-size: 24px;
    color: gray;
    cursor: pointer;
}

.star.filled {
    color: gold;
}

.add button {

    height: 40px;
    background-color: skyblue;
    color: white;
    border: 1px solid skyblue;
    cursor: pointer;
}

.add textarea {
    margin: 15px;
    width: 372px;
    height: 120px;
}

 
 .Adr{font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #0f7be7;
 }

 .rating {
  color: #201f1e; /* Default star color */
  cursor: pointer;
}

.star {
  font-size: 24px;
}

.filled {
  color: #ff9900; /* Filled star color */
}

</style>

<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'
export default {
    name: 'AddReview',
    components: {
        HeaderComp
    },
    data() {
        return {
            Restaurant: {
                Name: '',
                address: '',
                contactNo: '',
                currentRating: 0,
                stars: [1, 2, 3, 4, 5]
            }
        }
    },
    methods: {
        async AddReview() {

            let result = await axios.post("http://localhost:5081/api/Resturent", {
                Name: this.Restaurant.Name,
                address: this.Restaurant.Address,
                contactNo: this.Restaurant.contactNo,
            });
            if (result.status == 201) {
                this.$router.push({
                    name: 'Home'
                });
            }
            console.log(result.data);

        },
        selectStar(star) {
      this.selectedStar = star;
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {

            this.$router.push({
                name: 'Signup'
            })
        }
    }
}
</script>
