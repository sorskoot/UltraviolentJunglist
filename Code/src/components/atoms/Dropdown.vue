<template>
  <div>
    <select v-model="selectedInternal">
      <option v-for="(item, index) in items" :key="index" :value="index">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "uj-dropdown",
  props: {
    items: Array,
    selected: [String, Number]
  },
  data: function() {
    return {
      selectedInternal: this.selected
    };
  },
  watch: {
    selectedInternal: function(val) {
      this.$emit('select',val);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

