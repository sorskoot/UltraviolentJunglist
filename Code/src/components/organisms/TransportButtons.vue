<template>
  <div>
    <uj-play-button :disabled="disabled" v-on:play="playClicked"></uj-play-button>
    <uj-stop-button :disabled="disabled" v-on:stop="stopClicked"></uj-stop-button>
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
  methods: {
    playClicked: function() {
        this.$emit('play');
    },
    stopClicked: function() {
        this.$emit('stop');
    }
  }
};
</script>

<style>
</style>
