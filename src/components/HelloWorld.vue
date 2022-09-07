<template>
  <div class="hello">
    <h1>小太陽作品集</h1>
    <div class="images" v-viewer>
      <img v-for="src in images" :key="src.id" :src="src.imgSrc">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      images: [
        {
          id: 1,
          imgSrc: require('@/assets/m1.png')
        },
        {
          id: 2,
          imgSrc: require('@/assets/m2.png')
        },
        {
          id: 3,
          imgSrc: require('@/assets/m3.png')
        },
        {
          id: 4,
          imgSrc: require('@/assets/m4.png')
        },
        {
          id: 5,
          imgSrc: require('@/assets/m5.png')
        },
        {
          id: 6,
          imgSrc: require('@/assets/m6.png')
        },
        {
          id: 7,
          imgSrc: require('@/assets/m7.png')
        }
      ]
    }
  },
  mounted () {
    this.$viewerApi({
      images: this.images
    })
  }
}

</script>

<style type="text/css">

</style>
