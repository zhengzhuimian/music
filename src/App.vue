<template>
  <div id="app">
    <div class="loading" v-show="$parent.isShowLoading">
      <!-- <div></div> -->
      <span class="playing">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
    <!-- 播放器组件 -->
    <Play
      :currentMusic="currentMusic"
      @update:paused="paused = $event"
      :playlist="playlist"
      :currentIndex="currentIndex"
      @update:music="
        currentMusic = $event.item;
        currentIndex = $event.index;
      "
    />

    <HomeNav v-if="$route.meta.isShowNav" />

    <!-- keep-alive会缓存，不会再次触发 -->
    <keep-alive>
      <router-view
        @update:music="
          currentMusic = $event.item;
          currentIndex = $event.index;
        "
        @update:playlist="playlist = $event"
        v-bind:currentMusic="currentMusic"
        v-bind:paused="paused"
        @update:hotmusic="
          currentMusic = $event.item;
          currentIndex = $event.index;
        "
      />
    </keep-alive>
  </div>
</template>

<script>
import HomeNav from "@/components/HomeNav.vue";
import Play from "@/components/Play.vue";
export default {
  data: function () {
    return {
      currentMusic: "",
      paused: null,
      hh: "",
      playlist: [],
      currentIndex: 0,
    };
  },
  components: {
    HomeNav,
    Play,
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
:root {
  --animate-duration: 600ms;
  // --animate-delay: 0.9s;
}
body{
  background-color:#fbfcfd
}
.loading {
  position: fixed;
  top: 45%;
  left: 50%;
  margin-left: -18px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .playing {
    width: 35px;
      display: flex;
      margin-right: 10px;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 3px;
      i {
        width: 8px;
        height: 29px;
        background-color: #1d82fe;
        display: inline-block;
        transform-origin: center bottom;
        animation: playing 0.4s linear -0.2s infinite alternate-reverse;
        &:first-of-type {
          animation-delay: 0s;
        }
        &:last-of-type {
          animation-delay: 0.2s;
        }
      }
}
}
@keyframes loading {
  form {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes playing {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0.2);
  }
}
</style>
