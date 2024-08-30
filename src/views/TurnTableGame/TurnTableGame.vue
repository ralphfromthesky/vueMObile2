<template>
  <div>
    <!-- <div ref="prize">
      <span>Receive</span>
    </div> -->
    <div class="h-screen w-auto">
      <div>
        <div class="p-[.3rem] text-white flex justify-between font-[1rem]">
          <router-link to="/"> <span class="text-[.5rem]"><img src="/images/back.png" alt="" class="w-[.3rem]"></span></router-link>
          <span class="text-[.4rem] ml-[1rem]">big turntable</span>
          <router-link to="/records">
          <span class="text-[.25rem]">Record col....</span>
        </router-link>
        </div>
        <div class="border-3"></div>
        <div
          class="text-white h-screen overflow-auto w-auto p-[.2rem] bg-[#1A45B1]"
        >
          <div class="flex rounded-[.1rem] p-[.1rem] pb-1 bg-[#05309F]">
            <div class="flex flex-col overflow-auto">
              <div v-if="hidePoints">
                <div>
                  <div class="text-[.22rem]">
                    Points in current account
                    <span class="text-[#e6e6de]">0</span>
                  </div>
                  <div class="text-[.22rem] mb-[.1rem]">
                    Account points consumed each time
                  </div>
                </div>
                <div class="relative">
                  <div
                    :class="[
                      'flex justify-center w-[6.7rem] relative]',
                      rotateTable ? 'imgRotate' : '',
                    ]"
                    ref="table"
                  >
                    <img
                      src="/turnlateImages/img_s3_8.png"
                      alt=""
                      srcset=""
                      class="h-[4.5rem]"
                    />
                    <div
                      v-for="(turn, index) in turnTableData?.data?.content
                        ?.awards"
                      :key="index"
                    >
                      <span
                        class="flex flex-col items-center justify-center absolute"
                        :style="absolutePosition(index)"
                      >
                        <span class="text-[.2rem]">{{ turn.awardName }}</span>
                        <span>
                          <img
                            :src="turn.giftImg"
                            img_zphdjp_s1
                            alt=""
                            :class="['h-[.5rem]', index === 7 ? 'hidden' : '']"
                            srcset=""
                          />
                          <img
                            src="/turnlateImages/img_zphdjp_s1.png"
                            alt=""
                            class="h-[.5rem]"
                            srcset=""
                            v-if="index === 7"
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                  <img
                    src="/turnlateImages/zphd_ljcj_s3.png"
                    alt=""
                    srcset=""
                    class="h-[1.3rem] absolute top-[1.6rem] left-[2.8rem]"
                    @click="rotateThis"
                  />
                </div>
                <div class="text-center mt-[.5rem] mb-[.2rem]">
                  End of activity
                </div>
              </div>
              <div v-if="bettingAmount">
                <div class="flex justify-center w-[6.7rem] my-[.2rem]">
                  <div class="relative">
                    <img
                      src="/turnlateImages/newTurn.png"
                      alt=""
                      srcset=""
                      class="h-[4.5rem]"
                    />
                    <span
                      @click="
                        messageApi.info('Please participate in the event')
                      "
                    >
                      <img
                        src="/turnlateImages/btnNewTurn.png"
                        alt=""
                        srcset=""
                        class="h-[1rem] absolute top-[1.7rem] left-[1.85rem]"
                      />
                    </span>
                    <img
                      src="/turnlateImages/goldRing.png"
                      alt=""
                      srcset=""
                      class="absolute top-0 left-0 h-[4.5rem]"
                      v-if="gold"
                    />
                    <img
                      src="/turnlateImages/goldRing2.png"
                      alt=""
                      srcset=""
                      class="absolute top-0 left-0 h-[4.5rem]"
                      v-if="diamond"
                    />

                    <div
                      v-for="(turn2, index) in content1
                        ? turnTableData2?.data?.content[0]?.awards
                        : turnTableData2?.data?.content[1]?.awards"
                      :key="index"
                    >
                      <span
                        class="flex flex-col items-center justify-center absolute"
                        :style="
                          content1
                            ? absolutePosition2(index)
                            : absolutePosition3(index)
                        "
                      >
                        <span class="text-[.2rem]">{{ turn2.awardName }}</span>
                        <span>
                          <img
                            src="/turnlateImages/img_zphdjp_s1.png"
                            alt=""
                            class="h-[.5rem]"
                            srcset=""
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center w-[6.5rem] gap-1">
                  <button
                    :class="[
                      'p-[.25rem] rounded-[.1rem] font-bold flex items-center gap-[.1rem]',
                      platinum ? 'bg-[#aa58f6]' : 'bg-[#1A45B1]',
                    ]"
                    @click="showPlatinum"
                  >
                    <img src="/turnlateImages/diamond.png" alt="" />
                    platinum
                  </button>
                  <button
                    :class="[
                      'bg-[#1A45B1] p-[.25rem] rounded-[.1rem] font-bold flex items-center gap-[.1rem]',
                      gold ? 'bg-[#aa58f6]' : 'bg-[#1A45B1]',
                    ]"
                    @click="showGold"
                  >
                    <img src="/turnlateImages/gold.png" alt="" />
                    gold
                  </button>
                  <button
                    :class="[
                      'p-[.25rem] rounded-[.1rem] font-bold flex items-center gap-[.1rem]',
                      diamond ? 'bg-[#aa58f6]' : 'bg-[#1A45B1]',
                    ]"
                    @click="showDiamond"
                  >
                    <img src="/turnlateImages/platinum.png" alt="" />
                    diamond
                  </button>
                </div>
                <div class="text-center mt-[.5rem] mb-[.2rem]">
                  End of activity
                </div>
              </div>
              <div
                class="flex justify-center w-[6.7rem] my-[.2rem]"
                v-if="depositBtn"
              >
                <div class="relative">
                  <!-- https://mt0.yibo22.com/native/v2/getTurnRecord.do?startTime=2024-08-01+00:00:00&endTime=2024-08-07+23:59:59&joinType=2&pageSize=50&pageNumber=1 -->
                  <div class="relative">
                    <img
                      src="/turnlateImages/goldRing3.png"
                      alt=""
                      srcset=""
                      class="h-[4.5rem]"
                    />
                    <div
                      v-for="(turn2, index) in turnTableData3?.data?.content[0]
                        ?.awards"
                      :key="index"
                    >
                      <span
                        class="flex flex-col items-center justify-center absolute"
                        :style="absolutePosition4(index)"
                      >
                        <span class="text-[.2rem]">{{ turn2.awardName }}</span>
                        <span>
                          <img
                            src="/turnlateImages/img_zphdjp_s1.png"
                            alt=""
                            class="h-[.5rem]"
                            srcset=""
                          />
                        </span>
                      </span>
                    </div>
                  </div>

                  <span
                    @click="
                      messageApi.info('Please participate during the event')
                    "
                    ><img
                      src="/turnlateImages/zphd_ljcj_s1.png"
                      class="h-[1rem] absolute top-[1.8rem] left-[1.85rem]"
                      srcset=""
                  /></span>

                  <div class="my-[.1rem] flex justify-center">
                    <button
                      class="bg-[#FFAA09] p-[.25rem] rounded-[.1rem] font-bold flex items-center gap-[.1rem]"
                    >
                      <img src="/turnlateImages/gold.png" alt="" />
                      gold
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex justify-center w-[6.5rem] gap-1">
                <button
                  :class="[
                    'p-[.25rem] rounded-[.1rem] font-bold',
                    hidePoints ? 'bg-[#0962ded9]' : 'bg-[#1A45B1]',
                  ]"
                  @click="showPoints"
                >
                  Points
                </button>
                <button
                  :class="[
                    'p-[.25rem] rounded-[.1rem] font-bold',
                    bettingAmount ? 'bg-[#aa58f6]' : 'bg-[#1A45B1]',
                  ]"
                  @click="hidePoint"
                >
                  Betting amount
                </button>
                <button
                  :class="[
                    ' p-[.25rem] rounded-[.1rem] font-bold',
                    depositBtn ? 'bg-[#ffaa09]' : 'bg-[#1A45B1]',
                  ]"
                  @click="depositBtnGold"
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>
          <div
            class="flex rounded-[.1rem] p-[.1rem] bg-[#05309F] mt-1 h-[6.5rem] overflow-auto w-full"
          >
            <a-tabs
              v-model:activeKey="activeKey"
              class="flex justify-center text-[white]"
            >
              <a-tab-pane key="1" tab="Prize Notification">
                <div
                  v-for="(fake, index) in fakeData?.data?.content"
                  :key="index"
                  class="flex justify-between gap-2 items-center"
                >
                  <span class="flex items-center gap-1 my-[.1rem]">
                    <img src="/spin.png" class="h-[.5rem]" />
                    <span>{{ dayjs(fake.winTime).format("YYYY-MM-DD") }}</span>
                  </span>
                  <span>{{ fake.username }}</span>
                  <span>{{ fake.itemName }}</span>
                  <span>{{ fake.winMoney }}</span>
                </div></a-tab-pane
              >
              <a-tab-pane key="2" tab="My Records" force-render>
                <div></div>

                <div
                  class="flex items-center w-[6.5rem] flex-col"
                  v-if="recData?.data?.content.length === 0"
                >
                  <img
                    class="w-[2.5rem]"
                    src="/nodataImages/img_none_jl.png"
                    alt=""
                  />
                  <span>
                    No Records
                  </span>
                </div>
              </a-tab-pane>
            </a-tabs>
          </div>
        </div>
      </div>
    </div>

    <!-- <SpinLoader v-if="isFetching" />
    <!-- <AntModal
      :isOpen="loginModal"
      :componentPass="Login"
      :backGrounds="true"
      v-if="!store.state.userInfo.isLogin"


    /> -->
    <AntModal
      :isOpen="showAward"
      :backGrounds="false"
      :elementPass="dontRotate?.data?.content?.awardName"
      :bgColor="true"
    />
  </div>
