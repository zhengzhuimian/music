<template>
  <div class="HotSearch">
    <h6>热门搜索</h6>
    <div class="hot">
      <ul>
        <li v-for="(item,index) in HotSearch" :key="index" @click="$emit('update:Hot-Search',item.first)">{{item.first}}</li>
       
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:["HotSearch"]
};
</script>

<style scoped lang="less">
.HotSearch {
  padding: 15px 10px 0;
  h6 {
    font-size: 12px;
    line-height: 12px;
    color: #666;
  }
  .hot {
    margin: 10px 0 7px;
    ul {
      li {
        display: inline-block;
        height: 32px;
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 0 14px;
        font-size: 14px;
        line-height: 32px;
        color: #282828;
    border: 1px solid #ebecec;

        border-radius: 32px;
      }
    }
  }
}
</style>