<template>
  <div class="header">
    <div class="triangle" @click="$emit('show-play-bar')">
      <svg
        t="1614413187580"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6394"
        width="26"
        height="26"
      >
        <path
          d="M736 960c-9 0-18.1-3.2-25-9.6L263 535.2c-13.8-12.8-13.8-33.6 0-46.4L711 73.6c13.8-12.8 36.2-12.8 50 0 13.8 12.8 13.8 33.6 0 46.4L338 512l423 392c13.8 12.8 13.8 33.6 0 46.4-6.9 6.4-16 9.6-25 9.6z"
          p-id="6395"
          fill="#bfbfbf"
        ></path>
      </svg>
    </div>
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
    position: absolute;
    left: 10px;
    top: 6px;
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