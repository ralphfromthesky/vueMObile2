<template>
  <div class=" bg-[#1A45B1] h-screen">
    <div v-if="nowShowingGames" class="relative">
      <div class="absolute top-[1rem] left-[.1rem]" @click="backlush">
        <img src="/public/home.png" alt="" srcset="" class="h-[1rem]" />
      </div>
      <iframe
        :src="showIframGames"
        frameborder="0"
        class="w-screen h-screen"
      ></iframe>
    </div>

    <div class="custom2 relative bg-[#1A45B1]" v-if="hideMain">
      <div>
        <div class="text-white flex items-center justify-between pt-[.3rem] font-[1rem]">
            <span class="text-[.5rem] pl-[.5rem]" @click="router.push('/')"><img src="/images/back.png" alt="" class="w-[.3rem]"></span>
          
          <span class="text-[.5rem]">{{ store.state.forwardGame }}</span>
          <span></span>
        </div>
        <div class="border-3"></div>

        <div class="text-white overflow-auto custom1 w-auto p-[.2rem] bg-[#1A45B1]">
          <div class="flex justify-center my-[.1rem] relative">
            <a-input
              placeholder="ID de Membro"
              class="bg-transparent text-[white] placeholder-[white]"
            />
            <img
              src="/images/search.png"
              alt=""
              class="w-[.25rem] h-[.25rem] absolute top-[.15rem] right-[.2rem]"
            />
          </div>
          <div class="flex h-[12rem]">
            <div class="flex flex-col overflow-auto">
              <!-- <span class="h-[1rem] w-[1.5rem] border-2 border-[#3a61c2] rounded-[.1rem] flex justify-center items-center my-[.1rem]">Slot</span> -->
              <div
                v-for="(btn, index) in gamesData?.content"
                :key="index"
                class="h-[1rem] w-[1.5rem] z-10 border-2 border-[#3a61c2] rounded-[.1rem] flex justify-center items-center my-[.1rem]"
                @click="getTypes(btn.gameType, index)"
                :class="
                  activeBtn === index
                    ? 'bg-[#FFF0BB] text-[black]'
                    : 'bg-[#05309F] text-[#a0c5fb]'
                "
              >
                <span class="flex flex-col items-center p-[.1rem]">
                  <img
                    v-if="showImage(btn.czCode)"
                    :src="imgSrc(btn.czCode)"
                    alt=""
                    srcset=""
                    class="h-[.6rem]"
                  />

                  {{ btn.czCode }}
                </span>
              </div>
            </div>
            <div class="">
              <div class="flex justify-center gap-[.1rem]">
                <span
                  :class="[
                    'p-[.2rem] rounded-[.2rem] bg-[#05309F] border-2 border-[#3a61c2]',
                    popular ? 'bg-[#FFF0BB] text-[black]' : 'bg-[#05309F]',
                  ]"
                  @click="showFavorites('Popular')"
                  >Popular</span
                >
                <span
                  :class="[
                    'p-[.2rem] rounded-[.2rem] bg-[#05309F] border-2 border-[#3a61c2]',
                    recent ? 'bg-[#FFF0BB] text-[black]' : 'bg-[#05309F]',
                  ]"
                  @click="showFavorites('Recente')"
                  >Recente</span
                >
                <span
                  :class="[
                    'p-[.2rem] rounded-[.2rem] bg-[#05309F] border-2 border-[#3a61c2]',
                    favorites ? 'bg-[#FFF0BB] text-[black]' : 'bg-[#05309F]',
                  ]"
                  @click="showFavorites('Favorites')"
                  >Favorites</span
                >
              </div>
              <transition name="route">
                <div
                  class="w-[5.3rem] flex flex-wrap gap-1 justify-center h-[11.1rem] p-[.2rem] overflow-auto"
                  v-if="allGames"
                >
                  <div
                    class="w-[1.45rem] rounded-[.1rem] bg-[url('/images/BG.png')] h-[2rem] bg-[length:1.2rem] bg-no-repeat bg-center"
                    v-for="(tab, index) in gameTabs?.content"
                    :key="index"
                    @click="showGames(tab.finalRelatveUrl)"
                  >
                    <div class="relative">
                      <span>
                        <img
                          :src="`/api/${tab.buttonImagePath}`"
                          alt=""
                          srcset=""
                      /></span>
                      <img
                        src="/images/star.png"
                        alt=""
                        class="absolute top-0 right-0 w-[.4rem] h-[.4rem] m-[.1rem]"
                      />
                    </div>
                  </div>
                </div>
              </transition>

              <transition name="route">
                <div
                  class="w-[5.3rem] flex flex-wrap gap-1 justify-center h-[11rem] p-[.2rem] overflow-auto"
                  v-if="popular"
                >
                  <div>
                    <img
                      class="w-[2.5rem]"
                      src="/nodataImages/img_none_jl.png"
                      alt=""
                    />
                  </div>
                </div>
              </transition>
              <transition name="route">
                <div
                  class="w-[5.3rem] flex flex-wrap gap-1 justify-center h-[11rem] p-[.2rem] overflow-auto"
                  v-if="recent"
                >
                  <div>
                    <img
                      class="w-[2.5rem]"
                      src="/nodataImages/img_none_jl.png"
                      alt=""
                    />
                  </div>
                </div>
              </transition>
              <transition name="route">
                <div
                  class="w-[5.3rem] flex flex-wrap gap-1 justify-center h-[11rem] p-[.2rem] overflow-auto"
                  v-if="favorites"
                >
                  <div>
                    <img
                      class="w-[2.5rem]"
                      src="/nodataImages/img_none_jl.png"
                      alt=""
                    />
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="mt-[.3rem] pl-[1rem] flex justify-center">
            <div v-if="allGames">
              <a-pagination
                v-model:current="currentPage"
                :total="totalPage"
                show-less-items
                class="custom-pagination"
                @change="handlePagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <AntModal
      :isOpen="loginModal"
      :componentPass="Login"
      :backGrounds="true"
      v-if="!store.state.userInfo.isLogin"
    />
    <AntModal
      :isOpen="regModal"
      :componentPass="Register"
      :backGrounds="true"
    />
      <AntModal
        :isOpen="store.state.modalErr"
        :dataCode="dataCode"
        :bgColor="true"
        @closed="handleshowFalseData"
      />
      
  </div>
  <SpinLoader v-if="isFetching || tabsfetching || nextPageFetching" :is-align="true"/>

