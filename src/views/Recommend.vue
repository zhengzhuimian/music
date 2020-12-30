<template>
  <div class="Recommend">
    <RecommendPlayLsit :currentRecommends="currentRecommends"
      >推荐歌单</RecommendPlayLsit
    >
    <RecommendNewMusic
      @update:music="$emit('update:music', $event)"
       @update:playlist="$emit('update:playlist',$event)"
      :newSongs="newSongs"
      :currentMusic="$attrs.currentMusic"
      :paused="$attrs.paused"
      >最新音乐</RecommendNewMusic
    >
  </div>
</template>

<script>
import RecommendPlayLsit from "@/components/RecommendPlayLsit.vue";
import RecommendNewMusic from "@/components/RecommendNewMusic.vue";

export default {
  // 注册
  components: {
    RecommendPlayLsit,
    RecommendNewMusic,
  },
  data: function () {
    return {
      recommedns: [],
      newSongs: [],
      recommendsIndex:0,
      count:0
    };
  },
  computed: {
    currentRecommends: function () {
      return this.recommedns.slice(this.recommendsIndex * 6, (this.recommendsIndex+1) * 6 );
    },
  },
  created() {
    this.$root.isShowLoading = true
    // 推荐歌单
    this.axios.get("http://music.kele8.cn/personalized").then((response) => {
      this.recommedns = response.data.result;
 
    }).finally(()=>{
      // ajax调取成功成功了执行
      this.count = this.count + 1
    })

    // 最新音乐
    this.axios
      .get("http://music.kele8.cn/personalized/newsong")
      .then((response) => {
        this.newSongs = response.data.result;

      }).finally(()=>{
      // ajax调取成功成功了执行
      this.count = this.count + 1
    })
  },

  watch:{
    count:function(n){
      if( n == 2 ){
        this.$root.isShowLoading = false
      }
    }
  },
  // 局部更新
  activated(){
    this.recommendsIndex = this.recommendsIndex >= 4 ? 0 : this.recommendsIndex+1;
  }
};
</script>

<style>
</style>