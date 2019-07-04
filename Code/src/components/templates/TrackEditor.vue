<template>
    <div>
        <uj-track-bar-editor :items="track.items[0]" :current="current"></uj-track-bar-editor>
    </div>
</template>

<script>
import { ujTrackBarEditor } from "../organisms/index.js";

export default {
  name: "uj-track-editor",
  components: { ujTrackBarEditor },
  props:{
      track: {
          type: Object
      },
      current:Number
  }
};

</script>

<style lang="scss" scoped>
</style>