</template>
<script setup>
useQuery;
import { messageApi } from "@/components/antUi/antMessage";
import { axiosGet, axiosGet2 } from "@/components/axios/AxiosHook";
import { useQuery } from "@tanstack/vue-query";
import { message } from "ant-design-vue";
import dayjs from "dayjs";
import { ref, onMounted, computed, watch } from "vue";
import {getDateRange} from '@/global/getDateRange.js'
const {startDate, endDate} = getDateRange()

const prize = ref();

const activeKey = ref("1");
const fakeData = ref([]);
const recData = ref([]);
const hidePoints = ref(true);
const bettingAmount = ref(false);
const diamond = ref(false);
const platinum = ref(true);
const gold = ref(false);
const content1 = ref(true);
const content2 = ref(false);

const depositBtn = ref(false);
const turnTableData = ref([]);
const turnTableData2 = ref([]);
const turnTableData3 = ref([]);

const rotateTable = ref(false);
const dontRotate = ref();
const showAward = ref(false);
const table = ref(null);

const hidePoint = () => {
  hidePoints.value = false;
  bettingAmount.value = true;
  depositBtn.value = false;
  bet();
};
const showPoints = () => {
  hidePoints.value = true;
  bettingAmount.value = false;
  depositBtn.value = false;
};

const showGold = () => {
  gold.value = true;
  diamond.value = false;
  platinum.value = false;
  content1.value = true;
};

