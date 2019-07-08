<template>
  <div>
    <uj-track-bar :items="items" :current="current"></uj-track-bar>
  </div>
</template>

<script>
import {ujTrackBar} from "../molecules";

export default {
  name: "uj-track-bar-editor",
  components: { ujTrackBar },
  props: {
    current: Number,
    items: Array
  },
  methods: {
    groupChange: function(val, index) {
      this.items[index] = val;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

