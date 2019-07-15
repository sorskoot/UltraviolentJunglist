<template>
    <uj-dropdown :select='v=>$emit(v)' :selected='filter' :items='filters'></uj-dropdown> 
</template>

<script>
import { ujDropdown } from "@/components/atoms";

export default {
  name: "uj-filter-type-select",
  components: { ujDropdown },
  props:{
       filter:{
            type: String,
            validator: function (value) {
                // The value must match one of these strings
                return ['lowpass', 'highpass', 'bandpass', 'lowshelf', 'highshelf', 'notch', 'allpass', 'peaking'].indexOf(value) !== -1
            }
        },
  },
  data:function(){
      return {
          filters:['lowpass', 'highpass', 'bandpass', 'lowshelf', 'highshelf', 'notch', 'allpass', 'peaking']
      }
  }
};
</script>

<style lang="scss" scoped>
</style>
