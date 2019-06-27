<template>
  <div class="uj-input">
    <input type="text" v-model="value">
  </div>
</template>

<script>
export default {
  name: "uj-input",
  data: function() {
    return {
      value: ""
    };
  },
  watch: {
    value: function(newval) {
      console.log(newval);
      this.$emit('change', newval, this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.uj-input{
    display:inline;
}
</style>
