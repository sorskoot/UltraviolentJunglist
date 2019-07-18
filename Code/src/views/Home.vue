<template>
  <div class="home">
    <uj-transport @pulse="pulse"></uj-transport>
    <uj-track-editor :current="current" :track="track"></uj-track-editor>
    <div class="waveform-editor">
      <div>
        <uj-waveform
          id="waveform"
          width="1200"
          height="300"
          :current-segment="this.currentSegment"
          :buffer="track.buffer"
        ></uj-waveform>
        <uj-button :disabled="!sampleLoaded" v-on:click="trigger()">Trigger</uj-button>
        <uj-play-button :disabled="!sampleLoaded" v-on:play="playSample"></uj-play-button>
      </div>
      <div class="waveform-properties">
        <div>
          <uj-dropdown :selected="currentSegmentIndex" :items="track.segments.map(s=>s.key)" @select="segmentSelected"></uj-dropdown>
        </div>
        <div>
          <uj-group-selector
            :selected="currentSegment?currentSegment.group:0"
            @change="groupChanged"
          ></uj-group-selector>
        </div>
        <div>
          <uj-dropdown :selected="selectedSample" :items="samples" @select="sampleSelected"></uj-dropdown>
        </div>
        <div v-if="!!currentSegment">
          <uj-property-slider
            label="retrigger"
            @change="(v)=>currentSegment.retrigger = v"
            :value="currentSegment.retrigger"
            :min="1"
            :max="16"
          ></uj-property-slider>
        </div>
        <div>
          <uj-filter-editor></uj-filter-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ujTrackEditor, ujTransport } from "@/components/templates";
import { ujButton, ujWaveform, ujDropdown, ujInput } from "@/components/atoms";
import {
  ujTrackBar,
  ujGroupSelector,
  ujPropertySlider,
  ujPlayButton
} from "@/components/molecules";
import { ujFilterEditor } from "@/components/organisms";

import { transport, sampleLoader } from "@/lib";
import { Track } from "@/lib/models";
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
    ujPropertySlider,
    ujTrackEditor,
    ujTransport,
    ujPlayButton,
    ujFilterEditor
  },
  data: function() {
    return {
      currentSegmentIndex: 0,
      currentSegments: [],
      sampleLoaded: false,
      track: new Track(),
      current: 0,
      samples: sampleLoader.availableSamples,
      selectedSample: ""
    };
  },
  
  watch: {
    selectedSample: function(val) {}
  },

  computed: {
    currentSegmentGroup: function() {
      if (this.currentSegmentIndex < this.currentSegments.length) {
        return this.track.segments[this.currentSegmentIndex].group;
      }
    },

    currentSegment: function() {
      if (!this.track.segments || !this.track.segments.length) {
        return;
      }
      return this.track.segments[this.currentSegmentIndex];
    }
  },

  beforeCreate: function() {
    
  },
  methods: {
    groupChanged: function(newGroup) {
      this.currentSegment.group = newGroup;
    },
    sampleSelected: function(sample) {
      this.load(sample);
    },
    playSample: function() {
      this.player.start();
    },
    segmentSelected: function(seg) {
      this.currentSegmentIndex = seg;
    },
    load: async function(sample) {
      this.track = new Track();
      this.sampleLoaded = await this.track.loadSample(sample);
    },
    trigger: function() {
      this.track.trigger(this.currentSegmentIndex);
    },
    pulse:function(p) {
      this.current = p;
      this.track.triggerGroup(p);
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
