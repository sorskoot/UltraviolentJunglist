<template>
  <div class="home">
    <uj-button v-on:click="load()">Load</uj-button>
    <uj-button :disabled="!this.sampleLoaded" v-on:click="trigger()">Trigger</uj-button>
    <uj-waveform width="1200" height="300" :current-segment="this.currentSegment"></uj-waveform>
  </div>
</template>

<script>
// @ is an alias to /src
import ujButton from "../components/atoms/Button";
import ujWaveform from "../components/atoms/Waveform";
import sampleLoader from "../lib/sample-loader";
import { Segment } from "../lib/models";

export default {
  name: "home",
  components: {
    ujButton,
    ujWaveform
  },
  data: function() {
    return {
      currentSegment: new Segment(),
      sampleLoaded: false,
      player: undefined
    };
  },
  methods: {
    load: async function() {
      this.player = await sampleLoader.load();
      this.sampleLoaded = true;
    },
    trigger: function() {
     this.player.start(undefined, this.currentSegment.bufferStart, this.currentSegment.bufferLength);
    }
  }
};
</script>
