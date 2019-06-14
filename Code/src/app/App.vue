<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../scss/theme.scss';

#app {
  font-family: $text-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:$light-grey;
}
#nav {
  padding: $padding-s;
  font-size: 2em;
  a {
    font-weight: bold;
    color: $light-grey;
    &.router-link-exact-active {
      color: $accent-lightest;
      text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
    }
  }
}
</style>
