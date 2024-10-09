<template>
  <main class="mainDiv">
    <NavBar></NavBar>
    <div
      :class="[
        'flex relative',
        newStore.state.setThemes.lightTheme
          ? 'bg-[#f758a7] text-[white]'
          : 'bg-[url(/images/bg_pattern_tile.png)]',
        newStore.state.setThemes.lightTheme
          ? 'bg-[url(/images/bg_theme_tile.png)]'
          : ' text-[white] bg-[#05309F]',
        newStore.state.setThemes.darkTheme
          ? 'bg-[black] text-[white]'
          : 'bg-[url(/images/bg_pattern_tile.png)]',
        newStore.state.setThemes.darkTheme
          ? 'bg-[url(/images/bg_pattern_tile.png)]'
          : 'bg-[#05309F] text-[white]',
      ]"
    >
      <div
        @click="newStore.commit('setsideBar')"
        :class="
         newStore.state.sideBar
            ? `w-screen h-[calc(100vh-.896rem)] mt-[.896rem] bg-[#f8f5f5b3] fixed top-0 z-20 fadeIn transition-all`
            : `w-screen h-[calc(100vh-.896rem)] mt-[.896rem] bg-[#000000b3] fixed top-0 z-20 fadeOut transition-all`
        "
        :hidden="newStore.state.sideBar"
      ></div>
      <div
      class="slide-in z-20 absolute"
        :class="
            newStore.state.sideBar
            ? `slide-in z-20 absolute`
            : `slide-out z-20 absolute`
        "
      >
        <SideBar></SideBar>
      </div>
      <section class="h-[calc(100vh-.9rem)] overflow-auto">
        <div class="flex items-center justify-center w-full">
          <slot></slot>
        </div>
        <Footer></Footer>
      </section>
    </div>
    <BottomNavbar></BottomNavbar>
  </main>
</template>
<script setup>
import {
  onMounted,
  ref,
  watchEffect,
  watch,
  onUnmounted,
  defineAsyncComponent,
} from "vue";
// import NavBar from './Navigation/NavBarLayout.vue'
const NavBar = defineAsyncComponent(() =>
  import("./Navigation/NavBarLayout.vue")
);
const Footer = defineAsyncComponent(() => import("./Footer/FooterLayout.vue"));
const BottomNavbar = defineAsyncComponent(() =>
  import("./Navigation/BottomNavbar.vue")
);

const SideBar = defineAsyncComponent(() =>
  import("./Sidebar/SidebarLayout.vue")
);
// import SideBar from './Sidebar/SidebarLayout.vue'
// import Footer from './Footer/FooterLayout.vue'
// import BottomNavbar from './Navigation/BottomNavbar.vue'
import { store } from "../../store";
import { useStore } from "@/store/store";
const newStore = useStore();
import { useGetUserConfig } from "@/global/userConfig";
import { messageApi } from "../antUi/antMessage";
import { RouterView } from "vue-router";
const { userConfig } = useGetUserConfig();
watchEffect(() => {
  userConfig.refetch();
});
</script>

<style>

.slide-in {
  animation: slide-in 0.3s forwards;
  -webkit-animation: slide-in 0.3s forwards;
}

.slide-out {
  animation: slide-out 0.3s backwards;
  -webkit-animation: slide-out 0.3s backwards;
}

.fadeIn {
  animation: fadeIn ease-in-out 0.3s;
  -webkit-animation: fadeIn ease-in-out 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.fadeOut {
  animation: fadeOut ease-in-out 0.3s;
  -webkit-animation: fadeOut ease-in-out 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}

@keyframes slide-in {
  100% {
    transform: translateX(-100%);
  }
}

@-webkit-keyframes slide-in {
  100% {
    -webkit-transform: translateX(0%);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}

@-webkit-keyframes slide-out {
  0% {
    -webkit-transform: translateX(-100%);
  }

  100% {
    -webkit-transform: translateX(0%);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@media (min-width: 431px) {
  .mainDiv {
    width: 100%;
    overflow: hidden;
  }
}
</style>
