<template>
  <flex-portlet class="hd-portlet">
    <div class="top-navbar" slot="top">
      <mt-navbar v-model="navItem">
        <mt-tab-item id="1">图书</mt-tab-item>
        <mt-tab-item id="2">活动</mt-tab-item>
        <mt-tab-item id="3">论述摘编</mt-tab-item>
        <mt-tab-item id="4">原文原著</mt-tab-item>
      </mt-navbar>
    </div>
  </flex-portlet>
</template>

<script>
import FlexPortlet from '@/components/FlexPortlet'
import { Navbar, TabItem } from 'mint-ui'

export default {
  components: {
    FlexPortlet,
    [Navbar.name]: Navbar,
    [TabItem.name]: TabItem
  },
  data () {
    return {
      navItem: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid $--primary-color;
  color: $--primary-color;
}
</style>
