<template>
  <div>
    <AllDogs :dogBreeds="dogBreeds"/>
  </div>
</template>

<script>
import AllDogs from "@/components/AllDogs.vue"
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
    dogBreeds() {
      return this.$root.$data.allDogBreeds;
    }
  },
}
</script>
