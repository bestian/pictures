<template>
  <div class="hello">
    <h1>小太陽作品集</h1>
    <Gallery
      :images="images"
      :imageWidth='720'
      :imageHeight='auto'
      :popUpMaxWidth='720'
      :mdCols='4'
      :smCols='4'
      :xsCols='6'
      :lgCols='2'
    />
  </div>
</template>

<script>
import Gallery from 'vuejs-image-gallery'

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
        }
      ]
    }
  },
  components: {
    Gallery
  }
}

</script>

<style type="text/css">

</style>
