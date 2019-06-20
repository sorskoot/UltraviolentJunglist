<template>
  <div class="home">
    <uj-button v-on:click="load()">Load</uj-button>
    <uj-button :disabled="!this.sampleLoaded" v-on:click="trigger()">Trigger</uj-button>
    <div class="track-editor">
        <uj-track-bar :current="current" :items="items" ></uj-track-bar>
    </div>
    <div class="waveform-editor">
        <uj-waveform id="waveform" width="1200" height="300" 
            :current-segment="currentSegment"
            :buffer="buffer"></uj-waveform>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ujButton from "../components/atoms/Button";
import ujWaveform from "../components/atoms/Waveform";
import ujTrackBar from "../components/molecules/TrackBar";
import sampleLoader from "../lib/sample-loader";
import { Segment } from "../lib/models";

export default {
  name: "home",
  components: {
    ujButton,
    ujWaveform,
    ujTrackBar
  },
  data: function() {
    return {
      currentSegment: new Segment(),
      sampleLoaded: false,
      player: undefined,
      items: new Array(16).fill(1),
      current:0,
      buffer: []
    };
  },
  methods: {
    load: async function() {
      this.player = await sampleLoader.load();
      this.buffer = this.player._buffer.get().getChannelData(0);
      this.sampleLoaded = true;

    },
    trigger: function() {
     this.player.start(undefined, this.currentSegment.bufferStart, this.currentSegment.bufferLength);
    }
  }
};
</script>
