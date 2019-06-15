<template>
  <div id="waveformContainer">
    <canvas id="waveform" width="1200" height="300"></canvas>
    <canvas id="waveformOverlay" width="1200" height="300"></canvas>
  </div>
</template>

<script>
import sampleLoader from "../../lib/sample-loader";

export default {
  name: "uj-waveform",
  props: {},
  mounted() {
    let waveFormCvs = this.$el.querySelector("#waveform");
    let overlCvs = this.$el.querySelector("#waveformOverlay");

    let ctx = waveFormCvs.getContext("2d");
    let ctxOverlay = overlCvs.getContext("2d");

    ctx.clearRect(0, 0, waveFormCvs.width, waveFormCvs.height);
    ctxOverlay.clearRect(0, 0, overlCvs.width, overlCvs.height);

    ctxOverlay.fillStyle = "rgba(0,70,120, 25%)";
    ctxOverlay.fillRect(0, 0, overlCvs.width / 16, overlCvs.height);
    ctxOverlay.strokeStyle = "rgb(0,140,255)";
    ctxOverlay.rect(0, 0, overlCvs.width / 16, overlCvs.height);
    ctxOverlay.stroke();

    sampleLoader
      .load("/static/media/Ruffa%20Break%20170.094bd2f4.wav")
      .then(player => {
        renderWaveform(
          ctx,
          waveFormCvs.width,
          waveFormCvs.height,
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
#waveformContainer {
  position: relative;
  margin: 50px;
}

#waveform {
  position: absolute;
  top: 0;
  left: 0;
}

#waveformOverlay {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
