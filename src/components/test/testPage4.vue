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
    {name: 'a'},
    {name: 'b'},
    {name: 'c'},
    {name: 'c'},
    {name: 'e'},

])

</script>

<style lang="scss" scoped></style>
