<template>
  <div id="app">
    <div id="menu">
      <div id="side">
      <router-link to="/worldWide">
        <div class="menu-item worldWide">
          <img src="/images/globe.png">
          <p>Dog Breed by Country</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/heart.png">
          <p>0 Favorite Dog Breeds</p>
        </div>
      </router-link>
    </div>
    <div id="banner">
      <router-link to="/">
        <img src="/images/banner.png">
      </router-link>
      <h1>Dog Breed Rater</h1>
    </div>
    
  </div>
  <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgreen;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#banner img{
  height: 400px;
}
#banner h1 {
  size: 500px;
}
/* #menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
} */

#side {
  margin: 40px;
  float: right;
  position:fixed;
}
#side img{
    height: 150px;
}
</style>
