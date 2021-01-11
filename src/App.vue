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

    <!-- <router-view @translate-music="currentMisic = $event" 
    :currentMisic="currentMisic"/> -->

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
  },

  // created() {
  //   console.log(this.$parent);
  // },
  // watch: {
  //   "$parent.msg": function (n) {
  //     console.log(n);
  //   },
  // },
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
.loading {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  // div {
  //   width: 34px;
  //   height: 34px;
  //   background: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?3b29c730f12349abdc07807bac6481c0")
  //     no-repeat;
  //   animation: loading 2s linear infinite;
  //   background-position: 0 -19px;
  // }
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
        background-color: #ffe300;
        display: inline-block;
        transform-origin: center bottom;
        animation: playing 0.6s linear -0.2s infinite alternate-reverse;
        &:first-of-type {
          animation-delay: 0s;
        }
        &:last-of-type {
          animation-delay: 0.4s;
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
