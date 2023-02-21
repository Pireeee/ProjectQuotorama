<script lang="ts">
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
    
    //fonction qui va récupérer la valeur de l'input
    test(e:string) {
      this.textWritten = e;
    }
  },
}

</script>

<template>
  <div class="app">
    <h1>{{ title }}</h1>
    <br/>
    <input v-model="text">
    <button @click="test(text)">test</button>
    <p>Voici ce que tu as écrit : {{ textWritten }}</p>
    <QuotesComponent/>

  </div>
</template>

<style>
</style>
