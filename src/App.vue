<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {
      title: "Welcome to Quotorama !",
    };
  },
  methods: {},
};
</script>

<template>
  <div class="app">
    <HeaderComponent />
    <h1>{{ title }}</h1>
    <p>Choose your Source and get quotes form it !</p>
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style></style>
