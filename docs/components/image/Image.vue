<template>
  <div class="yl-img">
    <image src="../../../assets/images/pic1.jpg" />
  </div>
</template>

<script>
export default {
  name: "YlImage",
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang='less'>
.yl-content {
  width: 200px;
  height: 200px;
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
