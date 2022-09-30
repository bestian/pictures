<template>
  <div class="about">
    <h1>關於小太陽</h1>
    <div class="ui segment container">
      <img class = "floated left" src="../assets/m0.jpg" />
      <p>耀洋的小名叫作小太陽。是一個活潑、溫暖、開朗的小孩，健康靈活，喜歡和人互動相處，無論是小小孩、同齡朋友、青年、成人、老人，他都樂於相處互動。</p>
      <p>小太陽在家裡時常做一些東西，例如秘密基地。</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  metaInfo: {
    title: '關於'
  }
}
</script>

<style type="text/css" scoped>
  .about .ui.segment {
    height: 60vh;
  }
  img.floated.left {
    width: 8vw;
    float: left;
  }
</style>
