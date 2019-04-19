<template>
  <div class="portlet-wrapper">
    <div class="top-panel">
      <slot name="top" />
    </div>
    <div class="body-panel">
      <slot />
    </div>
    <div class="bottom-panel">
      <slot name="bottom" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.portlet-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  & > .body-panel {
    flex: 1;
  }
}
</style>
