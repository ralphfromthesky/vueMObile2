<template>
  <div>
    <div class="text-[yellow]"><slot name="header"></slot></div>
    <div
      class="bg-white h-[2rem] w-[5rem] flex gap-1 justify-center items-center"
    >
      <div class="h-[.5rem] bg-[black] w-[.3rem]">a</div>
      <div class="h-[.5rem] bg-[black] w-[.3rem]">b</div>
      <div class="h-[.5rem] bg-[black] w-[.3rem]">c</div>
      <div class="h-[.5rem] bg-[black] w-[.3rem]">d</div>
    </div>
    <div class="text-[white]"><slot name="footer" v-bind:data="data"></slot></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {name: 'ralph'}, 
  {name: 'gadwin'}, 
  {name: 'shenron'}, 

  
])


</script>

<style lang="scss" scoped></style>
