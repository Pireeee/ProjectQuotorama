<script>
import { RouterLink } from 'vue-router';
</script>
<template>
  <header>
    <div>
      <div class="logo">
        <RouterLink to="/">
          <img src="../assets/logo.png" alt="logo" />
        </RouterLink>
      </div>
      <div id="nav">
        <RouterLink to="/login">Login</RouterLink>
      </div>
      <div id="nav">
        <RouterLink to="/register">Register</RouterLink>
      </div>
      <div id="title">
        <RouterLink to="/">
          <h1>Quotorama</h1>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style>
header {
  background: linear-gradient(to right, #f12711, #f5af19);
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

a {
  color: #fff;
  text-decoration: none;
}
img {
  width: 100px;
  height: 100px;
}
header div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
