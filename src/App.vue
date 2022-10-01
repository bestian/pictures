<template>
  <div id="app">
    <nav class="ui top menu">
      <router-link class="item" to="/"><i class="home icon" /></router-link>
      <router-link class="item" to="/about">關於</router-link>
      <router-link class="item" to="/man">曼陀羅</router-link>
      <router-link class="item" to="/paper">摺紙</router-link>
      <router-link class="item" to="/dye">植物染</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: '歡迎',
    // all titles will be injected into this template
    titleTemplate: '%s | 小太陽作品集'
  }
}
</script>

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

img {
  position: relative;
  top: 0;
  max-width: 15vw;
  border-radius: 50px;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}

img:hover {
  top: -2em;
}

@media screen and (max-width: 900px) and (min-width: 701px) {
  img {
    max-width: 20vw;
  }
}

@media screen and (max-width: 700px) {
  img {
    max-width: 25vw;
  }
}

</style>
