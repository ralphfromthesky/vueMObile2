<template>
  <div>
    <div class="flex flex-col justify-center items-center w-[2rem]">
      <div
        class="text-[#252525] flex flex-col justify-center items-center"
        @click="goToLink"
      >
        <img
          src="/supportImages/supportProfile.png"
          class="h-[1.3rem]"
          srcset=""
        />
        <span class="bg-[#3A61C2] p-[.05rem] text-white rounded-[.1rem]">service</span>
      </div>
      <div class="mt-[.3rem]" v-if="store.state.userInfo.isLogin" @click="goChat">
        <a-badge :count="54">
          <MessageFilled style="color: white; font-size: .6rem" />
        </a-badge>
      </div>
      <div class="w-[1.5rem] relative">
        <a-carousel autoplay :dots="false">
          <div @click="() => !store.state.userInfo.isLogin ? loginModal = !loginModal : (openVipLogin = !openVipLogin) ">
            <img
              src="/turnlateImages/coinBox.png" 
              class="h-[1.3rem]"
              srcset=""
            />
          </div>
          <div @click="() => !store.state.userInfo.isLogin ? loginModal = !loginModal : router.push('/turntablegame') ">
            <img
              src="/turnlateImages/activeTurnTable.gif"
              class="h-[1.3rem]"
              srcset=""
            />
          </div>
          <div @click="() =>  !store.state.userInfo.isLogin ? loginModal = !loginModal : (openRedpacket = !openRedpacket)">
            <img
              src="/turnlateImages/envelop.gif"
              class="h-[1.3rem]"
              srcset=""
            />
          </div>

          <div @click="() => router.push('/task')">
            <img src="/turnlateImages/shout.png" class="h-[1.3rem]" srcset="" />
          </div>
        </a-carousel>
        <span
          class="absolute text-[#FFF0BB] text-[.2rem] top-[1rem] right-0 border-[.01rem] border-[#FFF0BB] rounded-[1rem] p-[.03rem]"
          ><CloseOutlined /></span
        >
      </div>
      <div :class="['mt-[.2rem]',
    store.state.setThemes.darkTheme ? 'bg-[black] border-2 text-[white] border-[white]' : 'bg-[#05309f] border-2 border-[#3a61c2] text-text2',
    store.state.setThemes.lightTheme ? 'bg-[#f08abd] border-2  border-[white] text-white' : 'bg-[#05309f] border-2 border-[#3a61c2] text-text2'

    
    ]" @click="scrollUp" v-if="props.hideScrollTop">
        <div class="h-[1rem] w-[1rem] flex flex-col justify-center items-center rounded-[.1rem]" @click="scrollToTop">
          <img src="/scrollImages/Dior.png" class="h-[.5rem]" alt="">
          <span class="text-[.2rem]">Top</span>  
        </div>
      </div>
    </div>

    <AntModal
      :isOpen="openRedpacket"
      :componentPass="RedPacket"
      :bgColor="true"
    />
    <AntModal
      :isOpen="openVipLogin"
      :componentPass="VipLoginBonus"
      :bgColor="true"
    />
    <AntModal :isOpen="loginModal" :componentPass="Login" :backGrounds="true" v-if="!store.state.userInfo.isLogin" />

  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent, onUnmounted  } from "vue";
import { MessageFilled } from "@ant-design/icons-vue";
import { CloseOutlined } from "@ant-design/icons-vue";
const Login = defineAsyncComponent(() => import("@/components/layout/LoginComponent/LoginForm.vue"))
const RedPacket = defineAsyncComponent(() => import("@/components/redPacket/redpacket.vue"))
const VipLoginBonus = defineAsyncComponent(() => import("../VipLoginBonus/VipLoginBonus.vue"))
// import Login from "@/components/layout/LoginComponent/LoginForm.vue";
// import RedPacket from "@/components/redPacket/redpacket.vue";
// import VipLoginBonus from "../VipLoginBonus/VipLoginBonus.vue";
import router from "@/router";
import { useStore } from "@/store/store";
const loginModal = ref(false)
const openRedpacket = ref(false);
const openVipLogin = ref(false);
const store = useStore();
const countBadge = ref(0)


const goToLink = () => {
  window.open("https://www.live700.vip/Chat/PreInquiryForm", "_blank");
};
const goChat = () => {
  window.open("https://mt0.yibo22.com/api/chatroom/goChat.do?isPc=true", "_blank");
}

const emit = defineEmits(['scrollTo'])
const scrollUp = () => {
  emit('scrollTo')
}

const props = defineProps({
  hideScrollTop: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
:deep(.slick-slide) {
  text-align: center;
  line-height: 160px;
  background: transparent;
  overflow: hidden;
}
:deep(.slick-slide h3) {
  color: #fff;
}

</style>
