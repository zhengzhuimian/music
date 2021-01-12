<template>
  <div>
    <CommentTitle>我的喜欢</CommentTitle>
    <ul>
      <SongItem
        v-for="(song, index) in collectSong"
        :key="song.id"
        :item="song"
        :index="index"
        @update:music="$emit('update:music', $event)"
        @update:playlist="$emit('update:playlist', collectSong)"
        :currentMusic="$attrs.currentMusic"
        :paused="$attrs.paused"
      ></SongItem>
    </ul>
    <div class="record">记录美好歌曲</div>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem.vue";
import CommentTitle from "@/components/CommentTitle.vue";

export default {
  components: { SongItem, CommentTitle },
  data() {
    return {
      collectSong: [],
    };
  },
  activated() {
    this.collectSong = [];
    if (window.localStorage.getItem("collectSong")) {
      var a = window.localStorage.getItem("collectSong");

      var b = a.split("!,");

      if (b.length == 1) {
        this.collectSong.push(JSON.parse(b[0].slice(1, b[0].length - 1)));
      } else {
        b.forEach((item, index) => {
          if (index == 0) {
            this.collectSong.push(JSON.parse(item.slice(1)));
          } else if (index == b.length - 1) {
            this.collectSong.push(JSON.parse(item.slice(0, item.length - 1)));
          } else {
            this.collectSong.push(JSON.parse(item));
          }
        });
      }
    }

    // var obj = this.collectSong.some((item) => {
    //   // console.log(item.id);
    //   return item.id === Number("1810021934");
    // });
    // console.log(obj);
  },
};
</script>

<style scoped lang="less">
.record {
  text-align: center;
  padding: 20px 0;
  color: #aaaaaa;
}
</style>