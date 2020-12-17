<template>
    <div class="wrapper">
        <div class="dogs">
            <div class="dog" v-for="dog in dogBreeds" :key="dog.id">
                <h1>{{dog.name}}</h1>
                <div class="country">
                    <h2>{{dog.country}}</h2>
                </div>
                <div class="image">
                    <img :src="require('@/dogpictures/'+dog.image)">
                </div>
                <div class = "rating">
                    <star-rating v-model="dog.userRaiting" v-bind:increment="0.5"> </star-rating>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    name: 'AllDogs',
    components: {
        StarRating
    },
    props: {
        dogBreeds: Array
    }
}
</script>

<style scoped>
    .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .dogs {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .dog {
        margin: 10px;
        margin-top: 50px;
        width: 300px;
        height: 500px;
        /* */
    } 

    .country{
        color:#ce2c26;
    }
    .dog .images {
        display: flex;
        justify-content: center;
        margin: 10px;
    }

</style>