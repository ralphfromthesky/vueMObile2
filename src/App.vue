<script setup>
import {contextHolder} from '@/components/antUi/antMessage.js'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useGetDegreeInfo } from '@/global/getDegreeInfo.js';
import { onMounted, ref, watch } from 'vue';
import { useStore } from './store/store';
const store = useStore()
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
// window.addEventListener('scroll', handleScroll)
 if(!degreeInfo.data.success) {
  degreeInfo.refetch()
 }

})
</script>

<template>
    <context-holder />

  <RouterView />
      <!-- <SpinLoader v-if="store.state.isDataFetching"  :is-align="true"/> -->

</template>

<style scoped></style>
