<template>
  <div class="h-screen cust w-screen bg-txt px-[.1rem] overflow-scroll">
    <div>
      <div></div>
    </div>
    <div
      class="grid grid-cols-4 gap-[.1rem] border-2 border-bg p-[.1rem] rounded-[.1rem] mt-[2.5rem]"
    >
      <div
        v-for="(n, index) in numbers"
        :key="index"
        @click="shoutNum(n.title)"
        :class="['border-2 border-bg py-[.15rem]', n.title === selectedNum ? 'bg-bg' : '']"
      >
        <span :class="['text-[white]', n.title === selectedNum ? 'text-txt font-bold': '']"> {{ n.title }} <span > {{ bettor[index] }} </span></span>
      </div>
    </div>
    <AntModal
      :isOpen="regModal"
      :componentPass="Register"
      :backGrounds="true"
      :numberPass="nums"
      @paid="handlePaid"
      @selectedNums="selectedNumber"
      @bettorName="betName"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
const regModal = ref(false);
const nums = ref("");
const paidFromMOdal = ref(false);
const selectedNum = ref(null);
const bettor = ref({})

const shoutNum = (num) => {
  regModal.value = !regModal.value;
  nums.value = num;
};
const handlePaid = (paid) => {
  paidFromMOdal.value = paid;
};
const selectedNumber = (nums) => {
  selectedNum .value = nums
}

//stop hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
const betName = (name) => {
  bettor.value = { ...bettor.value, [nums.value]: name }; 
};
watch(
  () => paidFromMOdal.value,
  (newVal) => {
  }
);
const numbers = ref([
  { title: "0-1" },
  { title: "0-2" },
  { title: "0-3" },
  { title: "0-4" },
  { title: "0-5" },
  { title: "0-6" },
  { title: "0-7" },
  { title: "0-8" },
  { title: "0-9" },
  { title: "1-1" },
  { title: "1-2" },
  { title: "1-3" },
  { title: "1-4" },
  { title: "1-5" },
  { title: "1-6" },
  { title: "1-7" },
  { title: "1-8" },
  { title: "1-9" },
  { title: "2-1" },
  { title: "2-2" },
  { title: "2-3" },
  { title: "2-4" },
  { title: "2-5" },
  { title: "2-6" },
  { title: "2-7" },
  { title: "2-8" },
  { title: "2-9" },
  { title: "3-1" },
  { title: "3-2" },
  { title: "3-3" },
  { title: "3-4" },
  { title: "3-5" },
  { title: "3-6" },
  { title: "3-7" },
  { title: "3-8" },
  { title: "3-9" },
  { title: "4-1" },
  { title: "4-2" },
  { title: "4-3" },
  { title: "4-4" },
  { title: "4-5" },
  { title: "4-6" },
  { title: "4-7" },
  { title: "4-8" },
  { title: "4-9" },
  { title: "5-1" },
  { title: "5-2" },
  { title: "5-3" },
  { title: "5-4" },
  { title: "5-5" },
  { title: "5-6" },
  { title: "5-7" },
  { title: "5-8" },
  { title: "5-9" },
  { title: "6-1" },
  { title: "6-2" },
  { title: "6-3" },
  { title: "6-4" },
  { title: "6-5" },
  { title: "6-6" },
  { title: "6-7" },
  { title: "6-8" },
  { title: "6-9" },
  { title: "7-1" },
  { title: "7-2" },
  { title: "7-3" },
  { title: "7-4" },
  { title: "7-5" },
  { title: "7-6" },
  { title: "7-7" },
  { title: "7-8" },
  { title: "7-9" },
  { title: "8-1" },
  { title: "8-2" },
  { title: "8-3" },
  { title: "8-4" },
  { title: "8-5" },
  { title: "8-6" },
  { title: "8-7" },
  { title: "8-8" },
  { title: "8-9" },
  { title: "9-1" },
  { title: "9-2" },
  { title: "9-3" },
  { title: "9-4" },
  { title: "9-5" },
  { title: "9-6" },
  { title: "9-7" },
  { title: "9-8" },
  { title: "9-9" },
]);
</script>

<style scoped>
@media screen and (min-width: 431px) {
  .cust {
    width: auto;
  }
}
</style>
