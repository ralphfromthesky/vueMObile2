<template>
  <div>
    <div class="h-screen bg-bg2">
      <div
        class="bg-bg2 h-[1rem] flex justify-between px-1 items-center text-[white]"
      >
        <RouterLink to="/mainNav"
          ><span><img src="/images/back.png" alt="" class="w-[.3rem]" /></span>
        </RouterLink>
        <span> {{ store.state.propsData?.data?.content.title }} </span
        ><span></span>
      </div>
      <div
        class="bg-txt overflow-auto p-1 text-white"
        v-if="store.state.propsData?.data?.content.type === 10"
      >
        <div>
          <div class="flex justify-around my-2 flex-col">
            <div class="flex justify-around mb-[.5rem]">
              <span>Amount of deposit</span><span>Bonus</span>
            </div>
            <div
              class="flex justify-around even:bg-[#05309F] p-1"
              v-for="(data, index) in store.state.propsData?.data?.content
                .configs"
              :key="index"
            >
              <div>
                <span>{{ data.depositMoney }}</span>
              </div>
              <div>
                <span class="text-bg">{{ data.giftMoney }}</span>
              </div>
            </div>
            <div class="flex flex-col my-1 leading-[.5rem]">
              <span
                >I.Activity time （UTC-3）：{{
                  store.state.propsData?.data?.content.beginDatetime
                }}</span
              ><span></span
              ><span
                >II.Activities：{{
                  store.state.propsData?.data?.content.actDesc
                }}</span
              >
            </div>
            <div class="text-center">
              <AntButton
                title="Apply for a bonus"
                bl="800"
                textCol="#1e3a8a"
                bg="#FFF0BB"
                h=".7rem"
                w="3.5rem"
                b=".1rem"
                ft=".3rem"
                :cla="true"
                @click="showRegModal()"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-txt overflow-auto p-1 text-white"
        v-if="store.state.propsData?.data?.content.type === 4"
      >
        <div>
          <div class="flex justify-around my-2 flex-col">
            <div class="flex justify-around mb-[.5rem]">
              <span>Amount of deposit</span><span>Bonus</span>
            </div>
            <div
              class="flex justify-around even:bg-[#05309F] p-1"
              v-for="(data, index) in store.state.propsData?.data?.content
                .configs"
              :key="index"
            >
              <div>
                <span>{{ data.depositMoney }}</span>
              </div>
              <div>
                <span class="text-bg">{{ data.giftMoney }}</span>
              </div>
            </div>
            <div class="flex flex-col my-1 leading-[.5rem]">
              <span
                >I.Activity time （UTC-3）：{{
                  store.state.propsData?.data?.content.beginDatetime
                }}</span
              ><span></span
              ><span
                >II.Activities：{{
                  store.state.propsData?.data?.content.actDesc
                }}</span
              >
              <span>
                III. Calculation formula： Bonus amount = Loss amount within the
                period (excluding claimed promotions) x corresponding cashback
                percentage Note: Loss amount within the period is the difference
                between deposits and withdrawals during the period.
              </span>
            </div>
            <div>
              <div></div>
            </div>
            <div class="text-center">
              <AntButton
                title="Apply for a bonus"
                bl="800"
                textCol="#1e3a8a"
                bg="#FFF0BB"
                h=".7rem"
                w="3.5rem"
                b=".1rem"
                ft=".3rem"
                :cla="true"
                @click="showRegModal()"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-txt overflow-auto p-1 border-2 text-white"
        v-if="store.state.propsData?.data?.content.type === 2"
      >
        <div>
          <div class="flex justify-around my-2 flex-col">
            <div class="flex justify-around mb-[.5rem]">
              <span>Valid betting amount</span><span>Bonus</span>
            </div>
            <div
              class="flex justify-around even:bg-[#05309F] p-1"
              v-for="(data, index) in store.state.propsData?.data?.content
                .configs"
              :key="index"
            >
              <div>
                <span>≥{{ data.validBetnum }}</span>
              </div>
              <div>
                <span class="text-bg font-bold">{{ data.giftMoney }}</span>
              </div>
            </div>
            <div class="flex flex-col my-1 leading-[.5rem]">
              <span
                >I.Activity time （UTC-3）：{{
                  store.state.propsData?.data?.content.beginDatetime
                }}</span
              ><span></span
              ><span
                >II.Activities：{{
                  store.state.propsData?.data?.content.actDesc
                }}</span
              >
            </div>
            <div>
              <div></div>
            </div>
            <div class="text-center">
              <AntButton
                title="Apply for a bonus"
                bl="800"
                textCol="#1e3a8a"
                bg="#FFF0BB"
                h=".7rem"
                w="3.5rem"
                b=".1rem"
                ft=".3rem"
                :cla="true"
                @click="showRegModal()"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-txt overflow-auto p-1 text-white"
        v-if="store.state.propsData?.data?.content.type === 11"
      >
        <div>
          <div class="flex justify-around my-2 flex-col">
            <div class="flex justify-around mb-[.5rem]">
              <span>Amount of deposit</span><span>Bonus</span>
            </div>
            <div
              class="flex justify-around even:bg-[#05309F] p-1"
              v-for="(data, index) in store.state.propsData?.data?.content
                .configs"
              :key="index"
            >
              <div>
                <span>{{ data.depositMoney }}</span>
              </div>
              <div>
                <span class="text-bg">{{ data.giftMoney }}</span>
              </div>
            </div>
            <div class="flex flex-col my-1 leading-[.5rem]">
              <span
                >I.Activity time （UTC-3）：{{
                  store.state.propsData?.data?.content.beginDatetime
                }}</span
              ><span></span
              ><span
                >II.Activities：{{
                  store.state.propsData?.data?.content.actDesc
                }}</span
              >
              <!-- <span v-html='store.state.propsData?.data?.content.actDesc'></span> -->
            </div>
            <div>
              <div></div>
            </div>
            <div class="text-center" @click="() => alert('what?!?')">
              <AntButton
                title="Submit apply"
                bl="800"
                textCol="#1e3a8a"
                bg="#FFF0BB"
                h=".7rem"
                w="3.5rem"
                b=".1rem"
                ft=".3rem"
                :cla="true"
                @click="showRegModal()"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-txt overflow-auto p-1 text-white h-[12.5rem]"
        v-if="store.state.propsData?.data?.content.type === 1"
      >
        <div class="flex flex-col bg-[#05309F] w-full rounded-[.1rem]">
          <div class="flex p-[.2rem]">
            <span class="text-white text-[.24rem]"
              >Informações da promoção</span
            >
          </div>
          <div class="w-full h-[.01rem] bg-[#3A61C2]"></div>
          <div class="flex p-[.2rem] w-full">
            <div class="flex flex-col w-full gap-[.2rem]">
              <div class="flex gap-[.2rem] w-full">
                <div
                  class="flex flex-col rounded-[.15rem] overflow-hidden w-[2.2rem]"
                >
                  <div class="bg-white p-[.15rem]">
                    <img
                      src="/images/sample_qr.png"
                      class="h-[1.3rem] w-[1.3rem]"
                      alt=""
                    />
                  </div>
                  <div
                    class="flex items-center bg-[#FFF0BB] p-[.1rem] pt-0 leading-none"
                  >
                    <span class="text-[#05309F] text-center"
                      >Clique para Salvar</span
                    >
                  </div>
                </div>
                <div class="flex flex-col w-full gap-[.2rem]">
                  <div class="flex items-center justify-between w-full">
                    <span class="text-[#6FA4EF]">Meu Link</span>
                    <img
                      src="/inviteImages/share.png"
                      class="h-[.4rem]"
                      alt=""
                      @click="navigateTo('/invite')"
                    />
                  </div>
                  <div
                    class="border-[.01rem] border-[#3a61c2] rounded-[.1rem] p-[.15rem] h-full"
                  >
                    <div class="flex w-full">
                      <div
                        class="flex items-start gap-[.2rem] justify-between w-full"
                      >
                        <img
                          src="/images/return.png"
                          class="-rotate-90 min-w-[.25rem]"
                          alt=""
                        />
                        <span class="text-[.24rem] text-[#A0C5FB] break-all">{{
                          // inviteData.data?.content?.prompInfo?.linkUrl ? inviteData.data?.content?.prompInfo?.linkUrl : 'No Data for now'
                           store.state.inviteData?.data?.content?.prompInfo?.linkUrl ? store.state.inviteData?.data?.content?.prompInfo?.linkUrl : 'No data for now'
                        }}</span>
                        <img
                          src="/copyIcons/Gucci_copy.png"
                          class="min-w-[.4rem]"
                          alt=""
                          @click="copyToClipboard(inviteData.data?.content?.prompInfo?.linkUrl)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full gap-[.2rem]">
                <div class="flex flex-col items-center justify-center">
                  <img
                    src="/images/img_facebook.png"
                    alt=""
                    class="w-[.7rem]"
                  />
                  <span class="text-[#A0C5FB] text-[.25rem]">Facebook</span>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <img src="/images/img_tg.png" alt="" class="w-[.7rem]" />
                  <span class="text-[#A0C5FB] text-[.25rem]">Telegram</span>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <img src="/images/img_wa.png" alt="" class="w-[.7rem]" />
                  <span class="text-[#A0C5FB] text-[.25rem]">WhatsApp</span>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <img src="/images/img_line.png" alt="" class="w-[.7rem]" />
                  <span class="text-[#A0C5FB] text-[.25rem]">Line</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-around my-2 flex-col">
            <div class="flex justify-around pt-1 bg-[#05309F]">
              <span>Meet any condition</span>
            </div>
            <div
              class="flex justify-around even:bg-[#05309F] p-1 leading-[.5rem]"
            >
              <div>
                <div>
                  <span>Account first recharge</span>
                </div>
                <div>
                  <span>Account recharge</span>
                </div>
                <div>
                  <span>Account first turnover</span>
                </div>
                <div>
                  <span>Account recharge times </span>
                </div>
              </div>
              <div>
                <div>
                  <span class="text-bg">{{
                    store.state.propsData?.data?.content.firstDeposit
                  }}</span>
                </div>
                <div>
                  <span class="text-bg">{{
                    store.state.propsData?.data?.content.totalDeposit
                  }}</span>
                </div>
                <div>
                  <span class="text-bg">{{
                    store.state.propsData?.data?.content.totalBetnum
                  }}</span>
                </div>
                <div>
                  <span class="text-bg">{{
                    store.state.propsData?.data?.content.totalDepositTimes
                  }}</span>
                </div>
              </div>
            </div>

            <div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="bg-[#05309F] p-1 rounded-[.1rem] my-1">
          <div>
            What is the number of players actually promoted? (meet all
            conditions listed below)
          </div>
          <div
            class="flex justify-around even:bg-[#05309F] p-1 leading-[.5rem]"
          >
            <div>
              <div>
                <span>The subordinate accumulated bets </span>
              </div>
              <div>
                <span>The subordinate has accumulated refills</span>
              </div>
            </div>
            <div>
              <div>
                <span class="text-bg"
                  >{{ store.state.propsData?.data?.content.totalBetnum }} or
                  above</span
                >
              </div>
              <div>
                <span class="text-bg"
                  >{{ store.state.propsData?.data?.content.totalDeposit }} or
                  above</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#05309F] p-1 rounded-[.1rem] flex gap-1 my-1">
          <div
            v-for="(person, index) in store.state.propsData?.data?.content
              ?.configs"
          >
            <div class="relative w-[2rem]" @click="showIndex(index)">
              <img
                src="/turnlateImages/baoxiang3.png"
                alt=""
                class="h-[1.5rem]"
              />
              <span class="absolute top-3 right-0">>></span>
              <span class="absolute top-[1.1rem] right-[.8rem] text-[.22rem]"
                >{{ person.invitePerson }} People</span
              >
            </div>
          </div>
        </div>
        <div class="text-center" @click="() => alert('what?!?')">
        <AntButton
          title="Submit apply"
          bl="800"
          textCol="#1e3a8a"
          bg="#FFF0BB"
          h=".7rem"
          w="3.5rem"
          b=".1rem"
          ft=".3rem"
          :cla="true"
          @click="showRegModal()"
        />
      </div>
      <div>
        <swiper
          :slides-per-view="3"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="border-2 h-[2rem]"
        >
          <swiper-slide class=" h-[2rem]"
            >ide 1</swiper-slide
          >
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { axiosGet, axiosGet2 } from "@/components/axios/AxiosHook";
import { useQuery } from "@tanstack/vue-query";
import { onMounted, watch, ref } from "vue";
import { useStore } from "@/store/store";
import { messageApi } from "@/components/antUi/antMessage";
import axios from "axios";
const store = useStore();
const eventImg = ref([]);
const actId = ref(store.state.propsData?.data?.content?.id);
const nums = ref();
const inviteData = ref([]);
import { useRouter } from "vue-router";
const router = useRouter();

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};

