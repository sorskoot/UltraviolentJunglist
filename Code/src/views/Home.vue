<template>
  <div class="home">
    <uj-button :disabled="!this.sampleLoaded" v-on:click="trigger()">Trigger</uj-button>
    <uj-button :disabled="!this.sampleLoaded" v-on:click="start()">Start</uj-button>
    <uj-button :disabled="!this.sampleLoaded" v-on:click="stop()">Stop</uj-button>
    <input v-model="bpm" />
    <div class="track-editor">
      <uj-track-bar :current="current" :items="items"></uj-track-bar>
    </div>
    <div class="waveform-editor">
      <div>
        <uj-waveform
          id="waveform"
          width="1200"
          height="300"
          :current-segment="this.currentSegment"
          :buffer="buffer"
        ></uj-waveform>
      </div>
      <div class="waveform-properties">
        <div>
          <uj-dropdown :selected="currentSegmentIndex" :items="segments" @select="segmentSelected"></uj-dropdown>
        </div>
        <div>
          <uj-group-selector :selected="currentSegment.group" @change="groupChanged"></uj-group-selector>
        </div>
        <div>
          <uj-dropdown :selected="selectedSample" :items="samples" @select="sampleSelected"></uj-dropdown>
        </div>
        <div>
          <uj-property-slider
            label="retrigger"
            @change="(v)=>currentSegment.retrigger = v"
            :value="currentSegment.retrigger"
            :min="1"
            :max="16"
          ></uj-property-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ujButton from "../components/atoms/Button";
import ujWaveform from "../components/atoms/Waveform";
import ujDropdown from "../components/atoms/Dropdown";
import ujInput from "../components/atoms/Input";
import ujTrackBar from "../components/molecules/TrackBar";
import ujGroupSelector from "../components/molecules/GroupSelector";
import ujPropertySlider from "../components/molecules/PropertySlider";
import { Transport, sampleLoader } from "../lib";
import { Segment } from "../lib/models";
import Tone from "tone";

export default {
  name: "home",
  components: {
    ujButton,
    ujInput,
    ujWaveform,
    ujTrackBar,
    ujDropdown,
    ujGroupSelector,
    ujPropertySlider
  },
  data: function() {
    return {
      currentSegmentIndex: 0,
      currentSegments: [...Array(16).keys()].map((key, i) => {
        let segment = new Segment();
        segment.bufferStart = i * (1 / 16);
        segment.bufferLength = 1 / 16;
        return segment;
      }),
      sampleLoaded: false,
      player: undefined,
      items: new Array(16).fill(0),
      segments: [...Array(16).keys()],
      current: 0,
      buffer: new Float32Array(),
      samples: sampleLoader.availableSamples,
      selectedSample: ""
    };
  },
  watch: {
    selectedSample: function(val) {}
  },
  computed: {
    currentSegmentGroup: function() {
      return this.currentSegments[this.currentSegmentIndex].group;
    },
    currentSegment: function() {
      return this.currentSegments[this.currentSegmentIndex];
    },
    bpm: {
      get: function() {
        return this.transport.bpm;
      },
      set: function(val) {
        this.transport.bpm = val;
      }
    }
  },
  beforeCreate: function() {
    this.transport = new Transport();
    this.transport.pulse = function(p) {
      this.current = p;
      if (~this.items[p]) {
        let segmentToPlay = this.getRandomSegmentByGroup(this.items[p]);
        if (segmentToPlay) {
          this.trigger(segmentToPlay);
        }
      }
    }.bind(this);
  },
  methods: {
    groupChanged: function(newGroup) {
      this.currentSegment.group = newGroup;
    },
    sampleSelected: function(sample) {
      this.load(sample);
    },
    segmentSelected: function(seg) {
      this.currentSegmentIndex = seg;
    },
    load: async function(sample) {
      this.player = await sampleLoader.load(sample);
      const buffer = this.player._buffer.get();
      this.currentSegments[0].duration = buffer.duration;
      this.buffer = buffer.getChannelData(0);
      this.sampleLoaded = true;
    },
    trigger: function(
      segmentToPlay = this.currentSegments[this.currentSegmentIndex]
    ) {
      let buffer = this.player._buffer.get();
      let length = this.transport.beat();
      const duration = length / segmentToPlay.retrigger;
      
      for (let i = 0; i < segmentToPlay.retrigger; i++) {
        let source = Tone.context.createBufferSource();
        
        source.connect(Tone.context.destination);
        source.buffer = buffer;
        let d = i*duration;
        let n = Tone.context.currentTime + d;
        source.start(
          n,
          this.currentSegments[0].duration * segmentToPlay.bufferStart,
          this.currentSegments[0].duration *
            (segmentToPlay.bufferLength / segmentToPlay.retrigger)
        );
        
      }
    },
    start: function() {
      this.transport.start();
    },
    stop: function() {
      this.transport.stop();
    },
    getRandomSegmentByGroup: function(group) {
      let segments = this.currentSegments.filter(s => s.group == group);
      const newLocal = ~~(Math.random() * segments.length);
      console.log(newLocal);
      return segments[newLocal];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/theme.scss";
.waveform-editor {
  margin: $margin-l;
  border: 1px solid $accent;
  .waveform-properties {
    max-width: 1200px;
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2em;
    //   grid-template-areas: ". . ." ". . ." ". . .";
  }
}
</style>
