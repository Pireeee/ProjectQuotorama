<script>

export default {
  name: "RegisterComponent",
  components: {
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <h1>Register</h1>
  <p>Enter your username and password to Register</p>
  <form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required />  <br />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required /> <br />
    <button type="submit">Register</button>
  </form>

</template>

<style></style>
