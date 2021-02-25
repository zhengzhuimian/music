<template>
  <div @click="$emit('toggle-show-lyric')">
    <div class="guide" :class="{ suspend: paused, player: !paused }">
      <img
        src="https://s3.music.126.net/mobile-new/img/needle-ab.png?4b81da043356110081e5ccaed2e6f2ad="
        alt=""
      />
    </div>
    <div class="m-song-disc" :class="{ paused: paused }">
      <div class="icon" v-if="paused" @click.stop="$emit('toggle-icon')">
        <img
          src="http://s3.music.126.net/mobile-new/img/play_btn_3x.png?4da7e135b7c089f3777ec5cdbbb3a8d8="
          alt=""
        />
      </div>
      <div class="m-song-rollwrap">
        <span v-if="currentMusic.al"
          ><img :src="currentMusic.al.picUrl"
        /></span>
        <span v-else-if="currentMusic.picUrl"
          ><img :src="currentMusic.picUrl"
        /></span>
        <span v-else
          ><img
            src="https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["paused", "currentMusic"],
};
</script>

<style lang="less" scoped>
.guide {
  width: 84px;
  height: 136px;
  position: absolute;
  top: 52px;
  left: 50%;
  margin-left: -13px;
  z-index: 999;
  transform-origin: left top;
  &.suspend {
    animation: suspend 0.5s linear;
    animation-fill-mode: forwards;
  }
  &.player {
    animation: player 0.5s linear;
    animation-fill-mode: forwards;
  }
}
.m-song-disc {
  width: 342px;
  height: 342px;
  background: url("http://s3.music.126.net/mobile-new/img/disc-plus.png?b700b62e1971b351dcb8b8ce1c9ceea3=");
  background-size: contain;
  margin: 0 auto;
  margin-top: 36px;
  position: relative;
  animation: rotation 12s linear infinite;

  .m-song-rollwrap {
    width: 212px;
    height: 212px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -106px;
    margin-left: -106px;
    z-index: 2;
  }
  .icon {
    width: 64px;
    height: 64px;
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    margin-top: -32px;
    margin-left: -32px;
  }
  &.paused {
    animation-play-state: paused;
  }
}

@keyframes rotation {
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes suspend {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-36deg);
  }
}
@keyframes player {
  0% {
    transform: rotate(-36deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>