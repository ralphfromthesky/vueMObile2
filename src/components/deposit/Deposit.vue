<template>
  <div>
    <div
      class="text-white custom1 h-screen px-1 bg-[#05309F] mt-[.89rem] rounded-t-[.2rem]"
    >
      <div class="flex justify-between items-center mt-[.5rem]">
        <span @click="closeDeposit"
          ><img src="/images/back.png" alt="" class="w-[.3rem]"
        /></span>
        <span class="text-[.35rem] absolute left-[2.8rem]">Deposito</span>
        <span class="pb-[.5rem] text-[#fff0bb]">Registro de recarga</span>
      </div>
      <div class="border-b-[.01rem] border-[#3a61c2] flex gap-1">
        <span
          :class="['flex items-center text-[.25rem] gap-[.1rem] w-[2.4rem] pb-[.1rem]', onlineDeposit && 'border-b-[.06rem] ']"
          @click="showTransferDep('online')"
        >
          <img src="/34X34.png" alt="" class="h-[.4rem]" />
          Deposito on-line
        </span>
        <span
          :class="['flex items-center text-[.25rem] gap-[.1rem] w-[3rem] pb-[.1rem]', transferToDeposit && 'border-b-[.06rem]']"
          @click="showTransferDep('transfer')"
        >
          <img src="/34X34.png" alt="" class="h-[.4rem]" />
          Transfer to deposit
        </span>
      </div>
      <div class="h-[13rem] px-[.1rem] overflow-auto">
        <div v-if="onlineDeposit">
          <div class="py-1">
            <div v-for="(trans, index) in transferDep?.content" :key="index">
              <div v-if="index === 2">
                <span
                  class="py-[.3rem] px-2 flex items-center border-2 border-[red] rounded-[.1rem]"
                  >{{ trans.payType }}</span
                >
                <span
                  class="py-[.3rem] px-2 flex items-center border-2 border-[red] rounded-[.1rem]"
                  >{{ trans.payName }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div v-if="transferToDeposit">
          <div class="flex justify-center gap-1 py-1">
            <div v-for="(img, index) in transferDep?.content" :key="index">
              <span
                :class="['py-[.3rem] px-2 flex items-center border-2 border-bord rounded-[.1rem]', visa && 'border-2 border-[red]']"
                v-if="index === 0"
                @click="showVisaUsdt(index)"
                ><img :src="img.icon" class="h-[.5rem]" /> VISA</span
              >
              <span
              :class="['py-[.3rem] px-2 flex items-center border-2 border-bord rounded-[.1rem]', usdt && 'border-2 border-[red]']"
                v-if="index === 1"
                @click="showVisaUsdt(index)"
                ><img :src="img.icon" class="h-[.5rem]" />USDT</span
              >
            </div>
          </div>
          <div class="py-2">Please select the payment method:</div>
          <div v-if="usdt">
            <div v-for="(visa, index) in transferDep?.content" :key="index">
              <div v-if="index === 1">
                <span class="flex justify-center py-1">{{
                  visa.payBankName
                }}</span>
                <div class="border-2 border-[#3a61c2] p-1 rounded-[.1rem]">
                  <div class="flex items-center justify-between my-[.1rem]">
                    <span>Account: {{ visa.bankCard }}</span>
                    <span><img src="/copyIcons/1c64f5.png" alt="" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-[.3rem] py-1 leading-[.4rem] italic">
              Please scan the QR code below to transfer,
              <span class="text-[red] font-bold">
                and submit the order after the transfer is complete. The
                financial staff will add the quota for you within 1-3 minutes
                after receiving the payment.</span
              >
            </div>
            <div>
              <div v-for="(usdt, index) in transferDep?.content" :key="index">
                <div v-if="index === 1">
                  <div class="my-1 flex justify-center">
                    <img :src="usdt.qrCodeImg" class="h-[4rem]" />
                  </div>
                  <div>
                    <div class="flex flex-col leading-[.4rem]">
                      <span>
                        <span class="text-[.3rem] font-bold text-bg"
                          >USDT exchange rate:</span
                        >
                        {{ usdt.usdtRate }}</span
                      >
                      <span>
                        <span class="text-[.3rem] font-bold text-bg"
                          >Minimum amount of single deposit:</span
                        >
                        {{ usdt.minFee }}</span
                      >
                      <span
                        ><span class="text-[.3rem] font-bold text-bg"
                          >Maximum amount of single deposit:</span
                        >

                        {{ usdt.maxFee }}</span
                      >
                      <span>
                        <span class="text-[.3rem] font-bold text-bg"
                          >Transfer notes:</span
                        >
                        {{ usdt.usdtRemark }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span>Enter the transfer information:</span>
                <div class="flex flex-col my-[.2rem]">
                  <input type="text" class="py-1 rounded-sm my-[.1rem]" />
                  <input type="text" class="py-1 rounded-sm my-[.1rem]" />
                  <input type="text" class="py-1 rounded-sm my-[.1rem]" />
                  <input type="text" class="py-1 rounded-sm my-[.1rem]" />
                </div>
              </div>
              <div class="flex justify-between py-1">
                <span>Deposit Bonus:</span>
                <span class="flex items-center gap-[.1rem]">
                  <input type="checkbox" name="" id="" />

                  <label for="">Dont Participate in promotions</label>
                </span>
              </div>
              <div>
                <button class="bg-bg text-txt py-1 w-full rounded-sm font-bold">
                  Recharge Now
                </button>
              </div>
            </div>
          </div>
          <div v-if="visa">
            <div v-for="(visa, index) in transferDep?.content" :key="index">
              <div v-if="index === 0">
                <span class="flex justify-center py-1">{{
                  visa.payBankName
                }}</span>
                <div class="border-2 border-[#3a61c2] p-1 rounded-[.1rem]">
                  <div class="flex items-center justify-between">
                    <span
                      ><span class="text-[.4rem] font-bold text-bg">Name:</span>
                      {{ visa.payBankName }}</span
                    >
                    <span><img src="/copyIcons/1c64f5.png" alt="" /></span>
                  </div>
                  <div class="flex items-center justify-between my-[.1rem]">
                    <span
                      ><span class="text-[.4rem] font-bold text-bg"
                        >Account:</span
                      >
                      {{ visa.bankCard }}</span
                    >
                    <span><img src="/copyIcons/1c64f5.png" alt="" /></span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span
                      ><span class="text-[.4rem] font-bold text-bg"
                        >Address:</span
                      >
                      {{ visa.bankAddress }}</span
                    >
                    <span><img src="/copyIcons/1c64f5.png" alt="" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-2 flex flex-col">
              <span> Enter the tranfer information: </span>
              <span class="p-1">
                <input
                  type="text"
                  class="w-full rounded-sm py-1 pl-1"
                  placeholder="Maximum amount of single deposit 7000000"
                />
                <input
                  type="text"
                  class="w-full rounded-sm py-1 my-1 pl-1"
                  placeholder="Please enter the payer' name"
                />
              </span>
              <div class="flex justify-between py-1">
                <span>Deposit Bonus:</span>
                <span class="flex items-center gap-[.1rem]">
                  <input type="checkbox" name="" id="" />

                  <label for="">Dont Participate in promotions</label>
                </span>
              </div>
            </div>
            <div>
              <button class="bg-bg text-txt py-1 w-full rounded-sm font-bold">
                Recharge Now
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="h-[calc(100vh-2.56rem)] overflow-auto" v-if="false">
        <div class="grid grid-cols-2 my-[.2rem] gap-[.2rem]">
          <div
            v-for="(depositValue, index) in depositData.filter(
              (entry) => entry.depositType == 1
            )"
            :key="depositValue"
            @click="
              setActivePaytype(
                depositData,
                depositValue?.payType,
                depositValue?.id,
                index
              )
            "
            :class="[
              'flex items-center p-[.12rem] border-[.02rem] border-[#3a61c2] relative overflow-hidden w-full rounded-sm justify-between',
              { 'active-button': activePayTypeButton === index },
            ]"
          >
            <span><img src="/y.png" alt="" class="rounded-sm" /></span>
            <span class="text-[.25rem] mr-[.4rem]">{{
              depositValue?.payType
            }}</span>
            <div
              v-if="activePayTypeButton === index"
              class="h-[.6rem] -rotate-45 bg-[#fff0bb] w-[.6rem] absolute right-[-.29rem] bottom-[-.29rem]"
            >
              <img
                src="/check.png"
                class="relative -top-[.05rem] left-[.12rem] w-[.35rem] z-10 rotate-45"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          class="flex gap-1 flex-wrap border-y-[.01rem] py-[.3rem] border-[#3a61c2]"
        >
          <div
            v-for="(counterValue, index) in checkoutCounterByType"
            :key="index"
            :class="[
              'flex justify-center overflow-hidden p-[.12rem] relative border-[.02rem] border-[#3a61c2] w-[2rem] rounded-sm text-[.25rem]',
              { 'active-button': activeButton === index },
            ]"
            @click="
              setActive(
                checkoutCounterByType,
                counterValue?.payName,
                counterValue?.id,
                index
              )
            "
          >
            {{ counterValue?.payName }}
            <div
              v-if="activeButton === index"
              class="h-[.6rem] -rotate-45 bg-[#fff0bb] w-[.6rem] absolute right-[-.29rem] bottom-[-.29rem]"
            >
              <img
                src="/check.png"
                class="relative -top-[.05rem] left-[.12rem] w-[.35rem] z-10 rotate-45"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div
            v-if="amounts.length > 1"
            class="flex justify-between my-1 items-center"
          >
            <span class="text-[.3rem]">Deposito</span>
            <span class="text-[.25rem] text-[#fff0bb]"
              >Detalhes adicionais do evento de bonus</span
            >
          </div>
          <div class="grid grid-cols-4 gap-[.25rem] relative">
            <span
              class="relative"
              v-for="(amount, index) in amounts"
              :key="amount"
              @click="setActiveAmount(index, amount)"
            >
              <div
                v-if="amount"
                :class="[
                  'flex justify-center overflow-hidden p-[.12rem] w-full relative border-[.02rem] border-[#3a61c2] w-[1.5rem] rounded-sm text-[.25rem]',
                  { 'active-button': activeAmount === index },
                ]"
              >
                {{ amount }}
                <img
                  v-if="activeAmount === index"
                  src="/check.png"
                  class="h-[.5rem] p-[.1rem] absolute right-[-.2rem] bottom-[-.15rem] z-10"
                  alt=""
                />
                <div
                  v-if="activeAmount === index"
                  class="h-[.4rem] -rotate-45 bg-[#fff0bb] w-[.4rem] absolute right-[-.2rem] bottom-[-.2rem]"
                ></div>
              </div>
            </span>
          </div>
        </div>
        <div
          class="my-[.3rem] flex justify-center hover:border-[white] border-2 border-[#3a61c2] rounded-sm"
        >
          <span class="text-[.45rem] pl-[.1rem] mr-1">R$</span>
          <input
            type="text"
            :placeholder="`Minimo ${setMinMax.minFee}, Maximo ${setMinMax.maxFee}`"
            class="input-no-border w-[6.5rem] bg-[#05309F] text-white h-[.7rem] rounded-sm"
            v-model="amount"
          />
        </div>
        <div>
          <button
            @click="depositGo"
            class="w-full p-[.2rem] bg-[#fff0bb] text-[#05309F] text-[.27rem] rounded-[.2rem]"
          >
            Deposit
          </button>
        </div>
      </div> -->
      </div>
    </div>
  </div>
  <Toast
    v-if="showAlert"
    :close="showAlert"
    :message="showAlertMessage"
    @close="showAlert = false"
    class="flex items-center justify-center h-screen w-full"
  />
