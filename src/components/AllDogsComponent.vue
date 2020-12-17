<template>
    <div class="wrapper">
        <div class="dogs">
            <div class="dog" v-for="dog in dogBreeds" :key="dog.id">
                <h1>{{dog.name}}</h1>
                <h2>{{dog.country}}</h2>
                <div class="image">
                    <img :src="'/dogpictures/'+dog.image">
                </div>
                <div class = "rating"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AllDogs',
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
        width: 200px;
        /* */
    } 

    .dog .images {
        display: flex;
        justify-content: center;
        margin: 10px;
    }

</style>