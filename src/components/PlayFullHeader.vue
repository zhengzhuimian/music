<template>
  <div @click="$emit('show-play-bar')" class="header">
    <div class="triangle"></div>
    <span v-if="currentMusic.al">{{ currentMusic.al.name }}</span>
    <span v-else>{{ currentMusic.name }}</span>
  </div>
</template>

<script>
export default {
  props: ["currentMusic"],
};
</script>

<style lang="less" scoped>
.header {
  color: white;
  font-size: 22px;
  line-height: 56px;
  text-align: center;
  
  .triangle {
    border: solid 0.3rem #fff;
    position: absolute;
    left: 12px;
    top: 28px;
    margin-top: -0.8rem;
    display: block;
    content: " ";
    width: 1.2rem;
    height: 1.2rem;
    border-top: none;
    border-right: none;
    transform: rotate(45deg);
  }
  span {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>