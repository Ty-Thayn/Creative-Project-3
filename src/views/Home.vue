<template>
  <div>
    <AllDogs :dogBreeds="dogBreeds"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import AllDogs from "../components/AllDogs.vue"
export default {
  name: 'Home',
  components: {
    AllDogs
  },
  data() {
    return {
    }
  },
  computed: {
    dogBreeds(){
      // console.log("HERE");
      // console.log(this.$root.$data.allDogBreeds);
      return this.$root.$data.allDogBreeds;
    }
  }
}
</script>
