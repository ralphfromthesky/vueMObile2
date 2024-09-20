<template>
  <div class="relative">
    <span
      @click="router.go(-1)"
      class="bg-[#05309F] py-[.224rem] pl-[.1rem] absolute top-[.2rem left-[0] z-10"
      ><img src="/images/back.png" alt="" class="w-[.3rem]"
    /></span>
    <van-tabs
      v-model:active="active"
      @change="changeTab(active)"
      background="#05309F"
      color="white"
      animated=""
    >
      <van-tab
        v-for="(tab, index) in props.titleLinks"
        :title="tab.title"
        :key="tab.title"
      >
        <div class="bg-[#1a45b1]">
          <component :is="props.componentPass[activeComponent]"></component>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const changeTab = (active) => {
  //  alert(active)
  if (active === 0) {
    activeComponent.value = 0;
  }
  if (active === 1) {
    activeComponent.value = 1;
  }
  if (active === 2) {
    activeComponent.value = 2;
  }
  if (active === 3) {
    activeComponent.value = 3;
  }
  if (active === 4) {
    activeComponent.value = 4;
  }
  if (active === 5) {
    activeComponent.value = 5;
  }
  if (active === 6) {
    activeComponent.value = 6;
  }
  if (active === 7) {
    activeComponent.value = 7;
  }
  if (active === 8) {
    activeComponent.value = 8;
  }
  if (active === 9) {
    activeComponent.value = 9;
  }
  if (active === 10) {
    activeComponent.value = 10;
  }
  if (active === 11) {
    activeComponent.value = 11;
  }
};

const props = defineProps({
  titleLinks: {
    type: Array,
    required: false,
    default: "",
  },
  componentPass: {
    type: Array,
    required: true,
    default: "",
  },
  hasPaddingLeft: {
    type: Boolean,
    default: false,
    required: false,
  },
  indexPass: {
    type: Number,
    required: false,
    default: 0
  }
});
const activeComponent = ref(props.indexPass ? props.indexPass : 0);
const active = ref(props.indexPass ? props.indexPass : 0);


</script>

<style scoped>
::v-deep .van-tab__text {
  color: white !important;
}
::v-deep .van-tabs--line .van-tabs__wrap {
  padding-left: 20px;
}
</style>