const showPlatinum = () => {
  gold.value = false;
  diamond.value = false;
  platinum.value = true;
  content1.value = true;
};
const showDiamond = () => {
  gold.value = false;
  diamond.value = true;
  platinum.value = false;
  content1.value = false;
};

const depositBtnGold = () => {
  depositBtn.value = true;
  hidePoints.value = false;
  bettingAmount.value = false;
};

const rotateThis = () => {
  if (!dontRotate.value?.data?.success) {
    messageApi.info(dontRotate.value.data.msg);
    return;
  } else {
    rotateTable.value = !rotateTable.value;
    spin();
  }
};

const absolutePosition = (index) => {
  const positions = ref([
    { top: ".55rem", right: "2.3rem", transform: "rotate(30deg)" },
    { top: ".6rem", left: "2.3rem", transform: "rotate(-30deg)" },
    { top: "1.3rem", right: "1.5rem", transform: "rotate(60deg)" },
    { top: "2.4rem", right: "1.5rem", transform: "rotate(120deg)" },
    { bottom: ".6rem", right: "2.3rem", transform: "rotate(150deg)" },
    { bottom: ".6rem", left: "2.3rem", transform: "rotate(205deg)" },
    { bottom: "1.4rem", left: "1.5rem", transform: "rotate(-120deg)" },
    { top: "1.2rem", left: "1.6rem", transform: "rotate(-60deg)" },
  ]);
  return positions.value[index] || { top: "0", left: "0" };
};