</template>

<script setup>
import Toast from "@/components/ToastComponent/Toast.vue";
import { onMounted, ref, watch } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import {
  axiosGet2,
  axiosPost2,
  axiosPost3,
} from "../../components/axios/AxiosHook.js";
import { DateToStr } from "../../components/functions/Function.js";
import { useStore } from "@/store/store.js";
import { Alert } from "ant-design-vue";

const store = useStore();
const depositData = ref([]);
const activeButton = ref(null);
const activePayTypeButton = ref(0);
const activeAmount = ref(null);
const checkoutCounterByType = ref([]);
const setMinMax = ref([]);
const amounts = ref([]);
const emits = defineEmits(["close"]);

const payId = ref("");
const amount = ref("");
const bankCode = ref("");
const joinDepositGift = ref(2);
const showAlert = ref(false);
const showAlertMessage = ref("");

const transferDep = ref([]);
const transferToDeposit = ref(false);
const onlineDeposit = ref(true);
const visa = ref(true);
const usdt = ref(false);

const closeDeposit = () => {
  emits("close", false);
};

const showTransferDep = (name) => {
  transferToDeposit.value = false;
  if (name === "transfer") {
    transferToDeposit.value = true;
    onlineDeposit.value = false;
  }
  if (name === "online") {
    onlineDeposit.value = true;
  }
};

