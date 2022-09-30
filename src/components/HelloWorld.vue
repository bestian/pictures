<template>
  <div class="hello">
    <h1>小太陽作品集</h1>
    <div class="ui segment container">
      <router-link class="ui button" to="/man">
        <img src="../assets/m0.jpg" />
      曼陀羅</router-link>
      <router-link class="ui button" to="/paper">
        <img src="../assets/paper/p0.jpeg" />
      摺紙</router-link>
      <router-link class="ui button" to="/dye">
        <img src="../assets/dye/d1.jpg" />
      植物染</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  metaInfo: {
    title: '作品集'
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}

</script>

<style type="text/css" scoped>

img {
  max-width: 13vw !important;
  border-radius: 50px;
}

</style>
