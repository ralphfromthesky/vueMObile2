<template>
  <div>
    <div>
      <VantTabs
        :title-links="tabNames"
        :component-pass="[
          PromoTuturial,
          InvitationPage,
          Commission,
          Performance,
          AllData,
          DirectFinancing,
          DirectBettingPage,
          DirectDataPage,
          SubordinatesRequests,
          DirectReporting,
          CommissionRate,
        ]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PromoTuturial from "@/views/Invite/PromoTutorial.vue";
import InvitationPage from "@/views/Invite/InvitationPage.vue";
import Commission from "@/views/Invite/Commission.vue";
import Performance from "@/views/Invite/Performance.vue";
import AllData from "@/views/Invite/AllData.vue";
import DirectFinancing from "@/views/Invite/DirectFinancing.vue";
import DirectBettingPage from "@/views/Invite/DirectBettingPage.vue";
import DirectDataPage from "@/views/Invite/DirectDataPage.vue";
import SubordinatesRequests from "@/views/Invite/SubordinatesRequests.vue";
import DirectReporting from "@/views/Invite/DirectReporting.vue";
import CommissionRate from "@/views/Invite/CommissionRate.vue";

const tabNames = ref([
  { title: "Rede do Agente" },
  { title: "Link de Convite" },
  { title: "Comissão" },
  { title: "Desempenho" },
  { title: "Todos os dados" },
  { title: "Finanças dos Subordinados" },
  { title: "Apostas dos Subordinados" },
  { title: "Dados do subordinado" },
  { title: "Directly Reporting" },
  { title: "Taxa deComissão" },
]);
</script>

<style lang="scss" scoped></style>
