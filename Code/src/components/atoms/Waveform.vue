<template>
<div class="waveformTemplate" >
  <div class="waveformContainer">
    <canvas class="waveform" :width="this.width" :height="this.height"></canvas>
    <canvas
      v-on:mousemove="mousemoveOverlay"
      v-on:mousedown="mousedownOverlay"
      v-on:mouseup="mouseupOverlay"
      class="waveformOverlay"
      :width="this.width"
      :height="this.height"
    ></canvas>
  </div>
  </div>
</template>

<script>
import { sampleLoader } from "../../lib";
import { Segment } from "../../lib/models";

export default {
  name: "uj-waveform",
  props: {
    width: String,
    height: String,
    currentSegment: {
      type: Segment,
      default: () => new Segment()
    },
    buffer: {
      type: Float32Array,
      default: () => new Float32Array()
    }
  },
  data: {
      
  },
  methods: {
    mousemoveOverlay: function(evt) {
      if (evt.buttons === 0) {
        this.overlCvs.classList.remove("dragging");
      }
      let s = this.width * this.currentSegment.bufferStart;
      let w = this.width * this.currentSegment.bufferLength + s;

      if (evt.layerX > s && evt.layerX < w) {
        this.overlCvs.classList.add("hover");
      } else {
        this.overlCvs.classList.remove("hover");
      }

      if (this.overlCvs.classList.contains("dragging")) {
        this.currentSegment.bufferStart =
          (evt.layerX - this.relativeStart) / this.width;
        if (this.currentSegment.bufferStart < 0)
          this.currentSegment.bufferStart = 0;
        if (
          this.currentSegment.bufferStart + this.currentSegment.bufferLength >
          1
        ) {
          this.currentSegment.bufferStart =
            1 - this.currentSegment.bufferLength;
        }
      }
      drawOverlay(
        this.ctxOverlay,
        this.currentSegment.bufferStart,
        this.currentSegment.bufferLength,
        this.width,
        this.height
      );
    },
    mousedownOverlay: function(evt) {
      if (this.overlCvs.classList.contains("hover")) {
        this.relativeStart =
          evt.layerX - this.currentSegment.bufferStart * this.width;

        this.overlCvs.classList.add("dragging");
      }
    },
    mouseupOverlay: function(evt) {
      this.overlCvs.classList.remove("dragging");
    }
  },
  mounted() {
    let waveFormCvs = this.$el.querySelector(".waveform");

    this.ctx = waveFormCvs.getContext("2d");

    this.ctx.clearRect(0, 0, this.width, this.height);

    this.overlCvs = this.$el.querySelector(".waveformOverlay");
    this.ctxOverlay = this.overlCvs.getContext("2d");

    drawOverlay(this.ctxOverlay, 0, this.width, this.height);

    // sampleLoader
    //   //.load("/static/media/Ruffa%20Break%20170.094bd2f4.wav")
    //   .load('/samples/Ruffa Break 170.wav')
    //   .then(player => {
    //     this.buffer = player._buffer.get().getChannelData(0);
    //     this.currentSegment.bufferStart = 1 / 4.0;
    //
    //   });
  },
  watch: {
    currentSegment: function(val) {
      renderWaveform(this.ctx, this.width, this.height, this.buffer);
      drawOverlay(
        this.ctxOverlay,
        this.currentSegment.bufferStart,
        this.currentSegment.bufferLength,
        this.width,
        this.height
      );
    },
    buffer: function(val) {
      renderWaveform(this.ctx, this.width, this.height, this.buffer);
      drawOverlay(
        this.ctxOverlay,
        this.currentSegment.bufferStart,
        this.currentSegment.bufferLength,
        this.width,
        this.height
      );
    }
  }
};

function drawOverlay(ctxOverlay, bufferStart, bufferLength, width, height) {
  let s = width * bufferStart;
  let w = width * bufferLength;

  ctxOverlay.clearRect(0, 0, width, height);

  ctxOverlay.beginPath();
  ctxOverlay.fillStyle = "rgba(0,70,120, 25%)";
  ctxOverlay.strokeStyle = "rgb(0,140,255)";
  ctxOverlay.rect(s, 0, w, height);
  ctxOverlay.fill();
  ctxOverlay.stroke();
}

function renderWaveform(ctx, width, height, data, zoom = 1) {
  // data.length
  // width
  ctx.fillStyle = "hsl(320, 50%, 15%)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "hsl(320, 100%, 55.1%)";
  let stepsize = ~~((data.length / width) * (1 / zoom));
  let step = 0;
  for (let i = 0; i < width; i++) {
    let value = data[step] * height;
    ctx.fillRect(i, height / 2 - value / 2, 1, value);
    step += stepsize;
  }
}
</script>

<style scoped lang="scss">
.waveformTemplate{
    height:300px;
    width:1200px;
    margin:50px;
    .waveformContainer {
    position: absolute;
    
    .waveform {
        position: absolute;
        top: 0;
        left: 0;
    }

    .waveformOverlay {
        position: absolute;
        top: 0;
        left: 0;
        &.hover {
        cursor: pointer;
        }
    }
    }
}
</style>
