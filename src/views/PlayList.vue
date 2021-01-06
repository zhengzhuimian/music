<template>
  <div class="PlayList" v-if="flag">
    <div class="describe-box">
      <div
        class="describe-gather"
        v-bind:style="{
          'background-image': 'url(' + playlist.coverImgUrl + ')',
        }"
      ></div>
      <div class="describe">
        <div class="describeImg">
          <img :src="playlist.coverImgUrl" alt="" />
          <span>歌单</span>
        </div>
        <div class="text">
          <p>{{ playlist.name }}</p>
          <div class="portrait">
            <img :src="playlist.creator.avatarUrl" alt="" />
            {{ playlist.creator.nickname }}
          </div>
        </div>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <!-- <div class="u-smtitle">
        歌曲列表
    </div> -->
    <!-- 歌曲组件 -->

    <ul>
      <SingleSong
        v-for="(item, index) in playItem"
        :key="index"
        :item="item"
        :index="index"
        :currentMusic="currentMusic"
        :paused="paused"
        @update:hotmusic="$emit('update:hotmusic', $event)"
        @update:playlist="$emit('update:playlist', playItem)"
      />
    </ul>
    <!-- <div class="OpenApp">打开APP，发现更多好音乐 ></div> -->

    <!-- 精彩评论 -->
    <div>
      <CommentTitle>精彩评论</CommentTitle>
      <ul>
        <Comment
          v-for="(item, index) in wonderful"
          :key="index"
          :item="item"
        ></Comment>
      </ul>
    </div>
  </div>
</template>

<script>
import SingleSong from "@/components/SingleSong.vue";
import Comment from "@/components/Comment.vue";
import CommentTitle from "@/components/CommentTitle.vue";

export default {
  props: ["currentMusic", "paused"],
  data: function () {
    return {
      playlist: [],
      playItem: [],
      id: null,
      flag: false,
      // 精彩评论
      wonderful: [],
    };
  },
  components: {
    SingleSong,
    Comment,
    CommentTitle,
  },

  created() {
    this.id = this.$route.query.id;
    // console.log(this.id)
    this.axios
      .get("http://music.kele8.cn/comment/playlist?id=" + this.id)
      .then((res) => {
        this.wonderful = res.data.hotComments;
      });
  },
  watch: {
    id: function (n) {
       this.$root.isShowLoading = true;
      if (n != undefined) {
        this.axios
          .get("http://music.kele8.cn/playlist/detail?id=" + n)
          .then((res) => {
            // console.log("1", res);
            this.playlist = res.data.playlist;
            this.axios
              .get(
                "http://music.kele8.cn/song/detail?ids=" +
                  res.data.playlist.trackIds
                    .slice(0, 20)
                    .map((e) => e.id)
                    .join()
              )
              .then((res) => {
                // console.log(res.data.songs);
                this.playItem = res.data.songs;
                this.flag = true;
              }).finally(()=>{
                 this.$root.isShowLoading = false;
              });
          });
        this.axios
          .get("http://music.kele8.cn/comment/playlist?id=" + n)
          .then((res) => {
            this.wonderful = res.data.hotComments;
            // console.log(res.data.hotComments);
          });
        // console.log(n);
      }
    },
  },
  // 修改路由的时候触发
  beforeRouteUpdate(to, from, next) {
    this.id = to.query.id;
    next();
  },
  activated() {
    this.id = this.$route.query.id;
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.PlayList {
  .describe-box {
    height: 206px;
    width: 100%;

    overflow: hidden;
    position: relative;
    .describe-gather {
      background-size: cover;
      background-position: 50%;

      height: 170px;
      filter: blur(8px);
      background-size: cover;
      background-position: 50%;
      transform: scale(1.5);
      &:after {
        content: "";
        background-color: rgba(0, 0, 0, 0.25);
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
      }
    }
    .describe {
      display: flex;
      position: absolute;
      top: 32px;
      left: 20px;
      .describeImg {
        width: 145px;
        height: 145px;

        img {
          width: 100%;
          height: 100%;
        }
        span {
          position: absolute;
          z-index: 3;
          top: 10px;
          left: 0;
          padding: 0 8px;
          height: 17px;
          color: #fff;
          font-size: 9px;
          text-align: center;
          line-height: 17px;
          background-color: rgba(217, 48, 48, 0.8);
          border-top-right-radius: 17px;
          border-bottom-right-radius: 17px;
        }
      }
      .text {
        font-size: 17px;
        color: white;
        margin-left: 16px;
        p {
          height: 44px;
        }
        .portrait {
          margin-top: 20px;
          color: #bcc3ca;
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .u-smtitle {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 12px;
    color: #666;
    background-color: #eeeff0;
  }
  .OpenApp {
    line-height: 38px;
    border: 1px solid #d33a31;
    border-radius: 38px;
    font-size: 16px;
    color: #d33a31;
    margin: 15px 37px 5px;
    text-align: center;
  }
}
</style>