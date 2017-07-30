<template>
  <div class="h100">
    <div style="height:20%">
    <h2>Our Products</h2>
    <hr>
    </div>
    <el-carousel :interval="4000" type="card" height="70%" class="h100">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>产品1：{{ item }}</h3>
      <span>产品介绍（需要背景图片）。。。。。。</span>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

export default {
  name: 'Product'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
    width:98%;
    opacity: 0.5;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
