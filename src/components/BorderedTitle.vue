<template>
  <h3><slot></slot></h3>
   
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
// secoped 当前作用域有效
h3{
    border-left: 2px solid #ffe300;
    padding-left: 10px;
    line-height: 1em;
    margin: 10px 0 ;
}
</style>