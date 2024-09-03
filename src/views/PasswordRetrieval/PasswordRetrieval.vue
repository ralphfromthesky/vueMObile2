<template>
  <div>
    <div class="bg-[#1A45B1] custom h-screen w-screen">
      <div
        class="border-b-[.02rem] h-[1rem] flex gap-[1rem] text-[#FFFFFF] justify-around items-center"
      >
        <span class="text-[.4rem]" @click="router.push('/')"><</span>
        <span class="text-[.4rem]">Password retrieval</span>
        <span></span>
      </div>

      <form @submit.prevent="sendPwRet">
        <div class="flex flex-col gap-1 mt-[.7rem] mb-[1rem]">
          <div class="w-auto px-[.2rem] relative">
            <input
              type="text"
              class="h-[.7rem] rounded-[.1rem] w-full pl-3"
              placeholder="Please enter Account"
              v-model="username"
            />
            <img
              src="/public/profileImages/icon_user.png"
              class="h-[.4rem] absolute top-[.15rem] left-2"
              alt=""
            />
          </div>
          <div class="px-[.2rem] relative">
            <input
              type="number"
              class="h-[.7rem] rounded-[.1rem] w-full pl-[1.5rem]"
              :placeholder="selectedCountryCode + ' Phone Number'"
              v-model="phone"
            />
            <div class="absolute top-[.15rem] left-2">
              <van-popover v-model:show="showPopover">
                <template #reference>
                  <div class="flex justify-center items-center">
                    <img :src="selectedCountryIcon" class="h-[.4rem]" alt="" />
                    <span
                      class="font-bold text-[.3rem] border-r-2 pr-[.1rem] border-r-[black]"
                      >{{ selectedCountryCode }}</span
                    >
                  </div>
                </template>
                <van-list>
                  <van-cell
                    v-for="(action, index) in actions"
                    :key="index"
                    @click="selectCountry(action)"
                  >
                    <img :src="action.icon" class="h-[.4rem] mr-1" alt="" />
                    <span>{{ action.text }}</span>
                  </van-cell>
                </van-list>
              </van-popover>
            </div>
          </div>
        </div>
        <div class="w-auto px-[.2rem]">
          <button
            class="bg-[#fff0bb] rounded-[.1rem] font-bold w-full h-[.8rem]"
          >
            Go On
            {{ phone }}
          </button>
        </div>
      </form>
      <div
        class="text-[#FFFFFF] flex flex-col font-bold w-screen leading-[.4rem] mt-[.7rem] px-[.1rem]"
      >
        <span class="text-center"
          >Already have an account?
          <span @click="() => router.push('/')">Login now </span>
        </span>
        <a
          href="https://www.live700.vip/Chat/PreInquiryForm"
          target="_blank"
          class="flex flex-col"
        >
          <span class="text-center">
            If the user does not bind the mobile phone number, please contact
            customer service to retrieve the <br />
            password.
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import router from "@/router";
import { Popover, List, Cell } from "vant";
import { useMutation } from "@tanstack/vue-query";
import { axiosPost, axiosPost2 } from "@/components/axios/AxiosHook";
import { messageApi } from "@/components/antUi/antMessage";
import { isDef } from "vant/lib/utils";
const id = ref("");
const username = ref("");
const showPopover = ref(false);
const phone = ref("");
const selectedCountryCode = ref("+91");
const selectedCountryIcon = ref("/public/flags/flags1.png");
const actions = [
  { text: "+55", icon: "/public/flags/flags2.png" },
  { text: "+86", icon: "/public/flags/flags3.png" },
  { text: "+1", icon: "/public/flags/flags4.png" },
  { text: "+34", icon: "/public/flags/flags5.png" },
  { text: "+62", icon: "/public/flags/flags6.png" },
  { text: "+81", icon: "/public/flags/flags7.png" },
  { text: "+60", icon: "/public/flags/flags8.png" },
  { text: "+66", icon: "/public/flags/flags9.png" },
];
const sendData = ref({
  username: "",
  id: "",
  phone: "",
});

const selectCountry = (action) => {
  selectedCountryCode.value = action.text;
  selectedCountryIcon.value = action.icon;
  showPopover.value = false;
};

const { mutate: checkInfo } = useMutation({
  mutationFn: (payload) =>
    axiosPost2("/api/native/v2/retrievePwdCheckInfo.do", payload),
  onSuccess: (data) => {
    messageApi.info(data.msg);
  },
  onError: (err) => {
    messageApi.error(err);
  },
});

const { mutate: checkUser } = useMutation({
  mutationFn: (payload) =>
    axiosPost("/api/native/v2/retrievePwdCheckUser.do", payload),
  onSuccess: (data) => {
    id.value = data;
    console.log(id.value)
    if (!data.data.success) {
      messageApi.info(data.data.msg);
    }
  },
  onError: (err) => messageApi.error(err),
});

watch(
  () => id.value,
  (neVal) => {}
);

const sendPwRet = () => {
  if (username.value.trim() === "") {
    messageApi.info("User name is empty");
    return;
  }
  checkUser({ username: username.value });
  if (phone.value === "") {
    messageApi.info("phone is empty");
    return;
  }

    setTimeout(() => {
    checkInfo({
     id: id.value?.data?.content,
   phone: selectedCountryCode.value.slice(1) + phone.value
    })
    }, 1000)
  // if (id.value?.data?.success) {
  //    checkInfo({
  //     id: id.value?.data?.content,
  //     phone: selectedCountryCode.value.slice(1) + phone.value,
  //   });
  // }
};
</script>

<style scoped>
::v-deep .van-cell__value {
  display: flex;
}

@media screen and (min-width: 431px) {
  .custom {
    width: auto;
  }
}
</style>
