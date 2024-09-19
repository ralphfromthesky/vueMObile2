<template>
  <div>
    <div class="text-center text-[.4rem] py-[.1rem] text-[white]">Centro de mensagens
</div>
    <div>
      <VantTabs :title-links="tabTitle" :component-pass="[Support, Notice, Notification]"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Support from "./Support.vue";
import Notice from "./Notice.vue";
import Notification from "./Notification.vue";

const tabTitle = ref([
  { title: "SUporte" },
  { title: "SUporte" },
  { title: "SUporte" },
  { title: "SUporte" },
  { title: "SUporte" },
  { title: "SUporte" },
  { title: "SUporte" },
]);
</script>

<style lang="scss" scoped></style>
