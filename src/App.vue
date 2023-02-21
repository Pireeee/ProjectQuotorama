<script>
import QuotesComponent from './components/QuotesComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: {
    QuotesComponent,
    HeaderComponent
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
  <HeaderComponent/>
  <div class="app">
    <h1>{{ title }}</h1>
    <br/>
    <QuotesComponent/>

  </div>
</template>

<style>
</style>
