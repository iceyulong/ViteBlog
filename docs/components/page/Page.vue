<template>
  <div class="yl-page" v-if="showPage">
    <div class="yl-title">
      {{pageInfo.title}}
    </div>
    <slot name="pic"></slot>
    <slot name="des"></slot>
  </div>
</template>

<script>
export default {
  name: "YlPage",
  props: {
    showPage: {
      type: Boolean,
      default: true
    },
    pageInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    /**
     * @name 陈玉龙
     * @Date 2023-02-02 14:50:39
     * @introduction 简述
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     * @return {返回类型说明}
     * @exception [违例类型] [违例类型说明]
     */
  }
}
</script>

<style scoped lang='less'>
.yl-page {
  cursor: pointer;
  padding: 10px;
  outline: none;
  margin-bottom: 20px;
  font-weight: 500;
  transition: all .3s;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #3b4859;
}

.yl-title {
  text-align: center;
  font-size: 18px;
  color: rgb(68, 61, 61);
  margin: 15px 0;
}

.yl-page:hover {
  opacity: .8;
  border: 1px solid #cccccc;
}

.yl-page:active {
  opacity: 1;
}

</style>
