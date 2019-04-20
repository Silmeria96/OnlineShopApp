<template>
  <div class="hello">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
        <router-link to="/AboutUs">关于我们</router-link>
        <mt-button @click.native="handleClick">Toast</mt-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '首页'
    }
  },
  methods: {
    handleClick: function() {
      this.$toast('Hello world!')
    }
  }
}
</script>

<style scoped>

</style>