</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import SpinLoader from "@/components/antUi/spinLoader.vue";
import { getGamesTab } from "@/global/games.js";
import { useQuery } from "@tanstack/vue-query";

import { useStore } from "@/store/store";
import Register from "@/components/layout/RegisterComponent/RegisterForm.vue";
import Login from "@/components/layout/LoginComponent/LoginForm.vue";
import { axiosGet2 } from "@/components/axios/AxiosHook";
import { messageApi } from "@/components/antUi/antMessage";
import router from "@/router";
const store = useStore();
const { gamesData, getGame, getGameType } = getGamesTab();
const gameType = ref("");
const gameTabs = ref([]);
const activeBtn = ref(null);
const hideMain = ref(true);
const nowShowingGames = ref(false);
const gameUrl = ref("");
const liveGameUrl = ref("");
const spinLoads = ref(false);
const loginModal = ref(false);
const regModal = ref(false);
const popular = ref(false);
const recent = ref(false);
const favorites = ref(false);
const allGames = ref(true);
const currentPage = ref(1);
const pageIndex = ref("");
const totalSizeValue = ref();
const dataCode = ref("");
const showFalseData = ref(false);

const handleshowFalseData = (value) => {
  showFalseData.value = value;
  // alert(`alert from modal - ${showFalseData.value}`)
};

watch(showFalseData, (newVal) => {
  alert(newVal);
  if (newVal === false) {
    // alert(`newVal = ${newVal}`)
  }
});

watch(() => store.state.modalErr, (newVal) => {console.log(`alert from slots ${newVal}`)})

const pagevalue = ref({
  74: 30,
  84: 30,
  53: 20,
  351: 120,
  7: 10,
  13: 10,
  28: 10,
  48: 20,
  24: 1,
  32: 20,
  186: 70,
  124: 50,
  123: 50,
  93: 40,
  1: 10,
  65: 30,
  87: 30,
});
const totalPage = computed(() => {
  return pagevalue.value[totalSizeValue.value];
});

