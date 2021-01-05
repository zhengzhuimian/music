<template>
  <div class="play-full-footer">
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
    <div class="calculatorLeft">{{ present }}</div>
    <div class="calculatorRight">{{ total }}</div>
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
          style="background-position: -93px -340px;"
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
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentTime", "duration", "paused", "schema"],
  data: function () {
    return {
      // 歌曲的总时长
      total: 0,
      // 当前歌曲时间
      present: 0,
    };
  },
  methods: {
    getValue: function (e) {
      this.$emit("update:currentTime", e.target.value);
    },
  },
  created() {
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
  .calculatorLeft {
    position: absolute;
    top: -54px;
    left: 6px;
  }
  .calculatorRight {
    position: absolute;
    top: -54px;
    right: 6px;
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
      background: #ec4141;
    }
  }
  // 底下箭头部分
  .arrows {
    width: 100%;
    margin: 0 auto;
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
      span {
        width: 25px;
        height: 25px;
        display: inline-block;
        vertical-align: middle;
        background: url("https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865")
          no-repeat;

        background-position: -88px -158px;
      }
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