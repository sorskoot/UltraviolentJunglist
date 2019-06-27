<template>
  <div class="track-bar">
    <uj-track-button
      :current="current === index"
      @change="(val)=>groupChange(val, index)"
      v-for="(item, index) in items"
      :group="item"
      :key="index"
    ></uj-track-button>
  </div>
</template>
<script>
import ujTrackButton from "../atoms/TrackButton";

export default {
  components: { ujTrackButton },
  name: "ujTrackBar",
  props: {
    current: Number,
    items:Array
  },
  methods: {
    groupChange: function(val, index) {
      this.items[index] = val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.track-bar {
  display: flex;
  flex-direction: row;

  .track-button:nth-child(4n + 5) {
    margin-left: $margin-m;
  }
}
</style>
