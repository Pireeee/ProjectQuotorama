<script>
export default {
  name: "CGUComponent",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="cgu">
    <router-link to="/">
      <button class="button-55">Back to home</button>
    </router-link>
    <img class="cat" src="http://placekitten.com/700/500" alt="Cat" />
    <!-- Conditions générales d'utilisation de mon site -->
  </div>
</template>
<style>
.cgu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.cat {
  width: 80%;
  height: 80%;
  display: block;
  margin: 1em;
}
</style>
