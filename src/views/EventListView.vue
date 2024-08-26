<script setup>
import EventService from '../services/EventService.js'
import EventCard from '../components/EventCard.vue'
import { ref, onMounted, computed } from 'vue'
import { watchEffect } from 'vue';
import router from '@/router';

const events = ref(null)
// Looking for a prop called page
const props = defineProps(['page'])
const page = computed(() => props.page) // returns a reference

const totalEvents = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})

onMounted(() => {
  // Two events per page; much like useEffect dependency array; page.value is the reactive value
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value)
      .then((response) => {
        events.value = response.data;
        totalEvents.value = response.headers[
          'x-total-count'
        ]
      })
      .catch(() => {
        router.push({ name: 'NetworkErr' })
      })
  })

})

</script>

<template>
  <div class="home">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link id="page-prev" :to="{ name: 'EventList', query: { page: page - 1 } }" rel="prev"
        v-if="page != 1">&#60; Previous</router-link>

      <router-link id="page-next" :to="{ name: 'EventList', query: { page: page + 1 } }" v-if="hasNextPage"
        rel="next">Next
        &#62;</router-link>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
