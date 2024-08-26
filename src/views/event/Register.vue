<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const props = defineProps(["event"])
const router = useRouter()
const store = inject('store')
const register = () => {
    // Register logic here -> assuming it's successful for the purposes of showing programmatic navigation
    store.flashMessage = 'You are successfully registered for ' + props.event.title
    setTimeout(() => {
        store.flashMessage = ''
    }, 3000);
    router.push({
        name: 'EventDetails',
        // Id will get populated by default (nested route)
    })
    // or router.replace -> disabling "back" btn
    //router.go(+1) - goes forward
    //router.go(-1) - goes back
}

</script>
<template>
    <p>Register for event here</p>
    <button @click="register">Register Me!</button>
</template>
