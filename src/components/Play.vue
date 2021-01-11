<template>
  <div class="play" :class="{ paused: paused }">
    <audio
      :src="
        'https://music.163.com/song/media/outer/url?id=' +
        currentMusic.id +
        '.mp3'
      "
      autoplay
      ref="audio"
      style="width: 100%; height: 40px"
    ></audio>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__slideInDown"
    >
      <div
        class="play-bar"
        v-show="currentMusic"
        @click="isShowPlayBar = false"
      >
        <div>
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
        <div class="title">
          <span v-if="currentMusic.al">{{ currentMusic.al.name }}</span>
          <span v-else>{{ currentMusic.name }}</span>
        </div>
        <div class="collect" @click.stop="collect">
          <svg
            t="1610335276459"
            class="icon"
            viewBox="0 0 1139 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1980"
            width="32"
            height="32"
          >
            <path
              d="M889.018182 193.163636c-41.890909-46.545455-97.745455-69.818182-162.909091-69.818181-48.872727 0-97.745455 16.290909-144.290909 46.545454-11.636364 6.981818-13.963636 20.945455-6.981818 32.581818 6.981818 11.636364 20.945455 13.963636 32.581818 6.981818 37.236364-25.6 76.8-39.563636 118.690909-39.563636 51.2 0 95.418182 18.618182 128 55.854546 39.563636 44.218182 58.181818 109.381818 51.2 179.2-9.309091 104.727273-74.472727 302.545455-393.309091 446.836363C193.163636 707.490909 128 509.672727 118.690909 404.945455c-6.981818-69.818182 11.636364-134.981818 51.2-179.2 32.581818-34.909091 76.8-55.854545 128-55.854546 116.363636 0 195.490909 114.036364 195.490909 116.363636 6.981818 11.636364 20.945455 13.963636 32.581818 6.981819 11.636364-6.981818 13.963636-20.945455 6.981819-32.581819-4.654545-4.654545-93.090909-137.309091-235.054546-137.30909-65.163636 0-121.018182 23.272727-162.909091 69.818181-48.872727 53.527273-72.145455 132.654545-62.836363 214.109091 11.636364 116.363636 81.454545 335.127273 430.545454 488.727273 2.327273 2.327273 6.981818 2.327273 9.309091 2.327273 4.654545 0 6.981818 0 9.309091-2.327273 349.090909-153.6 418.909091-372.363636 430.545454-488.727273 9.309091-81.454545-13.963636-160.581818-62.836363-214.109091z"
              fill="#707070"
              p-id="1981"
            ></path>
          </svg>
        </div>
        <div class="control" @click.stop="togglePlayState">
          <canvas ref="circle" width="40" height="40"></canvas>
          <span class="icon"></span>
        </div>
      </div>
    </transition>

    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeInUpBig"
      leave-active-class="animate__animated animate__backOutDown"
    >
      <div class="play-full" v-if="!isShowPlayBar">
        <div
          class="mask"
          :style="{ backgroundImage: `url('${currentMusic.picUrl}')` }"
        ></div>
        <PlayFullHeader
          @show-play-bar="isShowPlayBar = true"
          :currentMusic="currentMusic"
        />
        <template>
          <!-- 歌词 -->
          <PlayFullLyric
            v-if="isShowLyric"
            @toggle-show-lyric="isShowLyric = !isShowLyric"
            :currentMusic="currentMusic"
            :lyric="lyric"
            :currentTime="currentTime"
          />
          <!-- 图标 -->
          <PlayFullChart
            v-else
            @toggle-show-lyric="isShowLyric = !isShowLyric"
            @toggle-icon="togglePlayState"
            :paused="paused"
            :currentMusic="currentMusic"
          />
        </template>

        <!-- 播放条 -->
        <PlayFullFooter
          v-bind:currentTime="currentTime"
          v-bind:duration="duration"
          :paused="paused"
          @update:currentTime="$refs.audio.currentTime = $event"
          @toggle-icon="togglePlayState"
          @update:next-song="playNext"
          @update:last-song="lastIndex"
          :schema="schema"
          @update:schema="schema = $event"
        />
      </div>
    </transition>
  </div>
</template>


