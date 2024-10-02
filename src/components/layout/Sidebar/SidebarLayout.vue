<template>
  <div
    :class="[
      ' h-[calc(100vh-.9rem)] w-[3rem] p-[.15rem] overflow-auto',
      stores.state.setThemes.lightTheme
        ? 'bg-[#f08abd] text-[white]'
        : 'bg-[#05309F] text-[white]',
      stores.state.setThemes.darkTheme
        ? 'bg-[black] text-[white] border-r-[.01rem] border-[#30302f]'
        : 'bg-[#05309F] text-[white]',
    ]"
  >
    <div class="flex flex-col w-full gap-[.1rem]">
      <span
        class="h-[.8rem] bg-[url('https://mt0.yibo22.com/mobile/wap2/dist/static/img/heijinBg.b70d1998.png')] bg-[#25200b] bg-cover bg-center text-[#dfd54b] flex items-center font-bold justify-start p-[.1rem] rounded-[.1rem]"
        @click="exclusive"
        >Exclusive</span
      >

      <span>
        <span
          class="bg-[#3A61C2] rounded-[.1rem] flex items-center justify-end"
        >
          <span class="jackpot-text mr-[.3rem] z-10">TRY ME! </span>
          <span class="relative">
            <img src="/turnlateImages/rotate.png" class="rotate" alt="" />
            <img
              src="/turnlateImages/rotate2.png"
              class="absolute h-[.9rem] top-[.32rem] left-[.53rem] transform -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
          </span>
        </span>
      </span>

      <div class="grid grid-cols-2 gap-[.1rem]">
        <div
          v-for="({ games, tab }, index) in games"
          :key="index"
          class="flex flex-col items-center justify-center spicyHotdog"
          @click="scrollToGames(tab.id)"
        >
          <img :src="`/logo/` + tab?.code + `_active.png`" class="h-[.4rem]" />
          <div class="text-white text-[.16rem] text-nowrap">
            {{ tab?.name }}
          </div>
        </div>
      </div>
      <div
        class="w-full h-[.9rem] bg-[#3A61C2] rounded-[.1rem] flex items-center justify-center gap-[.2rem]"
        @click="gotoPages('/mainNav', 6)"
      >
        <img src="/images/betHist.png" alt="" class="w-[.4rem]" />
        <span class="text-white text-[.24rem]">Betting History</span>
      </div>
      <div
        class="grid grid-cols-2 w-full h-auto bg-[#3A61C2] rounded-[.1rem] gap-[.1rem] p-[.1rem] leading-none"
      >
        <div v-for="(e, index) in sidebarLinks" :key="e.title" :style="{backgroundImage: `url('${e.img}')`}" class="relative yummyHakdog leading-none"
          @click="e.func()"
          >
        
          <span
            class="text-white text-[.15rem] absolute top-[.05rem] left-[.05rem]"
            >  {{ e.title }}</span
          >
        </div>
      </div>
      <div class="flex flex-col gap-[.1rem]">
        <div
          class="flex gap-[.1rem] items-center"
          @click="popLanguage = !popLanguage"
        >
          <div class="w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]">
            <img src="/images/globe.png" alt="" class="w-[.3rem]" />
          </div>
          <div class="text-[.22rem]">Language</div>
        </div>
        <div
          class="flex gap-[.1rem] items-center"
          @click="setThemes = !setThemes"
        >
          <div class="w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]">
            <img src="/images/globe.png" alt="" class="w-[.3rem]" />
          </div>
          <div class="text-[.22rem]">Themes</div>
        </div>
        <div class="flex gap-[.1rem] items-center">
          <div class="w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]">
            <img src="/images/down.png" alt="" class="w-[.5rem]" />
          </div>
          <a href="https://vk8.me/app/mg_MP6D" target="_blank">
            <div class="text-[.22rem]">Download App</div>
          </a>
        </div>
        <div class="flex gap-[.1rem] items-center">
          <div class="w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]">
            <img src="/images/call.png" alt="" class="w-[.5rem]" />
          </div>
          <div class="text-[.22rem]" @click="navigateTo('/newsupport')">
            Support
          </div>
        </div>
        <div class="flex gap-[.1rem] items-center">
          <div class="w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]">
            <img src="/images/wenhao.png" alt="" class="w-[.5rem]" />
          </div>
          <div class="text-[.22rem]" @click="navigateTo('/newsupport')">
            FAQ
          </div>
        </div>
        <div class="h-[4rem] border-2">ds</div>
      </div>
    </div>

    <AntModal
      :isOpen="popLanguage"
      :componentPass="Language"
      :backGrounds="true"
    />
    <AntModal :isOpen="setThemes" :bgColor="true" themePass="Change Themes" />
  </div>
