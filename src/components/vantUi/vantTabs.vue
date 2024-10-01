<template>
  <div>
    <div
      class="py-[.21rem] text-[white] bg-[#05309F] border-b-[.05rem] border-[#1a45b1] text-[.3rem] text-center"
      v-if="props.title"
    >
      {{ props.title }}
    </div>
    <div class="relative">
      <span
        @click="router.go(-1)"
        class="bg-[#05309F] py-[.224rem] pl-[.1rem] absolute top-[.2rem left-[0] z-10"
        ><img src="/images/back.png" alt="" class="w-[.3rem]"
      /></span>
      <!-- v-if="hasBackButton" -->
      <van-tabs
        v-model:active="active"
        @change="changeTab(active)"
        @clickTab="tabTitle"
        background="#05309F"
        color="white"
        paddingLeft="10rem"
        animated=""
        :class="{ vantot: props.hasBackButton }"
        
      >
        <van-tab
          v-for="(tab, index) in props.titleLinks"
          :title="tab.title"
          :key="tab.title"
        >
          <div class="bg-[#1a45b1] h-[13.5rem] overflow-auto">
            <component :is="props.componentPass[active]" v-if="store.state?.userInfo?.isLogin ? props.componentPass[active] : !stateLogin[tab.title]"></component>
            <div v-if="props.hasData">
              <div class="text-[white] p-1" v-for="(data, index) in props.hasData?.data?.content" :key="index">
                {{data.content}}
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <AntModal
        :isOpen="loginModal"
        :componentPass="Login"
        :backGrounds="true"
        v-if="!store.state.userInfo.isLogin"
      />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store/store";
const loginModal = ref(false)
import Login from "@/components/layout/LoginComponent/LoginForm.vue"

const store = useStore();
const router = useRouter();
const changeTab = (active) => {
    //alert(active)
    store.commit('setIndexPass', active)
};

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  hasData: {
    type: Array,
    required: false,
    default: [],
  },
  titleLinks: {
    type: Array,
    required: false,
    default: "",
  },
  componentPass: {
    type: Array,
    required: false,
    default: [],
  },
  hasPaddingLeft: {
    type: Boolean,
    default: false,
    required: false,
  },
  indexPass: {
    type: Number,
    required: false,
    default: 0,
  },
  hasBackButton: {
    type: Boolean,
    required: false,
    default: true,
  },
});
const stateLogin = {
    "Vip" : props.componentPass[2], 
    "Juros" : props.componentPass[5], 
   "Pendentets" : props.componentPass[4], 
   "History" : props.componentPass[6], 
   "Notice" : props.componentPass[1]
}


const tabTitle = (tab) => {
  if(stateLogin[tab.title]) {
    // alert(tab.title)
    loginModal.value = true;
  } else {
    loginModal.value = false
  }
  
}



const activeComponent = ref(props.indexPass ? props.indexPass : 0);
const active = ref(props.indexPass ? props.indexPass : 0);

watch(
  () => store.state.indexPass,
  (newVal) => {
    changeTab(newVal);
    active.value = newVal;
     //alert(newVal);
  }
);


</script>

<style scoped>
::v-deep .van-tab__text {
  color: white !important;
}
::v-deep .van-tabs--line .van-tabs__wrap {
  padding-left: 20px;
}
</style>
