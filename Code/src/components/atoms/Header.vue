<template>
  <h1 class="header">
    <slot></slot>
  </h1>
</template>

<script>

export default {
  name: "uj-header",
  props: {
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/theme.scss";

.header{
    color:$accent;
    font-family: $header-font-family;
}
</style>
