<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue';
const store = inject('store')
</script>

<template>
  <div id="flashMessage" v-if="store.flashMessage">
    {{ store.flashMessage }}
  </div>
  <div class="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Events</RouterLink> |
          <RouterLink to="/about-us">About</RouterLink>
        </nav>
      </div>
    </header>

  </div>
  <!-- Outlet in React -->
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

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
  color: #000000;
  font-weight: bold;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  background: #81e3b2;
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