const showFavorites = (section) => {
  allGames.value = false;
  popular.value = false;
  recent.value = false;
  favorites.value = false;
  if (section === "Popular") {
    popular.value = true;
  }
  if (section === "Recente") {
    recent.value = true;
  }
  if (section === "Favorites") {
    favorites.value = true;
  }
};
const showAllGames = () => {
  // allGames.value = true
  popular.value = false;
  recent.value = false;
  favorites.value = false;
  fetchGames();
};

const imgMap = ref({
  pg: "/turnlateImages/fac_pg_select.png",
  pgn: "/turnlateImages/fac_pg_select.png",
  npt: "/turnlateImages/fac_npt_select.png",
  pgone: "/turnlateImages/fac_pg_select.png",
  mga: "/turnlateImages/fac_mga_select.png",
  bs: "/turnlateImages/fac_bs_select.png",
  jdb: "/turnlateImages/fac_jdb_select.png",
  ag: "/turnlateImages/fac_ag_select.png",
  bbin: "/turnlateImages/fac_bbin_select.png",
  cq9: "/turnlateImages/fac_cq9_select.png",
  evo: "/turnlateImages/fac_evo_select.png",
  fg: "/turnlateImages/fac_fg_select.png",
  pp: "/turnlateImages/fac_pp_select.png",
  jl: "/turnlateImages/fac_jl_select.png",
  ws168: "",
  bbin2: "/turnlateImages/fac_ptn_select.png",
  ptn: "/turnlateImages/fac_pg_select.png",
  bbinFish: "/turnlateImages/fac_bbin_select.png",
  cq9Fish: "/turnlateImages/fac_cq9_select.png",
  agLive: "/turnlateImages/fac_ag_select.png",
  bbinLive: "/turnlateImages/fac_bbin_select.png",
  dgLive: "/turnlateImages/fac_dgLive_select.png",
  evolution: "/turnlateImages/fac_evolution_select.png",
  ppLive: "/turnlateImages/fac_ppLive_select.png",
  bbin2Live: "",
  tysbSport: "/turnlateImages/fac_tysbSport_select.png",
  ppSport: "/turnlateImages/fac_ppSport_select.png",
  fb: "/turnlateImages/fac_fb_select.png",
});

const showImage = (index) => {
  return Boolean(imgMap.value[index]);
};
const imgSrc = (czcode) => {
  return imgMap.value[czcode];
};

const props = defineProps({
  gamePass: {
    type: String,
    required: false,
  },
  passive: {
    type: String,
    default: "",
  },
  gameTypePass: {
    type: String,
    default: "",
  },
  gameTabsPass: {
    type: String,
    default: "",
  },
  headerName: {
    type: String,
    default: "",
  },
});

watch(gameType, (newVal) => {});
watch(liveGameUrl, (newVal) => {
  // if (newVal) {
  //   alert(newVal);
  // }
});

watch(
  () => props.gameTypePass,
  (newVal) => {
    if (newVal) {
      // alert("------" + newVal);
      getGameType.value = newVal;
      refetch();
      // getTypes(newVal)
    }
  }
);

watch(
  () => store.state.gameTypes,
  (newVal) => {
    // alert("++++=" + newVal);
  }
);

watch(
  () => props.gameTabsPass,
  (newVal) => {
    if (newVal) {
      // alert("new tabs" + newVal);
      getGameType.value = newVal;
      tabs();
    }
  }
);

watch(gameUrl, (newVal) => {
  // if (newVal) {
  //   alert(newVal);
  // }
});

watch(
  () => pageIndex.value,
  (newVal) => {
    if (newVal) {
      // alert(newVal);
      nextPage();
    }
  }
);

const { refetch } = useQuery({
  queryKey: ["gameTab"],
  queryFn: () =>
    axiosGet2(
      `/api/native/v2/get_game_datas_v2.do?gameType=${props.gameTypePass}&lan=en&pageSize=30&pageIndex=1`
    ),
  enabled: false,
  select: (data) => {
    gameTabs.value = data;
    totalSizeValue.value = data.content[0]?.totalSize;
    // console.log(totalSizeValue.value)
  },
});

