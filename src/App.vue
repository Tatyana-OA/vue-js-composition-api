<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue';
const store = inject('store')
</script>

<template>
  <div class="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Events</RouterLink> |
          <RouterLink to="/about-us">About</RouterLink>
        </nav>
      </div>
    </header>
    <div id="flashMessage" v-if="store.flashMessage">
      {{ store.flashMessage }}
    </div>
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
  color: rgb(119, 31, 13);
  font-weight: bold;
  padding: 0 0 0.5rem 0;
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
