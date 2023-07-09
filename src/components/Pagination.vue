<script setup lang="ts">
import axios, { AxiosResponse } from 'axios';
import { ref, onMounted, reactive } from 'vue';
import User from '../models/IUser';

const currentPage = ref(1);
const totalPages = ref(0);

const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        fetchData(currentPage.value);
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fetchData(currentPage.value);
    }
};

const userData = reactive({ users: [] as User[]});

const fetchData = (page: number) => {
      axios.get(`https://reqres.in/api/users?page=${page}`)
        .then((response: AxiosResponse<{data: User[]; total_pages: number }>) => { 
            userData.users = response.data.data;
            totalPages.value = response.data.total_pages;
        })
    .catch(error => {
        console.error(error);
    });
}; 

onMounted(() => { 
  fetchData(currentPage.value);
});


</script>

<template>
 <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1">Före</button>
          <span>Sida {{ currentPage  }} av {{  totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Nästa</button>
        </div>  
</template>

<style>

</style>