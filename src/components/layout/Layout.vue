
<template>
  <main>
      <NavBarTab></NavBarTab>
      <div class="mainDiv2 flex bg-[#1a45b1]">
        <section class=" h-[calc(100vh-1.7rem)] pb-[.2rem] w-full overflow-auto">
          <div class=" flex items-center justify-center w-full">
              <div class="mainDiv">
                <slot></slot>
              </div>
          </div>
        </section>
      </div>
        

      <BottomNavbar></BottomNavbar>
  </main>

</template>

<script setup>
import { ref } from "vue";
import BottomNavbar from "./Navigation/BottomNavbar.vue";
import NavBarTab from "./Navigation/NavBarTab.vue";
import vantTabs from "../vantUi/vantTabs.vue";
import VipPage from "@/views/Vip/VipPage.vue";
import Task from "@/views/Task/task.vue";
import EventPage from "@/views/Event/EventPage.vue";
import Redemption from "@/views/Redemption/redemption.vue";
import JurosMainPage from "@/views/Juros/JurosMainPage.vue";

const transitionName = ref("route-forward");

import { useRouter } from "vue-router";
const router = useRouter();
router.beforeEach((to, from, next) => {
  if (to.meta.index > from.meta.index) {
    transitionName.value = "route-forward";
  } else {
    transitionName.value = "route-backward";
  }
  next();
});

const navLinks = ref([
  {title: 'Events', link: '/event'},
  {title: 'Mission', link: '/task'},
  {title: 'Vip', link: '/vip'},
  {title: 'Redemption', link: '/redemption'},
  {title: 'Pendentets', link: '/pendente'},
  {title: 'Juros', link: '/juros'},
  {title: 'History', link: '/records'},

])
</script>

<style scoped>
.route-forward-enter-from {
  opacity: 0;
  transform: translateX(10rem);
}

.route-forward-enter-active {
  transition: all 0.3s ease-out;
}

.route-forward-leave-to {
  opacity: 0;
  transform: translateX(-10rem);
}

.route-forward-leave-active {
  transition: all 0.3s ease-in;
}

.route-backward-enter-from {
  opacity: 0;
  transform: translateX(-10rem);
}

.route-backward-enter-active {
  transition: all 0.3s ease-out;
}

.route-backward-leave-to {
  opacity: 0;
  transform: translateX(10rem);
}

.route-backward-leave-active {
  transition: all 0.3s ease-in;
}
@media (min-width: 432px) {
      .mainDiv {
        width: auto;

      }

    }

</style>
