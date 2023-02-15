<template>
  <div class="yl-card">
    <div class="yl-card-header">
      <div class="yl-card-version">
        {{ cardInfo.version}}
      </div>
      <div class="yl-card-time">
        {{ cardInfo.time }}
      </div>
    </div>
    <div class="yl-card-description">
      {{ cardInfo.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "YlCard",
  props: {
    cardInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped lang='less'>
.yl-card {
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

.yl-card-header {
  padding: 12px 20px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  justify-content: space-between;
}
.yl-card-description {
  padding: 12px 20px;
}

.yl-card:hover {
  opacity: .8;
  border: 1px solid #cccccc;
}

.yl-card:active {
  opacity: 1;
}

</style>
