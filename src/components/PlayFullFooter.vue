<template>
  <div class="play-full-footer">
    <div class="option">
      <!-- 爱心高亮 -->
      <div @click="collect">
        <svg
          v-if="love"
          t="1614411392486"
          class="icon"
          viewBox="0 0 1169 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3289"
          width="24"
          height="24"
        >
          <path
            d="M1066.669021 101.025244A351.53737 351.53737 0 0 0 584.675626 90.428324a351.53737 351.53737 0 0 0-481.992394 10.59692 344.227425 344.227425 0 0 0 0 490.031335L506.476211 991.194585a109.62718 109.62718 0 0 0 156.40083 0l403.79198-399.772009a344.227425 344.227425 0 0 0 0-490.397332z m-52.255609 438.50672L610.621432 939.669971a36.542727 36.542727 0 0 1-51.889612 0l-404.157976-400.137007a271.874966 271.874966 0 0 1 0-386.983105 277.355925 277.355925 0 0 1 380.405154-6.211954l49.697628 42.753681 49.331631-42.753681a277.355925 277.355925 0 0 1 380.405155 8.03894 271.874966 271.874966 0 0 1 0 385.155119z"
            fill="#d81e06"
            p-id="3290"
          ></path>
          <path
            d="M338.016471 182.879632a155.304838 155.304838 0 0 0-155.304838 155.304838 18.270863 18.270863 0 0 0 36.541727 0A118.762112 118.762112 0 0 1 338.017471 219.422359a18.270863 18.270863 0 0 0 0-36.542727z"
            fill="#d81e06"
            p-id="3291"
          ></path>
        </svg>
        <svg
          v-else
          t="1614411392486"
          class="icon"
          viewBox="0 0 1169 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3289"
          width="24"
          height="24"
        >
          <path
            d="M1066.669021 101.025244A351.53737 351.53737 0 0 0 584.675626 90.428324a351.53737 351.53737 0 0 0-481.992394 10.59692 344.227425 344.227425 0 0 0 0 490.031335L506.476211 991.194585a109.62718 109.62718 0 0 0 156.40083 0l403.79198-399.772009a344.227425 344.227425 0 0 0 0-490.397332z m-52.255609 438.50672L610.621432 939.669971a36.542727 36.542727 0 0 1-51.889612 0l-404.157976-400.137007a271.874966 271.874966 0 0 1 0-386.983105 277.355925 277.355925 0 0 1 380.405154-6.211954l49.697628 42.753681 49.331631-42.753681a277.355925 277.355925 0 0 1 380.405155 8.03894 271.874966 271.874966 0 0 1 0 385.155119z"
            fill="#bfbfbf"
            p-id="3290"
          ></path>
          <path
            d="M338.016471 182.879632a155.304838 155.304838 0 0 0-155.304838 155.304838 18.270863 18.270863 0 0 0 36.541727 0A118.762112 118.762112 0 0 1 338.017471 219.422359a18.270863 18.270863 0 0 0 0-36.542727z"
            fill="#bfbfbf"
            p-id="3291"
          ></path>
        </svg>
      </div>
      <div>
        <svg
          t="1614411541310"
          class="icon"
          viewBox="0 0 1026 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4307"
          width="22"
          height="22"
        >
          <path
            d="M514.142974 0.036136a43.277081 43.277081 0 0 1 45.008164 45.008164v543.992907L714.083087 434.754414a45.873706 45.873706 0 0 1 34.40528-12.766739 53.230809 53.230809 0 0 1 34.188893 12.766739 45.008164 45.008164 0 0 1 12.766739 34.405279 51.716112 51.716112 0 0 1-12.766739 34.188894L546.168013 735.746511a44.791779 44.791779 0 0 1-34.188893 12.983125 52.581653 52.581653 0 0 1-34.40528-12.983125L246.257843 501.184733a48.903101 48.903101 0 0 1-12.766739-34.188894 43.277081 43.277081 0 0 1 45.008164-45.008164 52.798039 52.798039 0 0 1 34.188894 12.766739l154.282793 154.282793v-540.963511a43.277081 43.277081 0 0 1 12.766739-33.106967A46.090091 46.090091 0 0 1 514.142974 0.036136z m466.959702 653.267536a43.277081 43.277081 0 0 1 44.791779 45.008164v186.307833a129.831243 129.831243 0 0 1-40.680456 98.455359A132.211482 132.211482 0 0 1 887.191411 1023.97187H139.147068a132.427867 132.427867 0 0 1-98.455359-40.896842A135.457263 135.457263 0 0 1 0.011253 884.619669v-186.307833a44.575393 44.575393 0 0 1 12.766739-32.241425 49.335872 49.335872 0 0 1 34.405279-12.766739 43.277081 43.277081 0 0 1 45.008164 45.008164v186.307833a43.277081 43.277081 0 0 0 12.766739 32.241426 43.277081 43.277081 0 0 0 32.241425 13.63228H887.191411a43.277081 43.277081 0 0 0 45.008164-45.008164v-187.173375a44.575393 44.575393 0 0 1 12.766739-32.241425 64.915621 64.915621 0 0 1 36.136362-12.766739z"
            p-id="4308"
            fill="#bfbfbf"
          ></path>
        </svg>
      </div>
    </div>
    <div class="progress">
      <input
        type="range"
        min="0"
        :max="duration"
        step="1"
        @input="getValue"
        :value="currentTime"
      />
      <span :style="{ width: (currentTime / duration) * 100 + '%' }"></span>
    </div>
    <div class="calculatorLeft" v-if="present">{{ present }}</div>
    <div class="calculatorRight" v-if="present">{{ total }}</div>
    <div class="arrows">
      <!-- 模式按钮 -->
      <div class="schema">
        <span
          v-if="schema == 1"
          style="background-position: -33px -340px"
          @click="$emit('update:schema', 2)"
        ></span>
        <span
          v-else-if="schema == 2"
          style="background-position: -66px -244px"
          @click="$emit('update:schema', 3)"
        ></span>
        <span
          v-else
          style="background-position: -93px -340px"
          @click="$emit('update:schema', 1)"
        ></span>
      </div>
      <!-- 左箭头 -->
      <div class="arrowsIcon arrowsLeft" @click="$emit('update:last-song')">
        <span></span>
      </div>
      <!-- 播放暂停 -->
      <div class="arrowsIcon arrowsMiddle" @click.stop="$emit('toggle-icon')">
        <span style="background-position: 0 0" v-if="paused"> </span>
        <span style="background-position: 0 -60px" v-else> </span>
      </div>
      <!-- 右箭头 -->
      <div class="arrowsIcon arrowsRight" @click="$emit('update:next-song')">
        <span></span>
      </div>
      <div class="share">
        <svg
          t="1614414658879"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9585"
          width="19"
          height="19"
        >
          <path
            d="M192 224a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64h64a64 64 0 0 1 64 64v64z m0 320a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64h64a64 64 0 0 1 64 64v64z m0 320a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64h64a64 64 0 0 1 64 64v64z m832-640a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64h576a64 64 0 0 1 64 64v64z m0 320a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64h576a64 64 0 0 1 64 64v64z m0 320a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64h576a64 64 0 0 1 64 64v64z"
            fill="#bfbfbf"
            p-id="9586"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentTime", "duration", "paused", "schema", "currentMusic"],
  data: function () {
    return {
      // 歌曲的总时长
      total: 0,
      // 当前歌曲时间
      present: "00:00:00",
      // 爱心高亮
      love: false,
      // 收藏歌曲
      collectSong: [],
    };
  },
  methods: {
    getValue: function (e) {
      this.$emit("update:currentTime", e.target.value);
    },
    // 时间转换方法
    time: function () {
      let minuteTime =
        parseInt(this.duration / 60) < 10
          ? "0" + parseInt(this.duration / 60)
          : parseInt(this.duration / 60);
      let secondTime =
        parseInt(this.duration % 60) < 10
          ? "0" + parseInt(this.duration % 60)
          : parseInt(this.duration % 60);
      let hourTime =
        parseInt(minuteTime / 60) < 10
          ? "0" + parseInt(minuteTime / 60)
          : parseInt(minuteTime / 60);
      this.total = hourTime + ":" + minuteTime + ":" + secondTime;
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
  created() {
    // 时间转换
    this.time();
  },
  watch: {
    currentTime: function (n) {
      if (n == "0") {
        this.present = "00:00:00";
      } else {
        let minuteTime =
          parseInt(n / 60) < 10 ? "0" + parseInt(n / 60) : parseInt(n / 60);
        let secondTime =
          parseInt(n % 60) < 10 ? "0" + parseInt(n % 60) : parseInt(n % 60);
        let hourTime =
          parseInt(minuteTime / 60) < 10
            ? "0" + parseInt(minuteTime / 60)
            : parseInt(minuteTime / 60);

        this.present = hourTime + ":" + minuteTime + ":" + secondTime;
      }
    },
    duration: function (n) {
      let minuteTime =
        parseInt(n / 60) < 10 ? "0" + parseInt(n / 60) : parseInt(n / 60);
      let secondTime =
        parseInt(n % 60) < 10 ? "0" + parseInt(n % 60) : parseInt(n % 60);
      let hourTime =
        parseInt(minuteTime / 60) < 10
          ? "0" + parseInt(minuteTime / 60)
          : parseInt(minuteTime / 60);
      this.total = hourTime + ":" + minuteTime + ":" + secondTime;
    },
    currentMusic: function () {
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

<style lang="less">
.play-full-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 10px;
  color: white;
  .option {
    position: relative;
    top: -65px;
    left: 50%;
    margin-left: -60px;
    display: flex;
    div {
      width: 60px;
      text-align: center;
    }
  }
  .calculatorLeft {
    position: absolute;
    top: -27px;
    left: 7px;
  }
  .calculatorRight {
    position: absolute;
    top: -27px;
    right: 7px;
  }
  .progress {
    width: 70%;
    height: 6px;
    background: linear-gradient(to right, lightblue, lightcoral);
    position: relative;
    top: -50px;
    left: 0;
    margin: 0 auto;
    border-radius: 3px;
    input {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      opacity: 0;
    }
    span {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: black;
      border-radius: 3px;
      background: #d8cc6b;
    }
  }
  // 底下箭头部分
  .arrows {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    text-align: center;
    .schema {
      flex: 1;
      span {
        width: 25px;
        height: 25px;
        display: inline-block;
        vertical-align: middle;
        background: url("https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865")
          no-repeat;
      }
    }
    .share {
      flex: 1;
      margin-top: 6px;
    }
    .arrowsIcon {
      flex: 1;
      span {
        display: inline-block;
        width: 36px;
        height: 36px;
        background: url("https://www.kugou.com/yy/static/images/play/btn.png");
      }
    }

    .arrowsLeft {
      span {
        background-position: 0 -143px;
      }
    }
    .arrowsMiddle {
      span {
        width: 56px;
        height: 56px;

        vertical-align: middle;
        position: relative;
        top: -12px;
      }
    }
    .arrowsRight {
      span {
        background-position: -144px -143px;
      }
    }
  }
}
</style>