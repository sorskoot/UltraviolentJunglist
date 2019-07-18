<template>
  <div>
    <uj-filter-type-select :filter="type" @select="t=>type=t"></uj-filter-type-select>
    <uj-property-slider @change="q=>Q=q" label="Q" :value="Q" :min="0" :step=".01" :max="2"></uj-property-slider>
    <uj-property-slider @change="f=>freq=f" label="Frequency" :value="freq" :min="1" :max="20000"></uj-property-slider>
  </div>
</template>

<script>
import { ujPropertySlider, ujFilterTypeSelect } from "@/components/molecules";
import { Filter } from "@/lib/models";

export default {
  name: "uj-filter-editor",
  components: { ujPropertySlider, ujFilterTypeSelect },
  props: {
    filter: {
      type: Filter,
      default: new Filter()
    }
  },
  data: function() {
      console.log(this.filter.type);
    return {
      freq: this.filter.freq,
      Q: this.filter.Q,
      type: this.filter.type
    };
  },
  methods: {
    emitChange() {
      this.$emit("change", this.freq, this.Q, this.type);
    }
  },
  watch: {
    freq(val) {
      this.emitChange();
    },
    type(val) {
      this.emitChange();
    },
    Q(val) {
      this.emitChange();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

