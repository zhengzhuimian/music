<template>
  <div class="hot">
    <!-- 热歌榜 -->
    <div class="hot">
      <div class="hot-box">
        <div class="hoticon"></div>
        <div class="hottime">{{ current }}</div>
      </div>
    </div>

    <ul>
      <HotList
        v-for="(song, index) in recommedns"
        :key="index"
        :item="song"
        :index="index"
        :currentMusic="currentMusic"
        :paused="paused"
        @update:hotmusic="$emit('update:hotmusic', $event)"
        @update:playlist="$emit('update:playlist', recommedns)"
      ></HotList>
    </ul>
    <div class="view" v-if="accomplish">
      <div @click="view" v-if="examine">查看更多</div>
      <div v-else-if="!examine">加载中...</div>
    </div>
    <div class="view" v-else>
      <div>已加载全部</div>
    </div>
    <div class="OpenApp">打开APP，发现更多好音乐 ></div>
  </div>
</template>
<script>
import HotList from "@/components/HotList.vue";

export default {
  props: ["currentMusic", "paused"],
  data: function () {
    return {
      recommedns: [],
      // 当前日期
      current: "",
      // 加载页数
      num: 1,
      examine: true,
      // 加载全部
      accomplish: true,
    };
  },
  components: {
    HotList,
  },
  computed: {},
  created() {
    this.$root.isShowLoading = true;
    this.axios.get("http://music.kele8.cn/top/list?idx=1").then((res) => {
      this.axios
        .get(
          "http://music.kele8.cn/song/detail?ids=" +
            res.data.playlist.trackIds
              .slice(0, 20)
              .map((e) => e.id)
              .join()
        )
        .then((res) => {
          this.recommedns = res.data.songs;
        })
        .finally(() => {
          this.$root.isShowLoading = false;
        });
    });

    // 获取当前月份，日数
    let getMonth = new Date().getMonth() + 1;
    let getDate = new Date().getDate();
    this.current = "更新日期:" + getMonth + "月" + getDate + "日";
  },
  methods: {
    // 加载更多歌曲
    view: function () {
      this.examine = false;
      this.num++;
      if (this.num < 4) {
        this.axios.get("http://music.kele8.cn/top/list?idx=1").then((res) => {
          // console.log(res.data.playlist.trackIds);
          this.axios
            .get(
              "http://music.kele8.cn/song/detail?ids=" +
                res.data.playlist.trackIds
                  .slice(0, this.num * 20)
                  .map((e) => e.id)
                  .join()
            )
            .then((res) => {
              this.recommedns = res.data.songs;
            })
            .finally(() => {
              this.examine = true;
               if (this.num == 3) {
        this.accomplish = false;
      }
            });
        });
      }
     
    },
  },
};
</script>
<style lang="less" scoped>
.hot {
  height: 172px;
  background: url("https://s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=")
    no-repeat;
  background-size: cover;
  .hot-box {
    padding-left: 20px;
    padding-top: 35px;
    .hoticon {
      width: 142px;
      height: 67px;
      background: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=") -24px -30px
        no-repeat;
      background-size: 166px 97px;
    }
    .hottime {
      margin-top: 10px;
      color: hsla(0, 0%, 100%, 0.8);
      font-size: 12px;
    }
  }
  .OpenApp {
    line-height: 38px;
    border: 1px solid #1d82fe;
    border-radius: 38px;
    font-size: 16px;
    color: #1d82fe;
    margin: 15px 37px 5px;
    text-align: center;
  }
  .view {
    color: #aaaaaa;
    padding-top: 10px;
    text-align: center;
  }
}
</style>

