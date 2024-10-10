
<template>
  <div class="overflow-hidden">
    <context-holder />
    <RouterView />
    <SpinLoader v-if="store.state.isDataFetching" />

    <!-- <RouterView v-slot="{Component}">
      <transition :name="slideDirection" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </RouterView> -->
  </div>
</template>

<script setup>
import { contextHolder } from "@/components/antUi/antMessage.js";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { useGetDegreeInfo } from "@/global/getDegreeInfo.js";
import { onMounted, ref, watch } from "vue";
import { useStore } from "./store/store";
const store = useStore();
const { degreeInfo } = useGetDegreeInfo();
const slideDirection = ref('slide-left'); // Default slide direction

watch(() => store.state.isDataFetching, (newVal) => {
  if(newVal) {
    alert(newVal)
  }
})



onMounted(() => {
  if (!degreeInfo.data.success) {
    degreeInfo.refetch();
  }
  if(store.state.userMessage?.content?.datas?.length > 0) {
        store.commit('sethasMessage', true)
      }
      
});
</script>

<style scoped>

.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(-100%);
}

/* Slide from the left */
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(100%);
}
</style>
