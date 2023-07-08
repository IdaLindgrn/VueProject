
<script setup lang="ts">
import axios, { AxiosResponse } from 'axios';
import { ref, onMounted } from 'vue';
import User from '../models/User.model'

const setup = () => {
    const users = ref<User[]>([]);

    onMounted(() => {
      axios.get('https://reqres.in/api/users')
        .then((response: AxiosResponse<{data: User[]}>) => { 
            users.value = response.data.data;
        })
    .catch(error => {
        console.error(error);
    });
});
    return { users };
};

export { setup };

</script>

<template>
    <div v-for="user in setup().users" :key="1">{{ user }}</div>  
</template> 