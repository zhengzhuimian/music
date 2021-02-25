<template>
  <li class="song-item"  @click="
      $emit('update:hotmusic', { item, index });
       $emit('update:playlist');
    ">
    <div>
       <div class="serial itemcolor" v-if="index < 3">{{index + 1}}</div>
        <div class="serial" v-else>{{index+1}}</div>
    </div>
   
    <div class="info">

      <h5>{{ item.name }}</h5>
      <p>
        <i></i>
        <span v-for="(artist, index) in item.ar" :key="index">
          <template v-if="index"> / </template>
          {{ artist.name }}
        </span>
        &nbsp;-&nbsp;{{ item.al.name }}
      </p>
    </div>
    <div class="icon">
      <span
        class="playing"
        :class="{ paused: paused }"
       v-if="currentMusic && currentMusic.id === item.id"
      >
        <i></i>
        <i></i>
        <i></i>
      </span>
      <span v-else class="play"></span>
    </div>
  </li>
</template>

<script>
export default {
  props: ["item", "index","currentMusic", "paused"],
};
</script>

<style scoped lang="less">
li.song-item {
  display: flex;
  font-size: 12px;
  height: 45px;
  border-bottom: 1px solid #f1f1f2;
  margin: 5px 0 5px 10px;
  .itemcolor{
    color: red;
  }
  .serial{
    height: 44px;
    width: 30px;
    font-size: 17px;
    text-align: center;
    line-height: 44px;
    
  }
  h5 {
    font-size: 17px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .info {
    flex: 1;
    width: 0;
    p {
      color: #aaaaaa;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: 4px;
      i {
        background: url("https://s3.music.126.net/mobile-new/img/index_icon_3x.png?49a82fee3e0fc602e9c8b25df2bda159=")
          no-repeat;
        display: inline-block;
        width: 12px;
        height: 8px;
        margin-right: 4px;
        background-size: 166px 97px;
        margin-top: 3px;
      }
    }
  }
  .icon {
    width: 28px;
    height: 50px;
    margin-top: 3px;
    .playing {
      display: flex;
      margin-right: 10px;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 3px;
      i {
        width: 5px;
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
      &.paused {
        i {
          animation-play-state: paused;
        }
      }
    }
  }
}
.play {
  width: 22px;
  height: 48px;
  display: inline-block;
  background: url("https://s3.music.126.net/mobile-new/img/index_icon_3x.png?49a82fee3e0fc602e9c8b25df2bda159=")
    no-repeat;
  background-position: -24px 8px;
  background-size: 166px 97px;
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