const absolutePosition2 = (index) => {
  const positions = ref([
    {
      top: ".8rem",
      right: "1rem",
      transform: "rotate(40deg)",
    },
    { top: ".6rem", left: "1.2rem", transform: "rotate(-40deg)" },
    {
      top: "2.2rem",
      left: "0.5rem",
      transform: "rotate(-110deg)",
      textAlign: "center",
    },
    { top: "2.4rem", right: ".69rem", transform: "rotate(110deg)" },
    { bottom: ".6rem", left: "1.8rem", transform: "rotate(180deg)" },
  ]);
  return positions.value[index] || { top: "0", left: "0" };
};

const absolutePosition3 = (index) => {
  const positions = ref([
    {
      top: ".8rem",
      right: "1rem",
      transform: "rotate(40deg)",
    },
    { top: ".7rem", left: ".9rem", transform: "rotate(-40deg)" },
    {
      top: "2.3rem",
      left: ".5rem",
      transform: "rotate(-110deg)",
      textAlign: "center",
    },
    { top: "2.2rem", right: ".7rem", transform: "rotate(110deg)" },
    { bottom: ".6rem", left: "2rem", transform: "rotate(180deg)" },
  ]);
  return positions.value[index] || { top: "0", left: "0" };
};
const absolutePosition4 = (index) => {
  const positions = ref([
    {
      top: ".7rem",
      right: "1.1rem",
      transform: "rotate(40deg)",
    },
    { top: ".7rem", left: "1.1rem", transform: "rotate(-40deg)" },
    {
      top: "1.9rem",
      left: ".5rem",
      transform: "rotate(-90deg)",
    },
    { top: "1.9rem", right: ".5rem", transform: "rotate(90deg)" },
    { bottom: ".8rem", right: "1.2rem", transform: "rotate(145deg)" },
    { bottom: ".7rem", left: "1.1rem", transform: "rotate(220deg)" },
  ]);
  return positions.value[index] || { top: "0", left: "0" };
};

const { refetch } = useQuery({
  queryKey: ["fakes"],
  enabled: true,
  queryFn: () => axiosGet("/api/native/v2/turnFakeData.do?awardType=3"),

  select: (data) => {
    fakeData.value = data;
  },
});

const {} = useQuery({
  queryKey: ["recs"],
  enabled: true,
  queryFn: () =>
    axiosGet(
      "/api/native/v2/getTurnRecord.do?startTime=2024-08-01+00:00:00&endTime=2024-08-05+23:59:59&joinType=3&pageSize=50&pageNumber=1"
    ),
  select: (data) => (recData.value = data),
});

const {} = useQuery({
  queryKey: ["turnTable"],
  queryFn: () => axiosGet("/api/native/v2/getTurnlateActivity.do?type=3"),
  enable: true,
  select: (data) => {
    turnTableData.value = data;
  },
  onError: (err) => alert(err),
});

const { refetch: spin } = useQuery({
  queryKey: ["table105"],
  enabled: true,
  queryFn: () => axiosGet("/api/native/v2/playTurnlate.do?activeId=105"),
  select: (data) => {
    dontRotate.value = data;
  },
});

const { refetch: bet } = useQuery({
  queryKey: ["topUp"],
  enabled: false,
  queryFn: () => axiosGet("/api/native/v2/getTopupType.do?type=2"),
  select: (data) => {
    turnTableData2.value = data;
  },
  onError: (err) => console.log(err),
});

const {} = useQuery({
  queryKey: ["topUp2"],
  queryFn: () => axiosGet("/api/native/v2/getTopupType.do?type=1"),
  enabled: true,
  select: (data) => {
    turnTableData3.value = data;
  },
});

onMounted(() => {
  if (table.value) {
    table.value.addEventListener("animationend", () => {
      showAward.value = true;
    });
  }
  // alert(startDate, endDate)
});
</script>

<style>
.imgRotate {
  animation: rotate 10s ease-out forwards;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  90% {
    transform: rotate(18000deg);
  }
  93% {
    transform: rotate(18000deg);
  }
  95% {
    transform: rotate(18000deg);
  }
  97% {
    transform: rotate(18000deg);
  }
  99% {
    transform: rotate(18000deg);
  }

  100% {
    transform: rotate(18000deg);
  }
}
</style>
