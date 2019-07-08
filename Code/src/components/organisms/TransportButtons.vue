<template>
  <div>
    <uj-play-button v-if="!isPlaying" :disabled="disabled" v-on:play="playClicked"></uj-play-button>
    <uj-stop-button v-if="isPlaying" :disabled="disabled" v-on:stop="stopClicked"></uj-stop-button>
  </div>
</template>

<script>
import { ujStopButton, ujPlayButton } from "@/components/molecules";

export default {
  name: "uj-transport-buttons",
  components: { ujStopButton, ujPlayButton },
  props: {
    disabled: { type: Boolean, default: true }
  },
  data:function(){
      return{
          isPlaying:false
      }
  },
  methods: {
    playClicked: function() {
        this.isPlaying = true;
        this.$emit('play');
    },
    stopClicked: function() {
        this.isPlaying = false;
        this.$emit('stop');
    }
  }
};
</script>

<style>
</style>
