<template>
    <div class="cartcontroll" @click.stop.prevent="addCart">
      购买
    </div>
</template>

<script>
    import Vue from 'vue';

    export default{
        props: {
          food: {
              type: Object
          }
        },
        data() {
            return {

            }
        },
        methods: {
          // 增加商品到购物车里
          addCart() {
             if (!this.food.count) {
                 Vue.set(this.food, 'count', 1); // 添加购买数量
             } else {
                 this.food.count++;
             }
             this.$emit('add'); // 发布给shopcart.vue
          }
        }
    };
</script>

<style lang="scss">
  .cartcontroll{
    position:absolute;
    top:0;
    right:6px;
    display: block;
    width: 30px;
    height: 20px;
    padding: 3px 0 0;
    color: red;
    font-size: 14px;
  }
</style>
