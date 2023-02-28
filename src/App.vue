<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
  data() {
    return {
      title: "Wellcome to Quotorama !",
    };
  },
  methods: {},
};
</script>

<template>
  <HeaderComponent />
  <h1>{{ title }}</h1>
  <br />
  <div class="app">
    <RouterView />
  </div>
</template>

<style></style>
