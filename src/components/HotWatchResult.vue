<template>
  <div class="HotWatchResult">
    <h2  @click="$emit('update:watch-result',text)">搜索 "{{ text }}"</h2>
    <ul>
      <li v-for="(item, index) in Realtime" :key="index" @click="$emit('update:watch-result',item.name)">
        <i></i><span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["text", "Realtime"],
};
</script>

<style scoped lang="less">
.HotWatchResult {
  background-color: #fbfcfd;

  h2 {
    height: 50px;
    margin-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    line-height: 50px;
    color: #507daf;
    border-bottom: 1px solid #f2f3f4;
  }
  ul {
    li {
      height: 45px;
      padding-left: 10px;
      display: flex;

      i {
        display: inline-block;
        width: 15px;
        height: 15px;
        vertical-align: middle;
        margin-right: 7px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjguMTgxIDI3LjUzNWwtMS40MTQgMS40MTQtNy43NTUtNy43NTRBMTEuNDQ1IDExLjQ0NSAwIDAgMSAxMS41IDI0QzUuMTQ5IDI0IDAgMTguODUyIDAgMTIuNSAwIDYuMTQ5IDUuMTQ5IDEgMTEuNSAxIDE3Ljg1MiAxIDIzIDYuMTQ5IDIzIDEyLjVjMCAyLjc1Ni0uOTczIDUuMjg1LTIuNTg5IDcuMjY2bDcuNzcgNy43Njl6TTExLjUgM2E5LjUgOS41IDAgMSAwIDAgMTkgOS41IDkuNSAwIDAgMCAwLTE5eiIgb3BhY2l0eT0iLjMiLz48L3N2Zz4=);
        margin-top: 15px;
      }
      span {
        font-size: 15px;
        line-height: 45px;
        color: #333;
        display: inline-block;
        flex: 1;
        border-bottom: 1px solid #f2f3f4;
      }
    }
  }
}
</style>