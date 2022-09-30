<template>
  <div class="hello">
    <h1>小太陽作品集-植物染</h1>
    <div class="images">
      <vue-picture-swipe :items="images"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PaPer',
  metaInfo: {
    title: '摺紙'
  },
  data () {
    return {
      images: [
        {
          id: 1,
          src: require('@/assets/dye/d1.jpg'),
          thumbnail: require('@/assets/dye/d1.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 2,
          src: require('@/assets/dye/d2.jpg'),
          thumbnail: require('@/assets/dye/d2.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 3,
          src: require('@/assets/dye/d3.jpg'),
          thumbnail: require('@/assets/dye/d3.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 4,
          src: require('@/assets/dye/d4.jpg'),
          thumbnail: require('@/assets/dye/p4.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 5,
          src: require('@/assets/dye/d5.jpg'),
          thumbnail: require('@/assets/dye/d5.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 6,
          src: require('@/assets/dye/p6.jpg'),
          thumbnail: require('@/assets/dye/p6.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        }
      ]
    }
  },
  mounted () {
  }
}

</script>

<style type="text/css">

img {
  max-width: 25vw;
  border-radius: 50px;
}

</style>
