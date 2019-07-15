<template>
  <div>
      <uj-filter-type-select></uj-filter-type-select>
      <uj-property-slider label="Q"
        :value="1"
        :min="1"
        :step=".01"
        :max="2"></uj-property-slider>
      <uj-property-slider
       label="Frequency"
        :value="500"
        :min="1"
        :max="20000"
      ></uj-property-slider>
  </div>
</template>

<script>
import { ujPropertySlider, ujFilterTypeSelect } from "@/components/molecules";

export default {
  name: "uj-filter-editor",
  components: { ujPropertySlider, ujFilterTypeSelect },
  props: {
    type: {
      type: String,
      validator: function(value) {
        // The value must match one of these strings
        return (
          [
            "lowpass",
            "highpass",
            "bandpass",
            "lowshelf",
            "highshelf",
            "notch",
            "allpass",
            "peaking"
          ].indexOf(value) !== -1
        );
      }
    },
    Q: Number,
    freq: Number
  }
};
</script>
<style lang="scss" scoped>
</style>

