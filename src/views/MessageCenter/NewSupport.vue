<template>
  <div>
    <div>
      <VantTabs
        :title-links="tabTitle"
        :component-pass="[
          Support,
          Notice,
          Notification,
          Announcement,
          Suggestion,
        ]"
        :indexPass="store.state.indexPass"
        title="Centro de mensagens"
      />
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
const store = useStore();

const tabTitle = ref([
  { title: "Suporte" },
  { title: "Notice" },
  { title: "Notification" },
  { title: "Painel Rolante" },
  { title: "Bônus de Sugestão" },
]);
</script>

<style lang="scss" scoped></style>
