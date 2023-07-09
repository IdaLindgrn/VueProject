
<script setup lang="ts">
import axios, { AxiosResponse } from 'axios';
import { ref, onMounted } from 'vue';
import User from '../models/User.model'

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
</script>

<template>
    <body>	
        <div id = "family-brands-container">    
            <div class="flex-grid-2">
            <div v-for="user in users" :key="user.id">
            <img :src="user.avatar" alt="Avatar">
            <p>{{ user.first_name }}{{ user.last_name }}</p>
            <a v-bind:href="'mailto:' + user.email">Connect</a>
        </div>   
        </div>  
          </div>     
          </body> 
</template> 

<style>
html{
  background-color: #f8f2f2;
  color: rgb(64, 63, 63);
}

.flex-grid-2 {
  display: flex;
  flex-flow: row;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin: 10px;
 
}

.brand-col{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 10px;
  border: 1px solid #00aedb;
  width: 400px;
  height: 200px;
}

.brand-logo{
    height: 20px;
    width: 20px;
    background-color: #f37735;
    margin: 10px;
}

img {
    width: 150px;
    border-radius: 50%;
}

a {
    text-decoration: none;
    color: rgb(64, 63, 63);
  }

@media (max-width: 600px) {
  .flex-grid-2 {
   flex-flow: column;
  }
  
  .brand-col{
  width: auto;
  height: 300px;
  }
}
</style>