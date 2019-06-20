<template>
    <div class="track-bar" >
        <uj-track-button :current="current === index" 
                         v-for="(item, index) in this.items" :key="index" ></uj-track-button>
    </div>
</template>
<script>

import ujTrackButton from "../atoms/TrackButton";

export default {
    components:{ujTrackButton},
    name:"ujTrackBar",
    props:{
        current:Number,
        items:Array
    }
}
</script>

<style lang="scss" scoped>

@import "../../scss/theme.scss";

.track-bar{
    display:flex;
    flex-direction: row;
    
    .track-button:nth-child(4n+5){
        margin-left:$margin-m;
    }
}
</style>
