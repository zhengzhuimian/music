<template>
  <div class="CommentTitle">
    <h4><slot></slot></h4>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.CommentTitle {
  height: 23px;
  line-height: 23px;
  h4 {
    padding: 0 10px;
    color: #666;
    font-size: 12px;
    font-weight: 400;
    background: rgba(0, 0, 0, 0.05);
  }
}
</style>