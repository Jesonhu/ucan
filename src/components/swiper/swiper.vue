<template>
  <div class="swiper-wrap">
    <ul>
      <li v-for="(item,index) in data.swiper">
        <a href="">
          <image :src="item.image" alt="" class="swiper-img">
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {

    },
    data() {
      return {

      };
    },
    components: {}
  };
</script>

<style>

</style>
