<template>
    <div>
        <van-tabs v-model:active="active">
  <van-tab v-for="index in 4" :title="'Tab ' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);

</script>

<style lang="scss" scoped>

</style>