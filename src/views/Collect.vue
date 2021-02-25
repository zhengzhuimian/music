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
    // 获取收藏的歌曲
    this.collectSong = JSON.parse(window.localStorage.getItem("collectSong"))
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