const showIndex = (index) => {
  nums.value = index;
  if (store.state.propsData?.data?.content?.id) {
    clickBox();
    invite();
  }
};

const copyToClipboard = (textToCopy) => {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      messageApi.info(`Copied: ${textToCopy}`);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};

const navigateTo = (link) => {
  router.push(link)
  store.commit('setIndexPass', 1)

}

const { isLoading } = useQuery({
  queryKey: ["events"],
  enabled: true,
  queryFn: async () =>
    await axiosGet2("/api/native/v2/getActivityCenterList.do"),
  select: (data) => {
    eventImg.value = data;
  },
});

//https://mt0.yibo22.com/native/v2/inviteOverview.do

const { refetch: invite } = useQuery({
  queryKey: ["invite"],
  queryFn: () => axiosGet("/api/native/v2/inviteOverview.do"),
  enabled: true,
  select: (data) => {
    inviteData.value = data;
    store.commit('setInviteData', data)
  },
});

const { refetch: clickBox } = useQuery({
  queryKey: ["clickBos"],
  queryFn: () =>
    axiosGet(
      `api/native/v2/joinAct.do?actId=${store.state.propsData?.data?.content?.id}&bonusId=${nums.value}`
    ),
  enabled: false,
  select: (data) => {
    if (!data.data.msg) {
      messageApi.info("succesfully!");
    }
    if (data.data.msg) {
      messageApi.info(data?.data.msg);
    }
  },
  onError: (err) => alert(err),
});

const props = defineProps({
  eventData: {
    type: Array,
    required: false,
    default: [],
  },
  newTitle: String,
});

// watch(store.state.propsData?.content?.id, (newVal) => {
//   actId.value = newVal;
// });
</script>

<style scoped></style>
