<template>
  <div class="NewMusic">
    <BorderedTitle><slot></slot></BorderedTitle>
    <ul>
      <SongItem
        @update:music="$emit('update:music', $event)"
        @update:playlist="$emit('update:playlist',newSongs)"
        v-for="(song,index) in newSongs"
        :key="song.id"
        :item="song"
        :index = "index"
        :currentMusic="$attrs.currentMusic"
        :paused="$attrs.paused"
      />
    </ul>
    <div class="MusicBottom">
      <div class="OpenApp">打开APP，发现更多好音乐 ></div>
    </div>
  </div>
</template>

<script>
import BorderedTitle from "@/components/BorderedTitle.vue";
import SongItem from "@/components/SongItem.vue";
export default {
  props: {
    newSongs: {
      type: Array,
    },
  },
  components: {
    BorderedTitle,
    SongItem,
  },
};
</script>

<style lang="less" scoped>
.MusicBottom{
  padding:6px 0;
  .OpenApp{
    line-height: 38px;
    border: 1px solid #ffe300;
    border-radius: 38px;
    font-size: 16px;
    color: black;
    margin: 15px 37px 5px;
    text-align: center;
  }
}
</style>