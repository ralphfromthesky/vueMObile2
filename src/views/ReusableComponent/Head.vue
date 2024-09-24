<template>
  <div >
    <div class="h-[1rem] bg-bg2 border-b-[.01rem] border-bord flex justify-between px-1 text-[white] items-center relative">
      <span @click="router.go(-1)" class="py-[.224rem] pl-[.1rem]"
        ><img src="/images/back.png" alt="" class="w-[.3rem]"
      /></span>
      <span class="text-[.45rem]">{{ props.title }}</span>
      <span></span>
      <span v-if="props.recordCol" class="absolute right-0" @click="navigateTo('/mainNav')">Record Colle...</span>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {useStore} from '@/store/store.js'
const store = useStore()

const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "tae",
  },
  recordCol: {
    type:Boolean,
    default: false,
    required: false
  }
});

const navigateTo = (link) => {
  router.push(link);
  store.commit('setIndexPass', 6)
}
</script>

<style lang="scss" scoped></style>
