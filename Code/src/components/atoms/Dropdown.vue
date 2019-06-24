<template>
  <div>
    <select v-model="selected">
      <option v-for="(item, index) in items" :key="index" :value="index">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "uj-dropdown",
  props: {
    items: Array
  },
  data: function() {
    return {
      selected: ''
    };
  },
  watch: {
    selected: function(val) {
      this.$emit('select',val);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

