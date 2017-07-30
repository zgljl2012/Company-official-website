<template>
  <div class="h100">
    <el-carousel :interval="3000" class="h100" height="100%">
      <el-carousel-item v-for="item in 2" :key="item">
        <div><img width="100%" height="100%" v-bind:src="'../static/stories/'+item+'.jpg'"></div>
      </el-carousel-item>
    </el-carousel>
    <el-row>
      <waterfall :align="'center'" :line-gap="250" :min-line-gap="200" :max-line-gap="320" 
      :single-max-width="300" :watch="items" ref="waterfall">
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height" :order="index" :key="item.index" move-class="item-move">
          <div class="item" :style="item.style" :index="'产品'+item.index" v-on:click="shuffle()"></div>
        </waterfall-slot>
      </waterfall>
    </el-row>
    <hr>
    <el-row class="footer">
      Contract Us: <i>Gmail</i>, <i>Facebook</i>, <i>Twitter</i>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import bus from '../common/bus.js'

Vue.use(ElementUI)

var ItemFactory = (function () {

  var lastIndex = 0

  function generateRandomItems(count, imgs) {
    var items = [], i
    for (i = 0; i < count; i++) {
      items[i] = {
        index: lastIndex++,
        style: {
          background: getRandomColor()
        },
        width: 100 + ~~(Math.random() * 50),
        height: 100 + ~~(Math.random() * 50)
      }
    }
    return items
  }

  function getRandomColor() {
    var colors = [
      'rgba(21,174,103,.5)',
      'rgba(245,163,59,.5)',
      'rgba(255,230,135,.5)',
      'rgba(194,217,78,.5)',
      'rgba(195,123,177,.5)',
      'rgba(125,205,244,.5)'
    ]
    return colors[~~(Math.random() * colors.length)]
  }

  return {
    get: generateRandomItems
  }

})()

export default {
  components: {
    Waterfall,
    WaterfallSlot
  },
  name: 'Index',
  data() {
    return {
      items: []
    }
  },
  methods: {
    shuffle() {
      this.items.sort(function () {
                  return Math.random() - 0.5
                })

    }
  },
  created() {
    this.items = ItemFactory.get(8)
    bus.$on("onMenuChange", (status)=>{
      this.$refs.waterfall.$emit('reflow')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item div {
  color: #475669;
  font-size: 18px;
  line-height: 500px;
  margin: 0;
}
/*
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
*/

body {
  margin: 5px;
  font-family: Helvetica, sans-serif;
}

hr {
  opacity: 0.5;
  width:90%;
}

.footer {
  opacity: 0.6;
  margin-bottom: 10px;
}

.footer i {
  cursor: pointer;
}

.item {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  font-size: 1.2em;
  color: rgb(0, 158, 107);
  text-align: center;
}

.item:after {
  content: attr(index);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.wf-transition {
  transition: opacity .3s ease;
  -webkit-transition: opacity .3s ease;
}

.wf-enter {
  opacity: 0;
}

.item-move {
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
  -webkit-transition: all .5s cubic-bezier(.55, 0, .1, 1);
}
</style>
