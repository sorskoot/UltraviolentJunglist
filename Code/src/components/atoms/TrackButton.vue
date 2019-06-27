<template>
  <div @click="increaseGroup" :class="`track-button ${calculateColor} ${current?'current':''}`"></div>
</template>

<script>
export default {
  name: "ujTrackButton",
  props: {
    current: {
        type:Boolean,
        default: false
    },
    disabled: {
        type:Boolean,
        default: false
    },
    group: Number
  },
  data: function() {
    return {
      internalGroup: this.group
    };
  },
  computed: {
    calculateColor: function() {
      if (~this.internalGroup) {
        return `track-group-color-${this.internalGroup}`;
      } else {
        return "track-group-disabled";
      }
    }
  },
  methods: {
    increaseGroup: function() {
      if (!this.disabled) {
        this.internalGroup++;
        if (this.internalGroup > 7) {
          this.internalGroup = -1;
        }
      }
      this.$emit("change", this.internalGroup);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.track-button {
  width: 25px;
  height: 25px;
  border: 1px solid $accent;
  &:not(:first-child) {
    margin-left: $margin-s;
  }
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
  &.current {
    border-color: $accent-lightest;
  }
}
</style>
