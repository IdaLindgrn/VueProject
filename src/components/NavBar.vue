<script setup lang="ts"></script>

<template>
<ul id="nav"> 
    <li><router-link to="/">Sida 1</router-link></li>
    <li><router-link to="/2">Sida 2</router-link></li>
</ul>
</template>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #c1a7a7;
  height: 10vh;
}

li {
  float: left;
  display: block;
  text-align: center;
  padding: 20px 20px;
  text-decoration: none;
}

li:hover {
  background-color: #ab9595;
}

</style>