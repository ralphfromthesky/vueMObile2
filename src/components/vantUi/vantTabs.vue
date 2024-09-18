<template>
  <div>
    <van-tabs v-model:active="active" @change="changeTab(active)" background="#05309F" color="white">
      <van-tab
        v-for="(tab, index) in props.titleLinks"
        :title="tab.title"
        :key="index"
      >
      
        <div class="h-[10rem]">
          <component :is="props.componentPass[activeComponent]"></component>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const active = ref(0);
const activeComponent =ref(0)
const changeTab = (active) => {
  if(active === 0) {
  activeComponent.value = 0
}
if(active === 1) {
  activeComponent.value = 1
}
if(active === 2) {
  activeComponent.value = 2
}
if(active === 3) {
  activeComponent.value = 3
}if(active === 4) {
  activeComponent.value = 4
}if(active === 5) {
  activeComponent.value = 5
}
if(active === 6) {
  activeComponent.value = 6
}
}

const props = defineProps({
  titleLinks: {
    type: Array,
    required: false,
    default: "",
  },
  componentPass: {
    type: Array,
    required: true,
    default: ''
  }
});

</script>

<style scoped>
::v-deep .van-tab__text {
  color: white !important;
}

</style>

// const navLinks = ref([
//   {title: 'Events', link: '/event'},
//   {title: 'Mission', link: '/task'},
//   {title: 'Vip', link: '/vip'},
//   {title: 'Redemption', link: '/redemption'},
//   {title: 'Pendentets', link: '/pendente'},
//   {title: 'Juros', link: '/juros'},
//   {title: 'History', link: '/records'},

// ])