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
            v-if="love"
            t="1614245799972"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1518"
            width="22"
            height="22"
          >
            <path
              d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z"
              p-id="1519"
              fill="#d81e06"
            ></path>
          </svg>
          <svg
            v-else
            t="1614245799972"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1518"
            width="22"
            height="22"
          >
            <path
              d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z"
              p-id="1519"
              fill="#bfbfbf"
            ></path>
          </svg>
        </div>
        <div class="control" @click.stop="togglePlayState">
          <canvas ref="circle" width="40" height="40"></canvas>
          <span class="icon">
            <!-- 暂停播放按钮 -->
            <div v-if="!paused">
              <svg
                t="1614253531604"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1519"
                width="18"
                height="18"
              >
                <path
                  d="M288 128C270.336 128 256 142.336 256 160l0 768C256 945.664 270.336 960 288 960S320 945.664 320 928l0-768C320 142.336 305.664 128 288 128zM672 128C654.336 128 640 142.336 640 160l0 768c0 17.664 14.336 32 32 32s32-14.336 32-32l0-768C704 142.336 689.664 128 672 128z"
                  p-id="1520"
                ></path>
              </svg>
            </div>
            <div v-else>
              <svg
                style="margin-left='5px'"
                t="1614254563022"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5485"
                width="18"
                height="18"
              >
                <path
                  d="M254.12312913 207.53109189l477.18225737 301.8168285-477.18225737 301.59550816V207.53109189M209.65161982 95.67463759c-5.17647289 0-10.33875811 1.29104431-15.06880352 3.8750249-9.81571995 5.44413934-16.12528442 15.83208016-16.12528534 27.30582275V891.80725251c0 11.16635065 6.16201725 21.62806553 16.12528534 27.21786194 4.72437036 2.5820886 9.81571995 3.72653032 14.9657095 3.72653031 5.8839462 0 11.60615658-1.43764597 16.77127934-4.72437035L831.07426079 535.8006137c9.02406799-5.7373436 14.4672627-15.69966617 14.46726179-26.44039763 0-10.74073147-5.44413934-20.84965569-14.46726177-26.44039669L226.32075158 100.41508761c-5.19444363-3.15998453-10.94029985-4.74045003-16.66913176-4.74045002z"
                  p-id="5486"
                  fill="#8a8a8a"
                ></path>
              </svg>
            </div>
          </span>
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
      love: false,
    };
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

    // 播放暂停
    togglePlayState: function () {
      console.log(this.paused);
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
      this.love = !this.love;
      if (this.love) {
        // 添加到本地内存
        this.collectSong.push(this.currentMusic);
        window.localStorage.setItem(
          "collectSong",
          JSON.stringify(this.collectSong)
        );
      } else {
        // 获取本地收藏的歌曲
        this.collectSong = JSON.parse(
          window.localStorage.getItem("collectSong")
        );
        // 遍历收藏的数据
        this.collectSong.forEach((item, index) => {
          // 找到对应下标删除收藏的某一首歌曲
          if (item.id == this.currentMusic.id) {
            this.collectSong.splice(index, 1);
          }
        });
        // 上传到本地内存
        window.localStorage.setItem(
          "collectSong",
          JSON.stringify(this.collectSong)
        );
      }
    },
  },

  watch: {
    paused: function (n) {
      this.$emit("update:paused", n);
    },

    // 请求歌词和判断爱心高亮
    currentMusic: function (n) {
      this.axios.get("http://music.kele8.cn/lyric?id=" + n.id).then((res) => {
        if (res.data.lrc) {
          this.lyric = this.paresLyric(res.data.lrc.lyric);
        }
      });
      // 初始化爱心状态
      this.love = false;
      // 获取收藏的数据
      let collectSongData = JSON.parse(
        window.localStorage.getItem("collectSong")
      );
      // 判断是否收藏过
      let bool = collectSongData.some((item) => {
        return item.id === this.currentMusic.id;
      });

      // 如果收藏就让爱心高亮
      if (bool) {
        this.love = true;
      }
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
      line-height: 45px;
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