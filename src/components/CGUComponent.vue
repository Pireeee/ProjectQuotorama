<script>
export default {
  name: "EasterComponent",
  data() {
    return {
      duck: "",
    };
  },
  mounted() {
    this.getDuck();
  },
  methods: {
    //get a random duck image from the api
    getDuck() {
      console.log("getDuck()");
      fetch("https://random-d.uk/api/v2/quack")
        .then((response) => response.json())
        .then((data) => {
          console.log(data.url);
          this.duck = data.url;
        });
    },
  },
};
</script>
<template>
  <div>
    <button @click="getDuck()">Get a random duck</button>
    <img :src="duck" alt="duck" />
    <router-link to="/">
      <button class="button-55">Back to home</button>
    </router-link>
  </div>
</template>
<style></style>
