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
        @update:playlist="$emit('update:playlist',collectSong)"
         :currentMusic="$attrs.currentMusic"
        :paused="$attrs.paused"
      ></SongItem>
    </ul>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem.vue";
import CommentTitle from "@/components/CommentTitle.vue";

export default {
  components: {SongItem,CommentTitle},
  data() {
    return {
      collectSong: [],
    };
  },
  activated() {
      console.log(111)
      this.collectSong = []
    var a = window.localStorage.getItem("collectSong");
    var b = a.split("!,");
   
    b.forEach((item, index) => {
      if (index == 0) {
        this.collectSong.push(JSON.parse(item.slice(1)));
      } else if (index == b.length - 1) {
        this.collectSong.push(JSON.parse(item.slice(0, item.length - 1)));
      } else {
        this.collectSong.push(JSON.parse(item));
      }
    });

  },
};
</script>

<style>
</style>