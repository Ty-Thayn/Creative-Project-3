<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="selectCountry('United States')" href="#" class="pure-menu-link">United States</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Mexico')" href="#" class="pure-menu-link">Mexico</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Germany')" href="#" class="pure-menu-link">Germany</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Italy')" href="#" class="pure-menu-link">Italy</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Russia')" href="#" class="pure-menu-link">Russia</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Japan')" href="#" class="pure-menu-link">Japan</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Peru')" href="#" class="pure-menu-link">Peru</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Australia')" href="#" class="pure-menu-link">Australia</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Netherlands')" href="#" class="pure-menu-link">Netherlands</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Korea')" href="#" class="pure-menu-link">Korea</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Thailand')" href="#" class="pure-menu-link">Thailand</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Turkey')" href="#" class="pure-menu-link">Turkey</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Kazakhstan')" href="#" class="pure-menu-link">Kazakhstan</a></li>
      <li class="pure-menu-item"><a @click="selectCountry('Cuba')" href="#" class="pure-menu-link">Cuba</a></li>
    </ul>
  </div>
  <AllDogs :dogBreeds="localDogBreeds"/>
</div>
</template>

<script>
import AllDogs from "@/components/AllDogsComponent.vue"
export default {
  name: 'Global',
  components: {
    AllDogs
  },
  data() {
    return {
        country: '',
    }
  },
  computed: {
    localDogBreeds() {
        if(this.country === ''){
            return this.$root.$data.allDogBreeds;
        }
        return this.$root.$data.allDogBreeds.filter(dog => dog.country === this.country);
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