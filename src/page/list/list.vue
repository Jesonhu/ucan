<template>
    <div id="list" class="list-wrap">
      <v-header :hasBg="true"></v-header>

      <!-- 左侧分类导航 -->
      <menu-wrapper :dataMenuList="dataMenuList" @selectedIndex="selectIndex"></menu-wrapper>

      <!-- 右侧分类 -->
      <branch-scroll :dataBranchScroll="slectedData"></branch-scroll>
    </div>
</template>

<script>
    /* 依赖组件 */
    import head from '../../components/header/hasSearch';
    import menuWrapper from '../../components/menu-wrapper/menu-wrapper';
    import branchScroll from '../../components/branchscroll/branchscroll';

    /* 数据api */
    import listData from '../../service/mockdata/list';

    export default{
      data() {
        return {
          index: 0,
          dataMenuList: listData.menuList,
          slectedData: listData.menuList.splice(this.index, 1)
        }
      },
      methods: {
        /* 监听menu-wrapper传递过来当前点击item的索引 */
        selectIndex(index) {
          this.index = index;
        }
      },
      components: {
        vHeader: head,
        menuWrapper,
        branchScroll
      }
    };
</script>

<style>
  .list-wrap{
    position:absolute;
    top:44px;
    bottom:50px;
    display:flex;
    overflow: hidden;
    width:100%;
    background-color:rgba(0,0,0,.1);
  }
</style>
