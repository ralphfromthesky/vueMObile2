<template>
  <div>
    <van-tabs v-model:active="active" scrollspy sticky>
      <van-tab v-for="index in tablinks" :title="'Tab ' + index.name">
        <div class="h-[5rem]">
{{ index.name }}
        </div>
      </van-tab>
    </van-tabs>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tablinks = ref([
    {name: 'fasdfasf'},
    {name: 'fasddfasdfasf'},
    {name: 'fasdfasdfasf'},
    {name: 'fasdasdfafasf'},
    {name: 'fasdasdffasf'},

])

</script>

<style lang="scss" scoped></style>