</template>
<style>
.spicyHotdog {
  @apply w-[1.3rem] h-[.9rem] bg-[#3A61C2] rounded-[.1rem];
}

.yummyHakdog {
  @apply h-[.8rem] bg-[#05309F] w-full rounded-[.1rem] bg-cover;
}
</style>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { store } from "../../../store";
import { axiosGet2 } from "../../../components/axios/AxiosHook.js";
import { useStore } from "@/store/store";
import { useRouter } from "vue-router";
const router = useRouter()

const Register = defineAsyncComponent(() =>
  import("../RegisterComponent/RegisterForm.vue")
);
const Language = defineAsyncComponent(() =>
  import("@/global/Translation/Language.vue")
);

const popLanguage = ref(false);
const setThemes = ref(false);
const stores = useStore();
const loginModal = ref(false);
import { navigateTo } from "@/global/navigation.js";
const games = ref([]);
const showRegModal = () => {
  !stores.state.userInfo.isLogin
    ? (loginModal.value = !loginModal.value)
    : navigateTo("/bettingrecords");
};
const { isLoading } = useQuery({
  queryKey: ["userGames"],
  queryFn: async () =>
    await axiosGet2("/api/getGames.do?type=11&limitNum=50&lang=en"),
  staleTime: 1000,
  select: (data) => {
    games.value = data;
  },
});

const scrollToGames = (id) => {
  stores.commit("setScrollTo", id);
  // store.OpenClose();
  stores.commit('setsideBar')
};

const exclusive = () => {
  if (!stores.state.userInfo.isLogin) {
    loginModal.value = !loginModal.value;
  }
  stores.commit("setAntMOdal", true);
};

const sidebarLinks = ref([
  {
    title: "Eventos",
    img: "/sidebarImages/event.png",
    bg: "3A61C2",
    func: () => router.push("/mainNav"),
  },
  {
    title: "Pendente",
    img: "/sidebarImages/gift.png",
    bg: "3A61C2",
    func: () =>  gotoPages('/mainNav', 4)
  },

  { title: "History", img: "/sidebarImages/present.png", func:  () =>  gotoPages('/mainNav', 6) },
  { title: "Juros", img: "/sidebarImages/bank.png", func:  () =>  gotoPages('/mainNav', 5) },
  { title: "Vip", img: "/sidebarImages/king.png", func:  () =>  gotoPages('/mainNav', 2) },
  { title: "Mission Centers", img: "/sidebarImages/calendar.png", func:  () =>  navigateTo('/mainNav', 1) },
  { title: "rebate", img: "/sidebarImages/rebate.png", func:  () =>  gotoPages('/mainNav', 8) },
  { title: "Agente", img: "/sidebarImages/convide.png", func: () =>  router.push('/invite')  },
  { title: "Red envelope", img: "/sidebarImages/red.png", func:  () => stores.state.userInfo.isLogin ? stores.commit('setopenRedPacket', true) : stores.commit('setloginModal', true)},
  { title: "Earn free", img: "/sidebarImages/pdd.png", func:  () =>  gotoPages('/lottery') },

  { title: "Bonus wallet", img: "/sidebarImages/cj.png", func:  () =>  gotoPages('/lottery') },
  { title: "Redemption code", img: "/sidebarImages/redemp.png", func:  () =>  gotoPages('/mainNav', 3) },
]);

 const gotoPages = (link, num) => {
  if(stores.state?.userInfo?.isLogin) {
    navigateTo(link, num)
  stores.commit('setIndexPass', num)
  } else {
    stores.commit('setloginModal', true)
  }

 }
</script>

<style scoped>
.rotate {
  animation: rotates 6s linear infinite;
}

@keyframes rotates {
  100% {
    transform: rotate(1800deg);
  }
}
.jackpot-text {
  @apply font-bold relative text-yellow-400;
  text-shadow: 1px 1px 0px red, -1px -1px 0px red, 1px -1px 0px red,
    -1px 1px 0px rgb(236, 227, 227);
}
</style>
