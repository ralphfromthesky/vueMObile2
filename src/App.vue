<script setup>
import {contextHolder} from '@/components/antUi/antMessage.js'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useGetDegreeInfo } from '@/global/getDegreeInfo.js';
import { onMounted, ref, watch } from 'vue';
import { useStore } from './store/store';
const scrolled = ref(false)

const handleScroll = () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  scrolled.value = scrollY > viewportHeight;
}


watch(() => scrolled.value, (newval) => {
    alert('----->' + newval)
})

// const store = useStore()
const { degreeInfo } = useGetDegreeInfo()

onMounted(() => {
  // const accountInfo = store.state.userInfo
  // if (accountInfo.isLogin === false) {
  //   registerConfig.refetch()
  // }
    window.addEventListener('scroll', handleScroll)


  degreeInfo.refetch()
  // if(!store.state.degreeInfo.isLogin) {
  //   messageApi.info(store.state.degreeInfo.msg);

  //       localStorage.clear();
  //       router.push('/')
  //   }
})
</script>

<template>
    <context-holder />

  <RouterView />
</template>

<style scoped></style>
