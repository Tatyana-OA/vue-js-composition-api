<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
  </div>
  <RouterView />
</template>

<!-- For this scope -->
<style scoped>
.layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-soothign: antialised;
  -moz-osx-font-soothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!-- Global styles -->
<style>
body {
  text-align: center;
}
</style>