const { refetch: tabs, isFetching: tabsfetching } = useQuery({
  queryKey: ["gameTab"],
  queryFn: () =>
    axiosGet2(
      `/api/native/v2/get_game_datas_v2.do?gameType=${getGameType.value}&lan=en&pageSize=30&pageIndex=1`
    ),
  enabled: false,
  select: (data) => {
    gameTabs.value = data;
  },
});

const handleApiResponse = (data) => {
  if (data.url) {
    liveGameUrl.value = data.url;
  }
  if (data.html) {
    liveGameUrl.value = data.html;
  }
  if (data) {
    hideMain.value = false;
    nowShowingGames.value = true;
  }
  if (data.msg) {
    hideMain.value = true;
    nowShowingGames.value = false;
  }
  if (data.code === "2300") {
    dataCode.value = data.msg;
    store.commit('setModalErr', true); 
    // alert(store.state.modalErr)
  }
};

const { refetch: fetchGames, isFetching } = useQuery({
  queryKey: ["liveGames"],
  queryFn: () => axiosGet2(`/api${gameUrl.value}`),
  enabled: false,
  select: handleApiResponse,
  // select: (data) => {
  //   increment.value ++
  //   console.log('fdsfasd')
  //   if (data.url) {
  //     liveGameUrl.value = data.url;
  //   }
  //   if (data.html) {
  //     liveGameUrl.value = data.html;
  //   }
  //    if (data) {
  //      hideMain.value = false;
  //      nowShowingGames.value = true;
  //    }
  //   if (data.msg) {
  //     messageApi.info(data?.msg);
  //     hideMain.value = true;
  //     nowShowingGames.value = false;
  //   }
  //    if (data.code === "2300") {
  //      dataCode.value = data.msg;
  //   }
  // },


  onError: (err) => alert(err),
});

const { refetch: transOut } = useQuery({
  queryKey: ["transOut"],
  enabled: false,
  queryFn: () => axiosGet2("/api/native/v2/autoTranout.do?lan=en"),
});

const { refetch: nextPage, isFetching: nextPageFetching } = useQuery({
  queryKey: ["gamePage"],
  queryFn: () =>
    axiosGet2(
      `/api/native/v2/get_game_datas_v2.do?gameType=${store.state.gameTypes}&lan=en&pageSize=30&pageIndex=${pageIndex.value}`
    ),
  enabled: false,

  select: (data) => {
    gameTabs.value = data;
    store.commit("setGameTypes", getGameType.value);
  },
});

const getTypes = (gameTypes, index) => {
  // alert(gameTypes);
  getGameType.value = gameTypes;
  activeBtn.value = index;
  currentPage.value = index + 1;
  store.commit("setGameTypes", gameTypes);
  allGames.value = true;
  popular.value = false;
  recent.value = false;
  favorites.value = false;
  tabs();
};

const handlePagination = (page) => {
  pageIndex.value = page;
  nextPage();
};

const showGames = (url) => {
  gameUrl.value = url;
  // alert(url)
  if (!store.state.userInfo.isLogin) {
    loginModal.value = !loginModal.value;
    return;
  }
  fetchGames({ exact: true });
  // showAllGames()
  // store.commit("setModalErr", true);
  console.log('dfsa')


};
const backlush = () => {
  hideMain.value = true;
  nowShowingGames.value = false;
  transOut();
};

const showIframGames = computed(() => {
  return liveGameUrl.value;
});

onMounted(() => {});
</script>

<style scoped>
::v-deep .custom-pagination .ant-pagination-item-active {
  background-color: #fff0bb !important;
  border-color: #05309f !important;
}

::v-deep .custom-pagination .ant-pagination .ant-pagination-item a {
  background-color: #05309f;
}

::v-deep .custom-pagination .ant-pagination-item {
  background-color: #05309f;
}

::v-deep
  :where(.css-dev-only-do-not-override-19iuou).ant-pagination
  .ant-pagination-item
  a {
  display: block;
  padding: 0 6px;
  color: rgb(255 255 255 / 88%);
  transition: none;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(10rem);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-10rem);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
@media screen and (min-width: 432px) {
  .custom1 {
    width: 7.33rem;
  }
}

@media screen and (max-width: 440px) {
  .custom2 {
    width: 100vw;
  }
}
</style>
