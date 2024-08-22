<script setup>
import EventService from '../services/EventService.js'
import EventCard from '../components/EventCard.vue'
import { ref, onMounted } from 'vue'

const events = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => (events.value = response.data))
    .catch((err) => console.error(err))
})
</script>

<template>
  <div class="home">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
