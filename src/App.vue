<template>
  <div id="app" class="h100">
    <i class="el-icon-menu nav-icon" v-on:click="menu_ctl()" v-show="menu=='close'"></i>
    <el-row class="h100">
      <transition name="el-zoom-in-center">
      <el-col :span="part_left" class="part nav left" v-show="menu=='open'">
        <el-row class="logo">
          <el-col :span="24">
            <img v-show="menu=='open'" src="./assets/logo.png" width="100px" height="100px"></img>
          </el-col>
        </el-row>
        <el-row class="menu" v-show="menu=='open'">
          <el-col :span="menu=='open'?6:24" class="menu-button">
            <i class="el-icon-menu" v-on:click="menu_ctl()"></i>
          </el-col>
          <el-col :span="18" v-show="menu=='open'">
            <div class="menu-list">
              <ul>
              <li v-for="(item, index) in menus" :key="index">
                <router-link v-bind:to="item.path" v-bind:class="{'cblue':routePath==item.path, 'cblack':routePath!=item.path}">
                  {{ item.name }}</router-link>
              </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-col>
      </transition>
      <el-col :span="part_left" class="part left" v-show="menu=='open'"></el-col>
      <el-col :span="part_right" class="part right">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import bus from './common/bus.js'

Vue.use(ElementUI)

export default {
  name: 'app',
  data() {
    return {
      menus:[{path:"/", name:"Home"}, 
      {path:"/company", name:"Company"}, 
      {path:"/product", name:"Product"}, 
      {path:"/stories", name:"Stories"}, 
      /*{path:"/contract_us", name:"Contract Us"}*/],
      menu: "close",
      menu_timeout: 10,
      iv: null,
      routePath:null,
      part_left:0,
      part_right: 24
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    menu_ctl(status) {
      if(status == "open" || status == "close") {
        this.menu = status
      }
      if (this.menu == "close") {
        this.part_left = 4;
        this.part_right = 20;
        this.menu = "open";
      } else {
        this.part_left = 0;
        this.part_right = 24;
        this.menu = "close";
      }
      if(bus) {
        bus.$emit("onMenuChange", this.menu)
      }
    }
  },
  created() {
    var self = this;
    this.$router.afterEach((route)=>{
      this.routePath = route.path;
      this.$emit("menuCtrl")
    })
    this.$on("menuCtrl", ()=>{
      this.menu_ctl("open");
    })
  }
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  font-family:  "Microsoft YaHei"
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.part {
  height: 100%;
}

.h100 {
  height: 100%;
}

.fl {
  float: left;
}

.el-menu {
  text-align: left;
}

.menu-list {
  margin-top:10px;
  margin-left:5px;
  text-align: left;
  padding: 5px 5px;
  text-decoration: underline;
  cursor:pointer;
  color: black;
}

.menu-list li {
  margin-top: 10px;
  font-size: larger;
}

.menu-list li a:hover, .menu-list li a:active {
  color: blue;
}

.cblack {
  color:black;
}
.cblue {
  color:blue;
}


.container {
  position: relative;
}

.nav {
  position: fixed;
  z-index: 20;
}

.nav-icon {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 20;
}

.logo {
  background: #8492A6;
  width: 100%;
  height: 20%;
}

.menu {
  height: 80%;
}

.menu-button {
  background: #EEE;
  height: 100%;
  padding-top: 20px;
  opacity: 0.75;
}
</style>
