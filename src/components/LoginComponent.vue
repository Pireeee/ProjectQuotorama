<script>

export default {
  name: "LoginComponent",
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
    login() {
      console.log("Login");
      console.log(this.User);
    }
  },
};
</script>
<template>
  <h1>Login</h1>
  <p>Enter your username and password to login</p>
  <form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required />  <br />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required /> <br />
    <button type="submit">Login</button>
  </form>

</template>

<style></style>
