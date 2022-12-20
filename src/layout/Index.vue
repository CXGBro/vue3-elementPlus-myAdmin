<template>
  <div class="common-layout">
    <el-container id="layout-container">
      <el-aside id="layout-aside" width="250px"><LayoutAside/></el-aside>
      <el-container>
        <el-header id="layout-header"><LayoutHeader/></el-header>
        <el-main id="layout-main"><LayoutMain/></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LayoutAside from './components/Aside.vue'
import LayoutMain from './components/Main.vue'
import LayoutHeader from './components/Header.vue'
export default {
  name:'Layout',
  components:{
    LayoutAside,
    LayoutHeader,
    LayoutMain
  }
}
</script>
<style lang="scss" scoped>
#layout-container{height: 100vh;}
#layout-aside{
  background-color: #344a5f;
}
#layout-header {
    position: relative;
    z-index: 10;
    background-color: $color_white;
    @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, .1));
}
#layout-main{background-color: #bc77a1;}
</style>