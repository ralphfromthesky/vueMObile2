<template>
  <div>
    <div class="text-white relative">
      <div>
        <img
          src="/turnlateImages/tasks.png"
          class="absolute top-[-2.5rem] z-[-1]"
        />
      </div>
      <div
        class="flex justify-center items-center gap-[.05rem] bg-bg rounded-[.1rem] my-[.1rem] h-[1rem]"
      >
        <div
          :class="[
            'text-txt font-bold text-[.21rem]',
            activeType === 'New arrival' ? 'border-b-2 border-txt' : '',
          ]"
          @click="showTask('New arrival')"
        >
          New arrival task
        </div>
        <div
          v-for="(prompt, index) in promptData?.content?.taskList"
          :key="index"
        >
          <span
            :class="[
              'text-[.21rem] text-txt font-bold',
              prompt.taskTypeName === activeType ? 'border-b-2 border-txt' : '',
            ]"
            v-if="prompt.taskTargetType === 2"
            @click="showTask(prompt.taskTypeName)"
          >
            {{ prompt.taskTypeName }}
          </span>
        </div>
      </div>
      <div
        class="p-[.1rem] rounded-[.2rem]"
        style="
          background-image: linear-gradient(
            45deg,
            hsl(57deg 96% 32%) 0%,
            hsl(53deg 63% 44%) 9%,
            hsl(50deg 58% 53%) 18%,
            hsl(46deg 72% 62%) 27%,
            hsl(45deg 80% 68%) 36%,
            hsl(47deg 65% 68%) 45%,
            hsl(49deg 52% 68%) 55%,
            hsl(52deg 40% 68%) 64%,
            hsl(51deg 42% 68%) 73%,
            hsl(48deg 53% 69%) 82%,
            hsl(45deg 65% 69%) 91%,
            hsl(43deg 78% 70%) 100%
          );
        "
      >
        <div
          v-for="(prompt, index) in promptData?.content?.taskList"
          v-if="newArrival"
          class="relative"
        >
          <div
            class="p-[.1rem] bg-bg text-txt rounded-[.12rem] mb-[.1rem] w-full flex items-center justify-between"
            v-if="prompt.taskBonus && prompt.newArrivalTaskTypeName"
          >
            <span
              class="flex flex-col justify-start items-center text-[.21rem]"
            >
              <span>Bonus</span>

              <span
                class="text-[.4rem] flex items-center gap-[.04rem] text-[black]"
                >{{ prompt.taskBonus }} <span class="text-[.21rem]">INR</span>
              </span>
            </span>
            <span
              class="text-[.9rem] font-thin absolute top-[-.2rem] left-[1.5rem]"
              >|</span
            >

            <span class="flex items-center gap-[.1rem]text-[.21rem]">
              <span class="text-[.22rem] text-txt">{{
                prompt.newArrivalTaskTypeName
              }}</span>
              <span
                class="p-[.1rem] bg-gradient-to-t from-[#ffb785] to-[#ffd295] rounded-[.4rem] ml-[.1rem]"
                >Go Now</span
              >
            </span>
          </div>
        </div>
        <div class="flex justify-center gap-2" v-if="accumulative">
          <span
            class="text-[.22rem] text-white p-[.1rem] rounded bg-gradient-to-t from-[#ff6f37] to-[#ffbb5f]"
            @click="accumulativeRechargeBtn('recharge')"
            >Accumulative Recharge</span
          >
          <span
            @click="accumulativeRechargeBtn('valid')"
            class="text-[.22rem] p-[.1rem] rounded bg-gradient-to-t from-[#ffb785] to-[#ffd295] text-white"
            >Accumulated valid bets</span
          >
        </div>
        <div class="flex justify-between text-txt" v-if="accumulative">
          <span>Credit</span>
          <span>Reset Time {{ promptData?.content?.dayResetTime }}</span>
        </div>
        <div
          v-if="accumulative"
          class="h-[.19rem] rounded-[1.4rem] border-[.01rem] border-white bg-gradient-to-b from-[#d59737] to-[#f6c477] bg-[#3737] w-full"
        ></div>
        <div
          class="flex w-full justify-center gap-[.3rem] text-txt"
          v-if="accumulative"
        >
          <span class="text-[.21rem]">0</span>
          <div
            v-for="(prompt, index) in promptData?.content?.taskList[count]
              ?.bonusConfigsList"
            :key="index"
            class="flex text-[.21rem]"
          >
            {{ prompt.cumulativeAmount }}
          </div>
        </div>
        <div class="h-[6rem] overflow-auto" v-if="dailyTask">
          <div
            v-for="(prompt, index) in promptData.content?.taskList[count]
              ?.bonusConfigsList"
            :key="index"
            class="p-[.1rem]"
            v-if="recharge"
          >
            <div
              class="p-[.1rem] bg-bg text-txt rounded-[.12rem] w-full flex justify-center gap-2"
            >
              <span class="flex items-center text-[.21rem] gap-[.1rem]">
                Bonus
                <span class="text-[.4rem] text-[black]">{{
                  prompt.otherBonus
                }}</span>
                INR
              </span>
              <span class="text-[.6rem]">|</span>
              <span class="flex flex-col items-center text-[.21rem]">
                Amount of Deposit
                <span class="text-[.4rem] text-[black]">{{
                  prompt.cumulativeAmount
                }}</span>
              </span>
            </div>
          </div>
          <div
            v-for="(prompt, index) in promptData.content?.taskList[7]
              ?.bonusConfigsList"
            :key="index"
            class="p-[.1rem]"
            v-if="validBets"
          >
            <div
              class="p-[.1rem] bg-bg text-txt rounded-[.12rem] w-full flex justify-center gap-2"
            >
              <span class="flex items-center text-[.21rem] gap-[.1rem]">
                Bonus
                <span class="text-[.4rem] text-[black]">{{
                  prompt.otherBonus
                }}</span>
                INR
              </span>
              <span class="text-[.6rem]">|</span>
              <span class="flex items-center text-[.21rem]">
                Valid bets
                <span class="text-[.4rem] pl-[.2rem] text-[black]">{{
                  prompt.cumulativeAmount
                }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="h-[6rem] overflow-auto" v-if="loginTask">
          <div class="flex justify-between">
            <span class="text-[.21rem] text-center text-txt"
              >Cumulative Valid Bets/Days</span
            >
            <span class="text-center text-[.21rem] text-txt"
              >Reset Time {{ promptData?.content?.dayResetTime }}</span
            >
          </div>
          <div
            class="h-[.19rem] rounded-[1.4rem] border-[.01rem] border-white bg-gradient-to-b from-[#d59737] to-[#f6c477] bg-[#3737] w-full"
          ></div>
          <div class="flex w-full justify-center gap-[1.2rem]">
            <span class="text-[.21rem] text-txt">0</span>
            <div
              v-for="(prompt, index) in promptData?.content?.taskList[count]
                ?.bonusConfigsList"
              :key="index"
              class="flex text-[.21rem] text-txt"
            >
              {{ prompt.cumulativeAmount }}
            </div>
          </div>

          <div
            v-for="(prompt, index) in promptData.content?.taskList[count]
              ?.bonusConfigsList"
            :key="index"
            class="p-[.1rem]"
          >
            <div
              class="p-[.1rem] bg-bg text-txt rounded-[.12rem] w-full flex items-center justify-center gap-2"
            >
              <span class="flex items-center text-[.21rem] gap-[.1rem]">
                Bonus
                <span class="text-[.4rem] text-[black]">{{
                  prompt.otherBonus
                }}</span>
                INR
              </span>
              <span class="text-[.6rem]">|</span>
              <span class="flex gaptems-center">
                <span class="flex flex-col items-center">
                  <span class="text-[.21rem]">Continuous login days </span>

                  <span class="text-[.21rem]"> on Going </span>
                </span>
                <span class="text-[.4rem] ml-[.1rem] text-[black]">{{
                  prompt.cumulativeAmount
                }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="h-[6rem] overflow-auto" v-if="weeklyTaks">
          <div class="flex justify-center gap-2">
            <span
              class="text-[.22rem] text-white p-[.1rem] rounded bg-gradient-to-t from-[#ff6f37] to-[#ffbb5f]"
              @click="accumulativeRechargeBtns('wkrecharge')"
              >Accumulative Recharge</span
            >
            <span
              @click="accumulativeRechargeBtns('wkvalid')"
              class="text-[.22rem] p-[.1rem] rounded bg-gradient-to-t from-[#ffb785] to-[#ffd295] text-white"
              >Accumulated valid bets</span
            >
          </div>
          <div class="flex justify-between text-txt">
            <span>Credit</span>
            <span>Reset Time {{ promptData?.content?.dayResetTime }}</span>
          </div>
          <div
            class="h-[.19rem] rounded-[1.4rem] border-[.01rem] border-white bg-gradient-to-b from-[#d59737] to-[#f6c477] bg-[#3737] w-full"
          ></div>
          <div class="flex w-full justify-center gap-[.5rem] text-txt">
            <span class="text-[.21rem]">0</span>
            <div
              v-for="(prompt, index) in promptData?.content?.taskList[count]
                ?.bonusConfigsList"
              :key="index"
              class="flex text-[.21rem]"
            >
              {{ prompt.cumulativeAmount }}
            </div>
          </div>
          <div
            v-for="(prompt, index) in promptData.content?.taskList[count]
              ?.bonusConfigsList"
            :key="index"
            class="p-[.1rem]"
            v-if="wkrecharge"
          >
            <div
              class="p-[.1rem] bg-bg text-txt rounded-[.12rem] w-full flex justify-center gap-2"
            >
              <span class="flex items-center text-[.21rem] gap-[.1rem]">
                Bonus
                <span class="text-[.4rem] text-[black]"
                  >{{ prompt.otherBonus }}</span
                >
                INR
              </span>
              <span class="text-[.6rem]">|</span>
              <span class="flex items-center text-[.21rem] flex-col">
                Amount of Deposit
                <span class="text-[.4rem] text-[black]">{{
                  prompt.cumulativeAmount
                }}</span>
              </span>
            </div>
          </div>
          <div
            v-for="(prompt, index) in promptData.content?.taskList[count]
              ?.bonusConfigsList"
            :key="index"
            class="p-[.1rem]"
            v-if="wkvalid"
          >
            <div
              class="p-[.1rem] bg-bg text-txt rounded-[.12rem] w-full flex justify-center gap-2"
            >
              <span class="flex items-center text-[.21rem] gap-[.1rem]">
                Bonus
                <span class="text-[.4rem] text-[black]"
                  >{{ prompt.otherBonus }}</span
                >
                INR
              </span>
              <span class="text-[.6rem]">|</span>
              <span class="flex items-center text-[.21rem] flex-col">
                Valid bets
                <span class="text-[.4rem] text-[black]">{{
                  prompt.cumulativeAmount
                }}</span>
              </span>
            </div>
          </div>

        </div>
      </div>
      <div class="my-[.2rem]" v-if="accumulative">
        <div class="flex justify-between px-[.1rem]">
          <button
            class="p-[.2rem] bg-bg text-txt rounded-[.1rem] w-[2.5rem] text-[.3rem] border-1 border-txt font-bold"
          >
            One Click
          </button>
          <button
            class="p-[.2rem] bg-[#f3cf6a] text-txt rounded-[.1rem] w-[2.5rem] text-[.3rem] border-1 border-txt font-bold"
            @click="() => (store.state.openDeposit = true)"
          >
            Deposit
          </button>
        </div>
      </div>
      <div class="my-[.2rem]" v-if="loginTask">
        <div class="flex justify-between px-[.1rem] w-full">
          <button
            class="p-[.2rem] bg-[#f3cf6a] text-txt rounded-[.1rem] w-full text-[.3rem] border-1 border-txt font-bold"
          >
            Bet now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useQuery, useMutation } from "@tanstack/vue-query";
import { axiosGet2, axiosPost } from "@/components/axios/AxiosHook.js";
import { useStore } from "@/store/store";
const store = useStore();
const promptData = ref([]);
const newArrival = ref(false);
const dailyTask = ref(true);
const loginTask = ref(false);
const weeklyTaks = ref(false);
const accumulative = ref(true);
const activeType = ref("每日任务");
const count = ref(4);
const validBets = ref(false);
const recharge = ref(true);
const wkvalid = ref(false);
const wkrecharge = ref(true);

const { mutate } = useMutation({
  mutationFn: (payload) =>
    axiosPost("/api/native/v2/findMatchingPrompsWithStatus.do", payload),

  onSuccess: (data) => {
    promptData.value = data.data;
    console.log(promptData.value);
  },
  onError: (err) => console.log(err),
});

const showTask = (task) => {
  //alert(task);
  newArrival.value = false;
  activeType.value = task;
  dailyTask.value = false;
  loginTask.value = false;
  weeklyTaks.value = false;
  accumulative.value = true;
  if (task === "New arrival") {
    newArrival.value = true;
    accumulative.value = false;
    // count.value = 4;
  }
  if (task === "每日任务") {
    dailyTask.value = true;
    count.value = 4;
  }
  if (task === "每周任务") {
    weeklyTaks.value = true;
    accumulative.value = false;
    count.value = 8;
  }
  if (task === "连续登录任务") {
    count.value = 5;
    loginTask.value = true;
    accumulative.value = false;
  }
};

const accumulativeRechargeBtn = (bets) => {
  recharge.value = false;
  bets === "valid" ? (validBets.value = true) : (validBets.value = false);
  bets === "recharge" ? (recharge.value = true) : (recharge.value = false);
};

const accumulativeRechargeBtns = (task) => {
task === 'wkvalid' ? wkvalid.value = true : wkvalid.value = false; 
task === 'wkrecharge' ? wkrecharge.value = true : wkrecharge.value = false; 

}
onMounted(() => {
  mutate({ preType: 2 });
});
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(10rem);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-10rem);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
