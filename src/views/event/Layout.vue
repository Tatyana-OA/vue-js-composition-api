<script setup>
import { ref, onMounted } from 'vue'
import EventService from '../../services/EventService'
import { useRoute } from 'vue-router'
import router from '@/router';

const event = ref(null)
const route = useRoute()

const triggerNotFound = (error) => {
    if (error.response && error.response.status == 404) {
        router.push({ name: '404Resource', params: { resource: 'event' } })
    } else {
        router.push({ name: 'NetworkErr' })
    }

}

onMounted(() => {
    EventService.getEventById(route.params.id)
        .then((response) => {
            event.value = response.data
        })
        .catch((error) => {
            triggerNotFound(error);
        })
})
</script>
<template>
    <div v-if="event">
        <div id="nav">
            <router-link :to="{ name: 'EventDetails' }">Details</router-link>
            <router-link :to="{ name: 'EventRegister' }">Register</router-link>
            <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
        </div>
        <!-- Outlet for children components to be displayed, event is sent down to them -->
        <router-view :event="event" />
    </div>
</template>

<style scoped>
#nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
}

#nav a {
    color: green;
}
</style>