<template>
  <div>
    <canvas id="waveform" width="1200" height="300"></canvas>
  </div>
</template>

<script>
import sampleLoader from "../../lib/sample-loader";

export default {
  name: "uj-waveform",
  props: {},
  mounted() {
    let waveformCanvas = this.$el.querySelector("#waveform");
    let ctx = waveformCanvas.getContext("2d");
    ctx.clearRect(0, 0, waveformCanvas.width, waveformCanvas.height);
    sampleLoader
      .load("/static/media/Ruffa%20Break%20170.094bd2f4.wav")
      .then(player => {
        renderWaveform(
          ctx,
          waveformCanvas.width,
          waveformCanvas.height,
          player._buffer.get().getChannelData(0)
        );
      });
  }
};

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
</style>
