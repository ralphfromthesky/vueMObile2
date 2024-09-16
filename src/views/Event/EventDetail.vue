<template>
  <div>
    <div class="h-screen bg-bg2">
      <div
        class="bg-bg2 h-[1rem] flex justify-between px-1 items-center text-[white]"
      >
        <RouterLink to="/event"
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
              
            </div>
            <div>
              <div></div>
            </div>
            <div class="text-center">
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
      <div>
        <swiper
          :slides-per-view="3"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="border-2 h-[2rem]"
        >
          <swiper-slide class="border-2 border-[red] h-[2rem]"
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
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { axiosGet } from "@/components/axios/AxiosHook";
import { useQuery } from "@tanstack/vue-query";
import { onMounted, watch, ref } from "vue";
import { useStore } from "@/store/store";
const store = useStore();
const eventImg = ref([]);

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const { isLoading } = useQuery({
  queryKey: ["events"],
  enabled: true,
  queryFn: async () =>
    await axiosGet2("/api/native/v2/getActivityCenterList.do"),
  select: (data) => {
    eventImg.value = data;
  },
});

const props = defineProps({
  eventData: {
    type: Array,
    required: false,
    default: [],
  },
  newTitle: String,
});
</script>

<style scoped></style>
