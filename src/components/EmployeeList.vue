
<script setup lang="ts">
import axios, { AxiosResponse } from 'axios';
import { ref, onMounted, reactive } from 'vue';
import User from '../models/IUser'

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
    <body>	
        <div class = "container">    
            <div class="item" v-for="user in userData.users" :key="user.id">
            <img :src="user.avatar" alt="Avatar">
            <p>{{ user.first_name }} {{ user.last_name }}</p>
            <a class="connect" v-bind:href="'mailto:' + user.email">Kontakt</a>
          </div>
        </div>   
        <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1">Före</button>
          <span>Sida {{ currentPage  }} av {{  totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Nästa</button>
        </div>    
          </body> 
</template> 

<style>
html{
  background-color: #e4e5ed;
  color: rgb(64, 63, 63);
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin: 10px;
}

.item {
 margin: 15px;
 padding: 5vw;
 border-radius: 5%;
 background: rgb(244,241,247);
 background: linear-gradient(0deg, rgba(244,241,247,1) 74%, rgba(123,123,244,1) 74%);
 box-shadow: 5px 5px 15px rgb(197, 202, 203);
}

.brand-logo{
    height: 20px;
    width: 20px;
    margin: 10px;
}

img {
    width: auto;
    height: auto;
    border-radius: 50%;
    border-style: solid;
    border-color: #f8f2f2;
    border-width: 5px;
}


.connect {
  padding: 6px;
  border-radius: 3px;
  border-style: solid;
}

.connect:hover {
  box-shadow: 0 0 0 1px #7b7bf4;
  background-color: #e8e5e5;

}

.pagination {
  display: flex;
  justify-content: center;
  padding: 20px;
}

button {
  background: #f8f2f2;
	color: inherit;
	font: inherit;
	cursor: pointer;
  border-radius: 3px;
  border-style: solid;
  border-color: #f8f2f2;
}

button:hover {
  background: #afafb2;
	color: inherit;
	font: inherit;
	cursor: pointer;
  border-radius: 3px;
  border-style: solid;
  border-color: #797981;
}

span {
  padding: 0 2% 0 2%;
}

@media (max-width: 600px) {
 

}
</style>../models/IUser