const showVisaUsdt = (index) => {
  visa.value = false;
  usdt.value = false;
  if (index === 0) {
    visa.value = true;
  }
  usdt.value = index === 1 ? true : false;
};
const setActive = (checkoutCounterByType, payName, id, index) => {
  activeButton.value = index;
  amounts.value = checkoutCounterByType
    .filter((entry) => entry.payName === payName)[0]
    .fixedAmount.split(",");
  payId.value = id;
};
const setActivePaytype = (data, payType, id, index) => {
  activePayTypeButton.value = index;
  checkoutCounterByType.value = data.filter(
    (entry) => entry.payType === payType
  );
  var depoData = data.filter((entry) => entry.depositType === 1);
  setMinMax.value = depoData[index];
  activeButton.value = 0;
  amounts.value = data
    .filter((entry) => entry.payType === payType)[0]
    .fixedAmount.split(",");
  payId.value = id;
  bankCode.value = payType;
};
const setActiveAmount = (index, amounts) => {
  activeAmount.value = index;
  amount.value = amounts;
};

const Deposit = useMutation({
  mutationFn: (payload) =>
    axiosGet2("api/native/v2/rn_pay_methods.do", payload),
  onSuccess: (data) => {
    depositData.value = data?.content;
    var depositType;
    depositType = data.content.filter((entry) => entry.depositType === 1);
    checkoutCounterByType.value = data.content.filter(
      (entry) => entry.payType === depositType[0].payType
    );
    setMinMax.value = depositType[0];
  },
  onError: (error) => {
    console.log(`this error: ${error}`);
  },
});

const DepositMoney = useMutation({
  mutationFn: (payload) => axiosPost3("api/native/v2/onlinePay.do", payload),
  onSuccess: (data) => {
    if (data.success === true) {
      if (data.returnType === "href") {
        window.location.replace(data.url);
      }
    } else if (data.success === false) {
      showAlert.value = true;
      showAlertMessage.value = data.msg;
    }
  },
  onError: (error) => {
    console.log(`this error: ${error}`);
  },
});

function depositGo() {
  DepositMoney.mutate({
    amount: amount.value,
    bankCode: bankCode.value,
    joinDepositGift: joinDepositGift.value,
    payId: payId.value,
  });
}

const {} = useQuery({
  queryKey: ["dep"],
  enabled: true,
  queryFn: () => axiosGet2("/api/native/v2/rn_pay_methods.do?ver=2"),
  select: (data) => {
    transferDep.value = data;
  },
});

onMounted(() => {
  Deposit.mutate({
    ver: "2",
  });
});
</script>

<style scoped>
.input-no-border:focus {
  outline: none;
  border: none;
}

.active-button {
  border: 0.02rem solid #fff0bb;
}
@media screen and (min-width: 430px) {
  .custom1 {
    width: 7.3rem;
  }
}
</style>
