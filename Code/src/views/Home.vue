<template>
  <div class="home">
      <button v-on:click="load()">Load</button>
      <button v-on:click="trigger()">Trigger</button>
  </div>
</template>

<script>
// @ is an alias to /src
import ujButton from '../components/atoms/Button';
import sampleLoader from '../lib/sample-loader';
export default {
  name: 'home',
  components: {
    ujButton,
  },
  methods:{
      load:()=>{
        sampleLoader.load();
      },
       trigger:()=>{
        sampleLoader.trigger();
      }
  }
};
</script>
