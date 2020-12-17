<template>
    <div class="wrapper">
        <div class="dog" v-for="dog in dogBreeds" :key="dog.id">
            <h1>{{dog.name}}</h1>
            <h2>{{dog.name}}</h2>
    </div>
</template>