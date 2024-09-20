<script setup>
import { contextHolder } from "@/components/antUi/antMessage.js";
import { RouterLink, RouterView } from "vue-router";
import { useGetDegreeInfo } from "@/global/getDegreeInfo.js";
import { onMounted, ref, watch } from "vue";
import { useStore } from "./store/store";
const store = useStore();

// const store = useStore()
const { degreeInfo } = useGetDegreeInfo();

onMounted(() => {
  if (!degreeInfo.data.success) {
    degreeInfo.refetch();
  }
});
</script>

<template>
  <div class="overflow-hidden">
    <context-holder />
    <RouterView />
    <!-- <SpinLoader v-if="store.state.isDataFetching" :is-align="true" /> -->
  </div>
</template>

<style scoped></style>
