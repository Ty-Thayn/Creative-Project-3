<template>
<div>
  <div class = "rating">
    <h1>Rating Filter</h1>
    <star-rating v-model="ratingToFilter" 
                    v-bind:increment="0.5"
                    :star-size="90"
                    :inline="true"
                    > </star-rating>
  </div>
  <AllDogs :dogBreeds="localDogBreeds"/>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
import AllDogs from "@/components/AllDogsComponent.vue"
export default {
  name: 'Favorites',
  components: {
    AllDogs,
    StarRating
  },
  data() {
    return {
        ratingToFilter: 3.5,
    }
  },
  computed: {
    localDogBreeds() {
        return this.$root.$data.allDogBreeds.filter(dog => dog.userRaiting >= this.ratingToFilter);
    }
  },
  methods: {
      selectCountry(countryToChange){
          console.log("HERE");
          this.country = countryToChange;
      }
  }
}
</script>

<style scoped>
    .rating h1 {
        align-content: center;
        color: #ff0000;
    }

</style>