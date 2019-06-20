<template>
    <div :class="`track-button  ${this.current?'current':''}`">
        &nbsp;
    </div>
</template>

<script>
export default {
    name:"ujTrackButton",
    props:{
        group: 0,
        current: false
    }
}
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.track-button{
    width: 25px;
    height:25px;
    background-color: $accent;
    border: 1px solid $accent;
    &:not(:first-child){
        margin-left: $margin-s;
    }
    flex-shrink:0;
    &.current{
        border-color: $accent-lightest;
    }
}
</style>
