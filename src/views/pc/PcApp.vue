<template>
  <div class="pc-app">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/plugins/element.js'

export default {
  name: 'PcApp'
}
</script>

<style lang="scss" scoped>
.pc-app {
  height: 100%;
}
</style>
