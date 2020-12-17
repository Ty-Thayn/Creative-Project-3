<template>
  <div id="app">
    <div id="menu">
      <div id="leftSide">
      <router-link to="/global">
        <div class="menu-item worldWide">
          <img src="/images/globe.png">
          <p>Dog Breed by Country</p>
        </div>
      </router-link>
    </div>
    <div id="rightSide">
    <router-link to="/favorites">
          <div class="menu-item">
            <img src="/images/heart.png">
            <p>Favorite Dog Breeds</p>
          </div>
    </router-link>
  </div>
    <div id="banner">
      <router-link to="/">
        <img src="/images/banner.png">
      </router-link>
      <h1>Dog Breed Ratings</h1>
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
  height: 200px;
}
#banner h1 {
  size: 400px;
}

#rightSide {
  margin: 40px;
  float: right;
}
#rightSide img{
    height: 150px;
}

#leftSide {
  margin: 40px;
  float: left;
}
#leftSide img{
    height: 150px;
}
</style>
