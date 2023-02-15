<template>
  <div class="yl-content">
    <slot />
  </div>
</template>

<script>
export default {
  name: "YlContent",
}
</script>

<style scoped lang='less'>
.yl-content {
  padding: 20px;
  cursor: pointer;
  outline: none;
  margin-bottom: 20px;
  font-weight: 500;
  transition: all .3s;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: --vp-code-block-bg;
  overflow: hidden;
  color: --vp-c-text-code;
}
</style>
