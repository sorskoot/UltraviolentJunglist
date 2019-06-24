<template>
  <div>
    <input type="text" v-model="value">
  </div>
</template>

<script>
export default {
  name: "uj-input",
  data: function() {
    return {
      value:Number
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
