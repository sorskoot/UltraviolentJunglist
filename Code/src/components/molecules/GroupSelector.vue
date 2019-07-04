<template>
  <div class="group-selector">
    <div class="group-selector-item"  @click="selectionChanged(index-1)" v-for="index in 8" :key="index">
      <uj-track-button 
          :current="internalSelected==(index-1)" :disabled="true" :group="index - 1"></uj-track-button>
    </div>
  </div>
</template>

<script>
import {ujTrackButton} from "../atoms/index.js";

export default {
  name: "uj-group-selector",
  components: { ujTrackButton },
  props: {
    selected: {
      type: Number,
      required: true
    }
  },
  data:function(){
      return {
          internalSelected: this.selected
      }
  },
  watch:{
      selected:function(val){
          this.internalSelected = val;
      }
  },
  methods:{
      selectionChanged:function(index){
          this.internalSelected = index;
          this.$emit('change', this.internalSelected);
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.group-selector {
  display: flex;
  flex-direction: row;
  & .track-button {
    margin-left: $margin-s;
  }
//   & .group-selector-item {
//     list-style: none;
//     display: inline;
//   }
}
</style>

