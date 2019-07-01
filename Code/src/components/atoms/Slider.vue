<template>
  <div class="slider">
    <input class="slider-input" type="range" />
  </div>
</template>

<script>
export default {
  name: "uj-slider"
};
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.slider {
  display: inline;
  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin: 13.8px 0;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: $accent-lighter;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: $accent;
    border-radius: 1.3px;
    border: 1px solid rgba(0,0,0,0.5);
  }

  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 5px #000000;
    border: 1px solid rgba(0,0,0,0.5);
    height: 32px;
    width: 32px;
    border-radius: 16px;
    background: $accent;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -13px;
  }

  input[type="range"]:focus::-webkit-slider-thumb {
   border: 1px solid $accent-lightest;
    background: $accent-lighter;
   
  }
}
</style>

