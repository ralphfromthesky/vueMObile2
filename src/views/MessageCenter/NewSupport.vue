<template>
  <div>
    <div class="text-center text-[.4rem] py-[.1rem] text-[white]">Centro de mensagens
</div>
    <div>
      <VantTabs :title-links="tabTitle" :component-pass="[Support, Notice, Notification, Announcement, Suggestion]" :indexPass=store.state.indexPass />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Support from "./Support.vue";
import Notice from "./Notice.vue";
import Notification from "./Notification.vue"; 
import Announcement from "./Announcement.vue";
import Suggestion from "./Suggestion.vue";
import { useStore } from "@/store/store";
const store = useStore()



const tabTitle = ref([
  { title: "Suporte" },
  { title: "Notice" },
  { title: "Notification" },
  { title: "Painel Rolante" },
  { title: "Bônus de Sugestão" },

]);
</script>

<style lang="scss" scoped></style>
