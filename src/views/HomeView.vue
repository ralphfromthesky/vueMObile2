<template>
  <div v-if="showGames" class="relative">
    <div class="absolute top-[.5rem] left-[.1rem]" @click="backlush">
      <img src="/public/home.png" alt="" srcset="" class="h-[1rem]" />
    </div>
    <iframe
      :src="showIframe"
      frameborder="0"
      class="gameContainer w-screen h-screen"
    ></iframe>
  </div>
  <MainLayout v-if="hideMain">
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
          <img src="/images/unread.png" class="w-[.4rem]" alt="" />
        </div>
      </div>

      <div
        :class="['flex items-center w-full overflow-auto sticky top-0 left-0 z-10 h-[1.06rem]',
      store.state.setThemes.lightTheme ? 'bg-[#f08abd] text-[white]' : 'bg-[#05309f] border-b-[#3A61C2] text-[white]',
      store.state.setThemes.darkTheme ? 'bg-[#1d1c1c] text-[white]' : 'bg-[#05309f] border-b-[#3A61C2] text-[white]'
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
              class=" text-[.25rem] text-nowrap bg-transparent border-none cursor-pointer"
            >
              {{ tab.name }} 
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-[.2rem] w-full p-[.2rem] pb-0 pt-0">
        <div
          v-for="({games, tab }, index) in games"
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
        <!-- <Toast/> -->
        <div class="absolute top-[7rem] right-0">
          <SupportLink
            @scroll-to="scrollToUp"
            :hideScrollTop="hideScrollToView"
          />
        </div>
      </div>
      <div v-if="store.state?.userInfo?.isLogin">
        <AntModal :isOpen="store.state.openRedPacket" :componentPass="RedPacket" :bgColor="true" />
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

const backlush = () => {
  transOut();
  hideMain.value = true;
  showGames.value = false;
};
const { refetch: transOut } = useQuery({
  queryKey: ["transOut"],
  queryFn: () => axiosGet2("/api/native/v2/autoTranout.do?lan=en"),
});

const {} = useQuery({
  queryKey: ["userGames"],
  queryFn: async () =>
    await axiosGet2("/api/getGames.do?type=11&limitNum=50&lang=en"),
  staleTime: 1000,
  select: (data) => {
    games.value = data.filter((entry) => entry.games.length > 0);
    store.commit(
      "setGetGames",
      data.filter((entry) => entry.games.length > 0)
    );
  },
});

const gameClick = (index, id) => {
  gameActive.value = index;
};

const fetchGames = (url, popFrame, gameTabType) => {
  if (!store.state.userInfo.isLogin) {
    loginModal.value = !loginModal.value;
    return;
  }
  if (popFrame === false) {
    gameUrl.value = url;
    refetch();
  }
  if (popFrame === true) {
    // alert(popFrame, gameTabType);
    // router.push("/Slots")
    return;
  }
};

const getTabName = (tabName) => {
  if (tabName === "Slots") {
    headTitle.value = "Slots";
    gameType.value = "pg";
    getGameType.value = 2;
    getGame.refetch();
    router.push("/slots");
    store.commit("setForwardname", "Slots");
    store.commit("setTypes", gameType.value);
  }
  if (tabName === "Fishing") {
    gameType.value = "bbinFish";
    getGameType.value = 7;
    getGame.refetch();
    router.push("/slots");
    store.commit("setForwardname", "Fishing");
    store.commit("setTypes", gameType.value);
  }
  if (tabName === "Live Casino") {
    gameType.value = "agLive";
    getGameType.value = 1;
    getGame.refetch();
    router.push("/slots");
    store.commit("setForwardname", "Live Casino");
    store.commit("setTypes", gameType.value);
  }
  if (tabName === "Sports") {
    gameType.value = "tysbSport";
    getGameType.value = 0;
    getGame.refetch();
    router.push("/slots");
    store.commit("setForwardname", "Sports");
    store.commit("setTypes", gameType.value);
  }
};

const slide = async (newIndex) => {
  await nextTick();
  const container = scrollContainer.value;
  const item = itemRefs.value[newIndex];

  if (container && item) {
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const scrollTo =
      itemRect.left -
      containerRect.left +
      container.scrollLeft -
      containerRect.width / 2 +
      itemRect.width / 2;

    container.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  }
};

const { refetch, isLoading, isFetching } = useQuery({
  queryKey: ["games", gameUrl.value],
  queryFn: async () => await axiosGet2(`/api${gameUrl.value}`),
  select: (data) => {
    forwardGame.value = data;
    if (gameUrl.value) {
      hideMain.value = false;
      showGames.value = true;
    }
  },
});

const scrollToSection = (id) => {
  // alert(id)
  const element = document.getElementById(`${id}_tab`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  if (id === 263) {
    hideScrollToView.value = false;
  }
};

const scrollToUp = () => {
  const topElement = document.getElementById("topElement");
  if (topElement) {
    topElement.scrollIntoView({ behavior: "smooth" });
  }
};

const showIframe = computed(() => {
  return forwardGame.value?.url || "";
});

const gameTypeName = computed(() => {
  store.commit("setGameTypes", gameType.value);
  return gameType.value;
});

const getFirstThreeImages = (games, tabId) => {
  return showAllGames.value[tabId] ? games : games.slice(0, 3);
};

const toggleShowAll = (tabId) => {
  showAllGames.value[tabId] === undefined
    ? (showAllGames.value[tabId] = false)
    : (showAllGames.value[tabId] = !showAllGames.value[tabId]);
};

watch(
  () => store.state.scrollTo,
  (newVal) => {
    // alert(`this alert from home ${newVal}`)
    const convertedVal = {
      129: 0,
      501: 1,
      263: 2,
      503: 3,
      124: 4,
      127: 5,
      123: 6,
      279: 7,
      322: 8,
      125: 9,
      322: 10,
      280: 11,
    };

    gameClick(convertedVal[newVal]);
    slide(convertedVal[newVal]);
    setTimeout(() => {
      scrollToSection(newVal);
    }, 400);
  }
);

onMounted(() => {
  getOnline.refetch();
  store.commit("setDataFetching", isFetching);
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
    padding: 0 5px 0 5px;
  }
  .gameContainer {
    width: 7.4rem;
  }
}
</style>
