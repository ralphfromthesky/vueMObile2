<template>\
  <div class="bg-[#1a45b1] h-screen">
    <div>
      <VantTabs
        :title-links="navLinks"
        :has-padding-left="true"
        :component-pass="[
          EventPage,
          Task,
          VipPage,
          Redemption,
          Pendente,
          JurosMainPage,
          Historico,
        ]"
        :indexPass=store.state.indexPass
      />
    </div>
    <BottomNavbar />
  </div>
</template>

<script setup>
// import VantTabs from "@/components/vantUi/vantTabs.vue";
import BottomNavbar from "./BottomNavbar.vue";
import { ref, defineAsyncComponent } from "vue";
import VipPage from "@/views/Vip/VipPage.vue";
import Task from "@/views/Task/task.vue";
import Redemption from "@/views/Redemption/redemption.vue";
import Pendente from "@/views/Pendente/Pendente.vue";
import JurosMainPage from "@/views/Juros/JurosMainPage.vue";
import Historico from "@/views/Records/historico.vue";
import EventPage from "@/views/Event/EventPage.vue";
import { useStore } from "@/store/store";
const store = useStore();

// const VipPage = defineAsyncComponent(() => import( '@/views/Vip/VipPage.vue'))
// const Task = defineAsyncComponent(() => import( '@/views/Vip/VipPage.vue'))
// const Redemption = defineAsyncComponent(() => import( '@/views/Vip/VipPage.vue'))
// const Pendente = defineAsyncComponent(() => import( '@/views/Vip/VipPage.vue'))
// const JurosMainPage = defineAsyncComponent(() => import( '@/views/Vip/VipPage.vue'))
// const Historico = defineAsyncComponent(() => import( '@/views/Vip/VipPage.vue'))
// const EventPage = defineAsyncComponent(() => import( '@/views/Vip/VipPage.vue'))

const navLinks = ref([
  { title: "Events" },
  { title: "Mission" },
  { title: "Vip" },
  { title: "Redemption" },
  { title: "Pendentets" },
  { title: "Juros" },
  { title: "History" },
]);
</script>

<style lang="scss" scoped></style>
