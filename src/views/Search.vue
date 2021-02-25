<template>
  <div class="search">
    <div class="loading" v-show="sw">
      <span class="playing">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
    <div class="input">
      <div class="inputcover">
        <i></i>
        <input
          type="text"
          @input="inputing = true"
          placeholder="搜索歌曲、歌手、专辑"
          v-model.trim="text"
          @keyup.enter="SearchResult(text)"
        />
        <span @click="text = ''"></span>
      </div>
    </div>
    <!-- 热门搜索 -->
    <HotSearch
      :HotSearch="HotSearch"
      @update:Hot-Search="feedback"
      v-if="!inputing && !text"
    />
    <!-- 历史记录 -->
    <ul v-if="!inputing && !text">
      <HistoryRecord
        v-for="(item, index) in history"
        :key="index"
        :index="index"
        :item="item"
        @update:del="del"
        @update:history-song="HistorySong"
        @click.native="sw = false"
      ></HistoryRecord>
    </ul>

    <!-- 实时搜索 -->
    <HotWatchResult
      v-if="inputing && Realtime.length"
      :text="text"
      :Realtime="Realtime"
      @update:watch-result="watchresult"
    />

    <!-- 搜索结果 -->
    <template v-if="!inputing && text">
      <SearchSong
        v-for="(song, index) in SearchSong"
        :item="song"
        :key="index"
        :index="index"
        :currentMusic="currentMusic"
        :paused="paused"
        @update:music="$emit('update:music', $event)"
        @update:playlist="$emit('update:playlist', SearchSong)"
      ></SearchSong>
      <div class="OpenApp">打开APP，发现更多好音乐 ></div>
    </template>
  </div>
</template>

<script>
import SearchSong from "@/components/SearchSong.vue";
import HotSearch from "@/components/HotSearch.vue";
import HotWatchResult from "@/components/HotWatchResult.vue";
import HistoryRecord from "@/components/HistoryRecord.vue";

export default {
  props: ["currentMusic", "paused"],
  components: {
    SearchSong,
    HotSearch,
    HotWatchResult,
    HistoryRecord,
  },
  data() {
    return {
      SearchSong: [],
      text: "",
      // 热门搜索
      HotSearch: [],
      // 实时搜索
      Realtime: [],
      inputing: false,
      // 历史记录
      history: [],
      // loading开关
      sw:null
    };
  },
  created() {
    this.$root.isShowLoading = true;
    this.axios
      .get("http://music.kele8.cn/search/hot")
      .then((res) => {
        this.HotSearch = res.data.result.hots;
      })
      .finally(() => {
        this.$root.isShowLoading = false;
        // this.sw = false
      });

    // 历史记录
    if (window.localStorage.getItem("history")) {
      this.history = window.localStorage.getItem("history").split(",");
    }
  },
  methods: {
    SearchResult: function (n) {
      this.axios
        .get("http://music.kele8.cn/search?keywords=" + n)
        .then((res) => {
          this.SearchSong = res.data.result.songs;
        }).finally(()=>{
          this.sw = false
        });
      this.inputing = false;

      // 添加历史记录
      this.history.unshift(n);

      window.localStorage.setItem("history", this.history);
    },
    feedback: function (n) {
      this.text = n;
      this.SearchResult(n);
    },
    watchresult: function (n) {
      this.text = n;
      this.inputing = false;
      this.SearchResult(n);
    },
    // 删除历史记录
    del: function (n) {
      this.history.splice(n, 1);
      window.localStorage.setItem("history", this.history);
    },
    HistorySong: function (n) {
      this.text = n;
      this.axios
        .get("http://music.kele8.cn/search?keywords=" + n)
        .then((res) => {
          // console.log(res.data.result.songs)
          // console.log(this.Realtime)
          this.SearchSong = res.data.result.songs.slice(0, 6);
        });
    },
  },
  // 监听
  watch: {
    text: function (n) {
      this.sw = true
      if (n) {
        
        if (this.inputing) {
          this.axios
            .get("http://music.kele8.cn/search?keywords=" + n)
            .then((res) => {
              // console.log(res.data.result.songs.slice(0,6))
              this.Realtime = res.data.result.songs.slice(0, 6);
            }).finally(()=>{
              this.sw = false
            });
        }
      } else {
        this.Realtime = "";
        this.inputing = false;
        this.sw = false
      }
    },
  },
};
</script>

<style scoped lang="less">
.search {
  background-color: #fbfcfd;
  height: 100vh;
  // loading
 
  .input {
    border-bottom: 1px solid #f2f3f4;
    .inputcover {
      width: 90%;
      margin: 0 auto;
      position: relative;
      i {
        position: absolute;
        width: 13px;
        height: 13px;
        top: 50%;
        margin-top: -7.5px;
        left: 10px;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==");
      }
      input {
        width: 100%;
        outline: none;
        height: 30px;
        text-indent: 2em;
        margin: 15px auto;
        border: none;
        background: #ebecec;
        border-radius: 30px;
      }
      span {
        width: 14px;
        height: 14px;
        display: inline-block;
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -7px;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48cGF0aCBkPSJNMTkgOUw5IDE5TTkgOWwxMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWJlY2ViIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9nPjwvc3ZnPg==");
      }
    }
  }
  .OpenApp {
    line-height: 38px;
    border: 1px solid #ffe300;
    border-radius: 38px;
    font-size: 16px;
    // color: #d33a31;
    margin: 15px 37px 5px;
    text-align: center;
  }
}
</style>