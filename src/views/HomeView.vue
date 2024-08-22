<script setup>
import EventCard from '../components/EventCard.vue'
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    title: 'Cat Adoption Day',
    category: 'animal welfare',
    description: 'Find your new feline friend at this event',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee',
  },
  {
    id: 2,
    category: 'community service',
    title: 'Green Parks Today',
    description:
      'Join us to clean up the local park and make it beautiful again',
    location: 'Green Park',
    date: 'February 10, 2022',
    time: '09:00',
    petsAllowed: false,
    organizer: 'John Doe',
  },
  {
    id: 3,
    category: 'animal welfare',
    title: 'Dogs in Need',
    description: 'Help us find loving homes for dogs in need',
    location: 'Barksville',
    date: 'March 5, 2022',
    time: '10:00',
    petsAllowed: true,
    organizer: 'Pawter Barker',
  },
  {
    id: 4,
    category: 'education',
    title: 'Sustainable Gardening',
    description: 'Attend a workshop on sustainable gardening practices',
    location: 'Community Center',
    date: 'April 15, 2022',
    time: '14:00',
    petsAllowed: false,
    organizer: 'Greta Thunleaf',
  },
])
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
