<template>
  <div id="app">
    <nav class="ui top menu">
      <router-link class="item" to="/"><i class="home icon" /></router-link>
      <router-link class="item" to="/about">關於</router-link>
      <router-link class="item" to="/paper">摺紙</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background-color: #42b983 !important;
}

.ui.menu {
  border: none !important;
}

</style>
