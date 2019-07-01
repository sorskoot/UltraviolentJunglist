<template>
  <span class="label"><slot></slot></span>
</template>

<script>
export default {
    name:"uj-label"
}
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";
.label{
    @extend %text;
    color:$light-grey
}
</style>
