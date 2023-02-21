<script>
import QuotesComponent from './components/QuotesComponent.vue';

export default {
  components: {
    QuotesComponent
  },
  data(){
    return {
      text: 'rien',
      textWritten: 'rien',
      title: 'Bienvenu sur Quotorama !',
      
    }
  },
  methods: {
  },
}

</script>

<template>
  <div class="app">
    <h1>{{ title }}</h1>
    <br/>
    <QuotesComponent/>

  </div>
</template>

<style>
</style>