<script>
import PlayFullHeader from "@/components/PlayFullHeader.vue";
import PlayFullChart from "@/components/PlayFullChart.vue";
import PlayFullLyric from "@/components/PlayFullLyric.vue";
import PlayFullFooter from "@/components/PlayFullFooter.vue";
export default {
  props: ["currentMusic", "playlist", "currentIndex"],
  components: {
    PlayFullHeader,
    PlayFullChart,
    PlayFullLyric,
    PlayFullFooter,
  },
  data: function () {
    return {
      // 当前播放状态
      paused: null,
      // 歌曲的总时长
      duration: 0,
      // 当前歌曲播放的时间
      currentTime: 0,
      isShowLyric: false,
      isShowPlayBar: true,
      lyric: [],
      // 播放模式
      schema: 1,
      // 收藏
      collectSong: [],
    };
  },
  created() {
    this.collectSong.push(window.localStorage.getItem("collectSong"));
  },
  mounted() {
    this.$refs.audio.addEventListener("pause", () => {
      this.paused = true;
    });
    this.$refs.audio.addEventListener("play", () => {
      this.paused = false;
    });

    // 歌曲的总时长
    this.$refs.audio.addEventListener("durationchange", () => {
      // console.log(this.duration);
      this.duration = this.$refs.audio.duration;
    });
    // 当前歌曲到几秒
    this.$refs.audio.addEventListener("timeupdate", () => {
      this.currentTime = this.$refs.audio.currentTime;
      this.drawCircle(this.currentTime, this.duration);
    });
    // 播放完成下一首条件监听
    this.$refs.audio.addEventListener("ended", () => {
      this.playNext();
    });
  },

  //方法
  methods: {
    // 画圆
    drawCircle: function (n, total) {
      let canvas = this.$refs.circle;
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 50, 50);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
      ctx.arc(20, 20, 18, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.strokeStyle = "#ffe300";
      ctx.arc(
        20,
        20,
        17,
        Math.PI * -0.5,
        Math.PI * ((n / total) * 2 - 0.5),
        false
      );
      ctx.stroke();
      ctx.closePath();
    },

    togglePlayState: function () {
      if (this.paused) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    // 取上个数不重复的随机数
    getRamdon: function (num, max, min) {
      var ramdon = Math.ceil(Math.random() * (max - min + 1) + min) - 1;
      if (ramdon == num) {
        return this.getRamdon(num, max, min);
      } else {
        return ramdon;
      }
    },
    // 下一首播放
    calculateNext: function () {
      // 设置歌曲的播放模式
      let nextIndex;
      if (this.schema == 1) {
        // 循环播放
        if (this.currentIndex < this.playlist.length - 1) {
          nextIndex = this.currentIndex + 1;
        } else {
          nextIndex = 0;
        }
        return nextIndex;
      } else if (this.schema == 2) {
        // 随机模式
        nextIndex = this.getRamdon(
          this.currentIndex,
          this.playlist.length - 1,
          0
        );
        return nextIndex;
      } else if (this.schema == 3) {
        // console.log(this.currentIndex)
        nextIndex = this.currentIndex;
        this.$refs.audio.currentTime = 0;
        return nextIndex;
      }
    },
    playNext: function () {
      let ni = this.calculateNext();

      this.$emit("update:music", {
        item: this.playlist[ni],
        index: ni,
      });
    },
    // 上一首
    lastIndex: function () {
      let pre;
      if (this.schema == 1) {
        // 循环播放
        if (this.currentIndex > 0) {
          pre = this.currentIndex - 1;
        } else {
          pre = this.playlist.length - 1;
        }
      } else if (this.schema == 2) {
        // 随机播放
        pre = this.getRamdon(this.currentIndex, this.playlist.length - 1, 0);
      } else {
        // console.log(this.currentIndex)
        pre = this.currentIndex;
        this.$refs.audio.currentTime = 0;
      }

      this.$emit("update:music", {
        item: this.playlist[pre],
        index: pre,
      });
    },

    // 截取歌词的字符串
    paresLyric: function (lyric) {
      var patt = /\[\d{2}:\d{2}\.\d{2,3}\]/gi;

      var arr = lyric
        .split("\n")
        .filter((e) => e)
        .map((str) => {
          var time = str.match(patt)[0].replace(/(\[|\])/gi, "");
          var timeArr = time.split(":");
          time = Number(timeArr[0]) * 60 + Number(timeArr[1]);

          var text = str.replace(patt, "");
          return {
            time,
            text,
          };
        });
      return arr;
    },
    // 收藏
    collect: function () {
      // this.collectSong.push(JSON.stringify({id:this.currentMusic.id,name:this.currentMusic.name,picUrl:this.currentMusic.picUrl,al:{name:"111"}}) + "!");
      this.collectSong.push(JSON.stringify(this.currentMusic) + "!");
      window.localStorage.setItem("collectSong", this.collectSong);
    },
  },

  watch: {
    paused: function (n) {
      this.$emit("update:paused", n);
    },
    currentMusic: function (n) {
      // 请求歌词
      this.axios.get("http://music.kele8.cn/lyric?id=" + n.id).then((res) => {
        if (res.data.lrc) {
          this.lyric = this.paresLyric(res.data.lrc.lyric);
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.play {
  &.paused {
    .play-bar {
      img {
        animation-play-state: paused;
      }
      .control {
        span.icon {
          &::before {
            content: "播放";
          }
        }
      }
    }
  }
}
.play-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 48px;
  width: 100%;
  background-color: white;
  display: flex;
  z-index: 3;
  background-color: white;
  box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.15);
  img {
    width: 40px;
    height: 40px;
    margin: 4px;
    border-radius: 50%;
    animation: playing 5s linear infinite;
  }
  .title {
    flex: 1;
    line-height: 50px;
    text-align: center;
  }
  .control {
    margin: 4px;
    position: relative;
    span.icon {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      text-align: center;
      line-height: 35px;
      &::before {
        content: "暂停";
        font-size: 12px;
      }
    }
  }
  .collect {
    height: 48px;
    svg {
      width: 32px;
      height: 32px;
      margin-top: 7px;
    }
  }
}
.play-full {
  height: 100vh;
  position: fixed;
  background: linear-gradient(
    to right,
    rgb(56, 56, 56),
    rgb(95, 95, 95),
    rgb(56, 56, 56)
  );
  width: 100vw;

  top: 0;
  left: 0;
  z-index: 5;
  .mask {
    background: url("http://p1.music.126.net/YEkGgqCanqQ3cR1FAevJfw==/109951165554530175.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(25px) brightness(0.5);
    z-index: -1;
  }
}

@keyframes playing {
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>