<template>
<div class="RecommendPlayLsit">
    <BorderedTitle><slot></slot></BorderedTitle>
    <ul class="playlist">
        <PlayListItem v-for="(item ,index) in currentRecommends" :key="index" :item="item"></PlayListItem>
   </ul>
</div>  
</template>


<script>
import BorderedTitle from "@/components/BorderedTitle.vue"
import PlayListItem from "@/components/PlayListItem.vue"
export default {
    props:{
        // 获取推荐歌单
        currentRecommends:{
            type:Array
        }
    },
    components:{
       BorderedTitle,
       PlayListItem
    }
}
</script>

<style scoped>
.playlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>