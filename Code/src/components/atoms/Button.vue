<template>
  <button class="button" v-on:click="$emit('click')" :disabled="isButtonDisabled" :title="this.title">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: "uj-button",
  props: {
    title: "",
    isButtonDisabled: false
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/theme.scss";
.rounded {
  border-radius: 5px;
}
.button {
  border: 2px solid $dark-grey;
  padding: 10px 20px;
  background-color: $dark;
  outline: none;
  @extend %text;
  color: $light;
  transition: $ease;
  &:focus {
    border: 2px solid $accent;
  }
  &:disabled,
  &[disabled] {
    background-color: $dark;
    color: $dark-grey;
  }
  &:hover:enabled {
    background-color: $dark-grey;
    cursor: pointer;
    color: $light;
  }
  &.button-primary {
    background-color: $accent;
    &:hover:enabled {
      background-color: $accent-lighter;
    }
    &:disabled,
    &[disabled] {
      background-color: $accent-disabled;
      color: $dark-grey;
    }
  }

  &.button-success {
    background-color: $success;
    &:hover:enabled {
      background-color: $success-lighter;
    }
    &:disabled,
    &[disabled] {
      background-color: $success-disabled;
      color: $dark-grey;
    }
  }

  &.button-danger {
    background-color: $danger;
    &:hover:enabled {
      background-color: $danger-lighter;
    }
    &:disabled,
    &[disabled] {
      background-color: $danger-disabled;
      color: $dark-grey;
    }
  }
}
</style>
