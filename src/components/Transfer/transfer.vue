<template>
  <div>
    <div class="flex flex-col items-center justify-center text-center">
      <span class="text-[.4rem] text-[white] font-bold" v-if="showIn"
        >Transfer from systemPocket Game Electronics</span
      >

      <span class="text-[.4rem] text-[white] font-bold" v-if="showOut"
        >Pocket Game ElectronicsTransfer to system</span
      >

      <span class="border-2 border-[#3a61c2] p-1 rounded">
        <a-radio-group v-model:value="value">
          <span
            class="flex justify-center text-[white] py-1 gap-[2rem] border-b-[.01rem] border-[#3a61c2] font-bold"
            >Amount of transfer in
            <span
              @click="
                () => {
                  showOut = false;
                  showIn = true;
                }
              "
            >
              <a-radio :value="1"></a-radio>
            </span>
          </span>
          <span
            class="flex justify-between font-bold text-[white] py-1"
     
            >Amount of transfer out
            <span        @click="
              {
                showOut = true;
                showIn = false;
              }
            ">
              <a-radio :value="2"></a-radio>
            </span>
          </span>
        </a-radio-group>
      </span>
      <div class="my-[.3rem] w-full">
        <input
          v-model="money"
          placeholder="Pleaser enter integer moneys"
          class="bg-transparent w-full pl-1 rounded-[.1rem] border-2 border-[#3a61c2] text-[white] py-1 placeholder-[white]"
        />
      </div>
      <div class="flex gap-1">
        <button
          class="w-[2.8rem] h-[.7rem] rounded-[.15rem] text-[.2rem] bg-transparent border border-[#FFF0BB] text-[#FFF0BB]"
        
          >
          Cancel
        </button>
        <button
          class="w-[2.8rem] h-[.7rem] rounded-[.15rem] text-[.2rem] bg-[#FFF0BB] text-[#1A45B1]"
          @click="submitTransfer"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMutation } from "@tanstack/vue-query";
import { ref, watch } from "vue";
import { axiosPost2 } from "../axios/AxiosHook";
import { messageApi } from "../antUi/antMessage";
const showOut = ref(false);
const showIn = ref(true);
const money = ref("");
const value = ref(1);

const payload = ref({
  changeFrom: "sys",
  changeTo: 60,
  money: money.value,
  transApiPath: "/thirdTrans/thirdRealTransMoney.do",
  lan: "en",
});

watch(money, (newVal) => {
  payload.value.money = newVal;
});

const { mutate } = useMutation({
  mutationFn: (payload) =>
    axiosPost2("/api/thirdTrans/thirdRealTransMoney.do", payload),
  onSuccess: (data) => {
    messageApi.info(data.msg);
  },
  onError: (data) => messageApi.error(data.msg),
});

const submitTransfer = () => {
  if (money.value === "") {
    messageApi.error("Please input integer Money");
    return;
  }
  mutate(payload.value);
};
</script>

<style scoped></style>
