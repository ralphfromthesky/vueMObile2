<template>
  <MainLayout v-if="store.state.showGames">
    <div class="flex flex-col w-screen gap-[.2rem] my-[.2rem]" id="mainDiv">
      <div class="flex flex-col gap-[.2rem] w-full p-[.2rem] pb-0 pt-0">
        <div
          class="flex w-full h-[2rem] rounded-[.2rem] bg-[#1A45B1] overflow-hidden"
          id="topElement"
        >
          <Carousel />
        </div>
        <div class="relative">
          <img
            src="/images/cjc1_style_1_bg.png"
            class="w-full h-[2rem] rounded-[.2rem"
          />

          <div class="bg-transparent absolute top-[1rem] right-[1.5rem]">
            <CountUp />
          </div>
        </div>
        <div
          class="flex justify-between items-center w-full h-[.6rem] rounded-[.1rem]"
        >
          <img src="/images/icon_dt_pmd.png" class="w-[.4rem]" alt="" />
          <div class="flex relative overflow-x-hidden items-center mx-[.1rem]">
            <div
              class="flex items-center animate-marquee whitespace-nowrap gap-[.2rem]"
            >
              <span class="text-[#ffff00] text-[.3rem]"
                >Convide amigos para enviar R$20 Entre no canal oficial de
                Telegram, receberá as últimas informações sobre desconto e
                recompensa na primeira mão.</span
              >
            </div>
          </div>
          <div class="relative">
          <img src="/images/unread.png" class="w-[1.3rem]" alt="" />
          <span class="h-1 text-[.20rem] bg-[red] absolute -top-[.1rem] -right-[.19rem] p-[.1rem] flex justify-between items-center rounded border-[.01rem] border-[white]">{{ store.state.userMessage?.content?.totalCount }}</span>
        </div>
        </div>
      </div>
      <NewVantTab>
        <template #fetch>
   
        </template>
      </NewVantTab>
  

      <!-- <div
        :class="[
          'flex items-center w-full overflow-auto sticky top-0 left-0 z-10 h-[1.06rem]',
          store.state.setThemes.lightTheme
            ? 'bg-[#f08abd] text-[white]'
            : 'bg-[#05309f] border-b-[#3A61C2] text-[white]',
          store.state.setThemes.darkTheme
            ? 'bg-[#1d1c1c] text-[white]'
            : 'bg-[#05309f] border-b-[#3A61C2] text-[white]',
        ]"
        ref="scrollContainer"
      >
        <div class="flex items-center gap-[.7rem] mx-[.2rem]">
          <div
            v-for="({ games, tab }, index) in games"
            :key="index"
            @click="() => gameClick(index, tab.code)"
            :class="[
              'transition-class',
              index === gameActive ? 'active-state' : 'inactive-state',
            ]"
            ref="itemRefs"
          >
            <img
              :src="`/logo/` + tab.code + `_active.png`"
              class="h-[.46rem]"
            />
            <button
              @click="scrollToSection(tab.id)"
              class="text-[.25rem] text-nowrap bg-transparent border-none cursor-pointer"
            >
              {{ tab.name }}
            </button>
          </div>
        </div>
      </div> -->

      <!-- <div class="flex flex-col gap-[.2rem] w-full p-[.2rem] pb-0 pt-0">
        <div
          v-for="({ games, tab }, index) in games"
          :key="index"
          :id="`${tab.id}_tab`"
          class="flex flex-col gap-[.2rem] scroll-smooth scroll-mt-5"
        >
          <div class="flex items-center w-full justify-between">
            <div class="`flex items-center gap-[.2rem]">
              <img
                :src="`/logo/` + tab.code + `_active.png`"
                class="h-[.55rem]"
              />

              <div class="text-white text-[.3rem]">{{ tab.name }}</div>
            </div>
            <div class="flex">
              <span class="text-[#6FA4EF] text-[.27rem]">Tudos</span>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-[.2rem] justify-items-center">
            <div
              v-for="(gameItems, indexes) in getFirstThreeImages(games, tab.id)"
              class="flex w-[2.1rem] h-[2.792rem] rounded-[.2rem] bg-[#1A45B1c] bg-[url('/images/BG.png')] bg-[length:1.2rem] bg-no-repeat bg-center relative"
              @click="getTabName(tab.name)"
            >
              <div>
                <img
                  :src="
                    gameItems.imgUrl.match('https')
                      ? gameItems.imgUrl
                      : `api` + gameItems.imgUrl
                  "
                  class="w-[2rem] h-[2.792rem] rounded-[.2rem]"
                  @click="
                    () =>
                      fetchGames(
                        gameItems?.forwardUrl,
                        gameItems?.popFrame,
                        gameItems?.gameTabType
                      )
                  "
                />
                <img
                  src="/images/star.png"
                  alt=""
                  class="absolute top-0 right-0 w-[.4rem] h-[.4rem] m-[.1rem]"
                />
              </div>
            </div>
          </div>
          <div
            class="flex flex-col w-full items-center justify-center"
            v-if="games.length > 3"
          >
            <span class="text-[#6FA4EF] text-[.26rem]">{{
              lang("ts0004")
            }}</span>
            <div
              class="flex gap-[.1rem] items-center"
              @click="toggleShowAll(tab.id)"
            >
              <span class="text-[#A0C5FB] text-[.26rem]">
                {{ lang("ts0005") }}
              </span>
              <img class="w-[.25rem]" src="/images/arrow-down.png" alt="" />
            </div>
          </div>
        </div>

      </div> -->
      <div class="absolute top-[7rem] right-0">
          <SupportLink
            @scroll-to="scrollToUp"
            :hideScrollTop="hideScrollToView"
          />
        </div>
      <div v-if="store.state?.userInfo?.isLogin">
        <AntModal
          :isOpen="store.state.openRedPacket"
          :componentPass="RedPacket"
          :bgColor="true"
        />
      </div>
      <!-- <AntModal :isOpen="true" :componentPass="Test" /> -->

      <!-- <AntModal :isOpen="true" :componentPass="Notice" /> -->
      <AntModal
        :isOpen="true"
        :componentPass="GetApplogin"
        v-if="store.state.userGetAppLogin?.length"
      />
      <AntModal
        :isOpen="store.state.turnLate"
        :componentPass="TurnLate"
        v-if="store.state.degreeInfo.success"
      />
      <AntModal
        :isOpen="store.state.loginModal"
        :componentPass="Login"
        :backGrounds="true"
        v-if="!store.state.userInfo.isLogin"
      />
      <AntModal
        :isOpen="store.state.RegisterModal"
        :componentPass="Register"
        :backGrounds="true"
      />
      <AntModal
        :isOpen="store.state.newTask"
        :componentPass="NewTask"
        :bgColor="true"
        v-if="store.state.userInfo.isLogin"
      />
      <div v-if="store.state?.userInfo?.isLogin"></div>
      <!-- <SpinLoader v-if="isFetching" /> -->

      <Slots
        :gameTypePass="gameTypeName"
        :headerName="headTitle"
        v-if="false"
      />
    </div>
  </MainLayout>
  <NewVantTab v-if="!store.state.showGames">
        <template #game>
   
        </template>
  </NewVantTab>
