<template>
<div @click="$emit('toggle-show-lyric')">
    
    <div class="lyric-box">
        <ul class="lyric">
            <li v-for="(item,index) in lyric" :key="index">{{item.text}}</li>
        </ul>
    </div>
    
    </div>  
</template>

<script>

export default {
    props:["lyric","currentTime"],
    watch:{
        currentTime:function(){
    
             let i = this.lyric.findIndex((element) => {
                return element.time > this.currentTime
            })
           
            let lyricLi = document.querySelectorAll(".lyric li")
             if (i != -1) {
                 
                for (var j = 0; j < lyricLi.length; j++) {
                    lyricLi[j].style.color = ""
                    lyricLi[i - 1].style.fontSize = "14px"
                    lyricLi[i - 1].style.fontWeight = ""
                }
                document.querySelector(".lyric").style.marginTop = -30 * (i - 1) + 220 + "px"
               lyricLi[i - 1].style.color = "white"
               lyricLi[i - 1].style.fontSize = "17px"
               lyricLi[i - 1].style.fontWeight = "700"
            } 
        }
    }
}
</script>

<style scoped lang="less">
.lyric-box{ 
    width:80%;
    height: 65vh;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    color: #c7c7c7;
    font-size: 14px;
    
    .lyric{
        margin-top: 90px;
        li{
            padding: 5px 0;
        }
    }
}
</style>