<template>
  <div
    @click="increaseGroup"
    :class="`track-button ${calculateColor} ${current?'current':''}`"
  ></div>
</template>

<script>
export default {
  name: "ujTrackButton",
  props: {
    current: false
  },
  data: function() {
    return {
      group: 0
    };
  },
  computed:{
      calculateColor:function(){
          if(~this.group){
            return `track-group-color-${this.group}`
          }else{
              return 'track-group-disabled';
          }
      }
  },
  methods: {
    increaseGroup: function() {
      this.group++;
      if(this.group > 7){
          this.group = -1
      }
      this.$emit('change',this.group);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.track-button {
  width: 25px;
  height: 25px;
  border: 1px solid $accent;
  &:not(:first-child) {
    margin-left: $margin-s;
  }
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
  &.current {
    border-color: $accent-lightest;
  }
}
</style>
