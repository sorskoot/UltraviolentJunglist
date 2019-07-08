<template>
  <div class="transport">
      <uj-transport-buttons :disabled="disabled" 
        v-on:play="play" 
        v-on:stop="stop" ></uj-transport-buttons>
    <input v-model="internalBpm" />
  </div>
</template>

<script>

import { ujTransportButtons } from "@/components/organisms";
import { transport } from "@/lib";

export default {
  name: "uj-transport",
  components: { ujTransportButtons },
  props: {
    disabled: Boolean,
    bpm: {
        type:Number,
        default:120
    }
  },
  data:function(){
      return {
          internalBpm:this.BPM
      }
  },
  watch: {
    bpm: function(val) {
      
    }
  },
  methods: {
    play: function() {
        transport.bpm = this.internalBpm;
        transport.start();
    },
    stop: function() {
      transport.stop();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/theme.scss";
.transport {
  margin: $margin-l;
  border: 1px solid $accent;
}
</style>
