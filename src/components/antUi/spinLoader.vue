<template>
    <a-spin :indicator="indicator" :class="props.isAlign ? 'custom1': 'absolute top-[7rem] right-[3rem] z-10'" />
  </template>
  <script setup>
  import { LoadingOutlined } from '@ant-design/icons-vue';
  import { h } from 'vue';
  const props = defineProps({
    loading: Boolean,
    isAlign: {
      type: Boolean,
      default: false
    }
    
  })
  const indicator = h(LoadingOutlined, {
    style: {
      fontSize: '1.5rem',
      color: '#FFF0BB'
    },
    spin: true,
  });
  </script>

  <style scoped>
  @media screen and (min-width: 430px) {
    .custom1 {
      position: absolute;
      left: 40%;
      top: 40%;
      
    }
  }

</style>