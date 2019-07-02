<template>
  <div class="property-slider">
    <div class="property-slider-text property-slider-label">
      <uj-label>{{label}}</uj-label>
    </div>
    <div class="property-slider-slider">
      <uj-slider @change="change" :value="value" :min="min" :max="max" :step="step"></uj-slider>
    </div>
    <div class="property-slider-text property-slider-value">
      <uj-label>{{internalValue}}</uj-label>
    </div>
  </div>
</template>

<script>
import ujLabel from "../atoms/Label";
import ujSlider from "../atoms/Slider";

export default {
  name: "uj-property-slider",
  components: { ujLabel, ujSlider },
  props: {
    value: { type: Number, default: 63 },
    label: { type: String, default: "label" },
    max: { type: Number, default: 127 },
    min: { type: Number, default: 0 },
    step: { type: Number, default: 1 }
  },
  data: function() {
    return {
      internalValue: this.value
    };
  },
  methods: {
    change: function(val) {
      this.internalValue = val;
      this.$emit("change", +val);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";
.property-slider {
  display: flex;
  flex-flow: row;
  .property-slider-text {
    flex: 0 0 auto;
    line-height: 24px;
  }
  .property-slider-label {
    margin-right: $margin-m;
  }
  .property-slider-slider {
    flex: 1 1 auto;
  }
  .property-slider-value {
    margin-left: $margin-m;
  }
}
</style>