</template>

<script setup>
import {
  ref,
  onMounted,
  computed,
  watch,
  nextTick,
  defineAsyncComponent,
} from "vue";

import NewVantTab from "@/components/test/testPage4.vue";

const Login = defineAsyncComponent(() =>
  import("@/components/layout/LoginComponent/LoginForm.vue")
);
const SpinLoader = defineAsyncComponent(() =>
  import("@/components/antUi/spinLoader.vue")
);
const MainLayout = defineAsyncComponent(() =>
  import("../components/layout/MainLayout.vue")
);
const CountUp = defineAsyncComponent(() =>
  import("@/components/antUi/countUp.vue")
);
const Carousel = defineAsyncComponent(() =>
  import("@/components/carousel/carousel.vue")
);
const RedPacket = defineAsyncComponent(() =>
  import("@/components/redPacket/redpacket.vue")
);
const GetApplogin = defineAsyncComponent(() =>
  import("@/components/getApplogin/getApplogin.vue")
);
const Notice = defineAsyncComponent(() =>
  import("@/components/Notice/Notice.vue")
);
const Test = defineAsyncComponent(() => import("@/components/test/tested.vue"));
const NewTask = defineAsyncComponent(() =>
  import("@/components/Task/NewTask.vue")
);
const Slots = defineAsyncComponent(() => import("@/views/Slots/Slots.vue"));
const TurnLate = defineAsyncComponent(() =>
  import("@/components/turnLate/turnLate.vue")
);
const Register = defineAsyncComponent(() =>
  import("@/components/layout/RegisterComponent/RegisterForm.vue")
);
const SupportLink = defineAsyncComponent(() =>
  import("@/components/SupportLink/SupportLink.vue")
);

import { useQuery } from "@tanstack/vue-query";
import { axiosGet2 } from "../components/axios/AxiosHook.js";
import { getGamesTab } from "@/global/games.js";
const { getGameType, getGame } = getGamesTab();
import { getOnlineStatus } from "@/global/userConfig";
const { getOnline } = getOnlineStatus();
import { useGetUserInfo } from "@/global/getUserInfo.js";
const { query } = useGetUserInfo();
import { useStore } from "@/store/store.js";
import { useLogin } from "@/global/loginQuery.js";
const { mutation } = useLogin();
const headTitle = ref("");
const loginModal = ref(false);
const regModal = ref(false);
import { changeLang } from "@/global/Translation/translation.js";
const { lang } = changeLang();
const forwardGame = ref([]);
const store = useStore();
const openModal = ref(true);
const showGames = ref(false);
const hideMain = ref(true);
const gameUrl = ref("");
const games = ref([]);
const gameType = ref("");
const gameButtons = ref([]);
import router from "@/router";
const gameActive = ref(0);
const showAllGames = ref({});
const scrollContainer = ref(null);
const itemRefs = ref([]);
const hideScrollToView = ref(true);

const scrollToUp = () => {
  const topElement = document.getElementById("topElement");
  if (topElement) {
    topElement.scrollIntoView({ behavior: "smooth" });
  }
};

// const getFirstThreeImages = (games, tabId) => {
//   return showAllGames.value[tabId] ? games : games.slice(0, 3);
// };

onMounted(() => {
  getOnline.refetch();
});
</script>

<style scoped>
.transition-class {
  transition: transform 0.3s ease, border-bottom 0.3s ease, padding 0.3s ease;
}

.active-state {
  border-bottom: 2px solid #f8fafd;
  padding-bottom: 0.2rem;
}

.inactive-state {
  border-bottom: none;
  padding-bottom: 0.2rem;
}
@media (min-width: 431px) {
  #mainDiv {
    width: 100%;
    /* padding: 0 5px 0 5px; */
  }
  .gameContainer {
    width: 7.4rem;
  }
}
</style>
