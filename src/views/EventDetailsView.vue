<script setup>
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService'
import { useRoute } from 'vue-router'

const event = ref(null)
const route = useRoute()

// via PROPS
// const props = defineProps({
//     id: {
//         required: true,
//     },
// })
// console.log(props.id)

onMounted(() => {
    EventService.getEventById(route.params.id)
        .then((response) => (event.value = response.data))
        .catch((err) => console.error(err))
})
</script>
<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>
