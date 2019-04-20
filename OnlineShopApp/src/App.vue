<template>
  <div id="app">
    <router-view/>
    <mt-tabbar fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="../static/img/首页.png" alt>
        首页
      </mt-tab-item>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../static/img/分类.png" alt>
        分类
      </mt-tab-item>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../static/img/购物车.png" alt>
        购物车
      </mt-tab-item>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../static/img/我的.png" alt>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
