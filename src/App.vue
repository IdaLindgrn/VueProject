<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar/>
  <router-view/>
</template>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 0;
  overflow: hidden;
}
</style>
