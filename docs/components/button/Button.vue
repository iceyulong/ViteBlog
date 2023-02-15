<template>
  <button :class="['yl-button', type ? 'yl-button--' + type : '']">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "YlButton",
  props: {
    type: { type: String, default: 'default' }
  }
}
</script>

<style scoped lang='less'>
.yl-button {
  cursor: pointer;
  border: 1px solid;
  outline: none;
  padding: 12px 20px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  transition: all .3s;
}

.yl-button:hover {
  opacity: .8;
}

.yl-button:active {
  opacity: 1;
}

.yl-button + .yl-button {
  margin-left: 10px;
}

.yl-button--default {
  color: #606266;
  background: #fff;
  border-color: #dcdfe6;
}

.yl-button--primary {
  background: #1890ff;
  border-color: #1890ff;
}

.yl-button--success {
  background: #52c41a;
  border-color: #52c41a;
}

.yl-button--info {
  background: #909399;
  border-color: #909399;
}

.yl-button--warning {
  background: #faad14;
  border-color: #faad14;
}

.yl-button--danger {
  background: #f5222d;
  border-color: #f5222d;
}
</style>
