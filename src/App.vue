<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  name: 'app'
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: PingFangSC-Regular;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
</style>
