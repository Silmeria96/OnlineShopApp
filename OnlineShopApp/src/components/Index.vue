<template>
  <div class="index-container">
    <mt-header title="商城首页">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="swiper-container">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <a class="swipe-item-link" href="#">
            <img class="swipe-item-img" slot="icon" src="../../static/img/banner-1.jpg" alt="IMG">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a class="swipe-item-link" href="#">
            <img class="swipe-item-img" slot="icon" src="../../static/img/banner-2.jpg" alt="IMG">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a class="swipe-item-link" href="#">
            <img class="swipe-item-img" slot="icon" src="../../static/img/banner-3.jpg" alt="IMG">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="category-nav-container">
      <a class="category-nav-item" href="#">模块1</a>
      <a class="category-nav-item" href="#">模块1</a>
      <a class="category-nav-item" href="#">模块1</a>
      <a class="category-nav-item" href="#">模块1</a>
      <a class="category-nav-item" href="#">模块1</a>
      <a class="category-nav-item" href="#">模块1</a>
      <a class="category-nav-item" href="#">模块1</a>
      <a class="category-nav-item" href="#">模块1</a>
    </div>
    <div class="product-list-container">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 150px;
  background: dodgerblue;
}
.swipe-item-img {
  width: 100%;
  height: 150px;
  background-size: 100% 100%;
}
.category-nav-container{
  width: 100%;
  height: 120px;
}
.category-nav-item{
  float: left;
  display: block;
  width: calc(25% - 2px);
  height: 60px;
  line-height: 60px;
  background: lightskyblue;
  border: 1px solid lightgray;
}
</style>


