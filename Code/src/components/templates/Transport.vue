<template>
  <div class="transport">
    <uj-button :disabled="disabled" v-on:click="start()">Start</uj-button>
    <uj-button :disabled="disabled" v-on:click="stop()">Stop</uj-button>
    <input v-model="internalBpm" />
  </div>
</template>

<script>
import { ujButton } from "@/components/atoms";
import { transport } from "@/lib";

export default {
  name: "uj-transport",
  components: { ujButton },
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
    start: function() {
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
