<script>

export default {
  name: "AdminComponent",
  components: {
  },
  data() {
    return {
      User : {
        username: "",
        password: "",
        isAdmin: false
      }
    };
  },
  methods: {

    isAdmin() {
      console.log("Admin");
      console.log(this.User);
    },

    getAllApis() {
    fetch("http://localhost:8080/apis/getAllApis", {
      mode: 'cors' // This ensures requests include CORS headers
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
    },



  },
  mounted() {
    this.getAllApis();
  },
};
</script>
<template>
  <h1>Admin Panel</h1>
  


</template>

<style></style>
