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
          :class="[
            'flex items-center text-[.25rem] gap-[.1rem] w-[2.4rem] pb-[.1rem]',
            onlineDeposit ? 'border-b-[.06rem]' : '',
          ]"
          @click="showTransferDep('online')"
        >
          <img src="/34X34.png" alt="" class="h-[.4rem]" />
          Deposito on-line
        </span>
        <span
          :class="[
            'flex items-center text-[.25rem] gap-[.1rem] w-[3rem] pb-[.1rem]',
            transferToDeposit ? 'border-b-[.06rem]' : '',
          ]"
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
                  class="py-[.3rem] px-2 flex items-center border-[.011rem] my-[.1rem]"
                  >{{ trans.payType }}</span
                >
                <span
                  class="py-[.3rem] px-2 flex items-center border-[.011rem]"
                  >{{ trans.payName }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="py-2 flex flex-col" v-if="onlineDeposit">
          <span> Amount of deposit: </span>

          <div class="grid grid-cols-3 gap-1">
            <div
              v-for="(dep, index) in depositedAmount?.data?.content?.detailList"
              :key="index"
              class="flex flex-col relative overflow-hidden"
            >
              <div
                :class="[
                  'h-[1rem] rounded-[.1rem] border-2 flex flex-col justify-center items-center',
                  dep.depositAmount === selectAmt ? 'bg-bg text-txt' : '',
                ]"
                @click="selectDep(dep.depositAmount)"
              >
                <span
                  class="p-[.02rem] w-[2rem] flex justify-center text-[.2rem] absolute top-0 left-[-.8rem] -rotate-45 bg-[red]"
                  v-if="(dep.depositAmount == 100) || (dep.depositAmount === 1000) || (dep.depositAmount === 500)"
                >
                  HOT
                </span>
                <span class="font-bold"> {{ dep.depositAmount }} </span>
                <span
                  :class="[
                    'text-bg',
                    dep.depositAmount === selectAmt ? 'bg-bg text-txt' : '',
                  ]"
                >
                  +{{ dep.awardAmount }}% Bonus
                </span>
              </div>
            </div>
          </div>
          <span class="p-1 relative">
            <input
              type="number"
              v-model="depAmount"
              class="w-full rounded-sm text-[black] mb-1 py-1 pl-1"
              placeholder="Maximum amount of single deposit 10000"
            />
            <span v-if="showX" @click="clearDep" class="py-[.1rem] px-[.15rem] font-bold m-0 rounded-[.5rem] absolute top-[.4rem] right-[.3rem] bg-txt">X</span>
          </span>
          <div class="flex justify-between py-1">
            <span>Deposit Bonus: 5% ({{ depPercent }})</span>
            <span class="flex items-center gap-[.1rem]">
              <input type="checkbox" name="" id="" />

              <label for="">Dont Participate in promotions</label>
            </span>
          </div>
          <div>
            <button
              class="bg-bg text-txt py-1 w-full rounded-sm font-bold"
              @click="onPay"
            >
              Recharge Now
            </button>
          </div>
        </div>

        <div v-if="transferToDeposit">
          <div class="flex justify-center gap-1 py-1">
            <div v-for="(img, index) in transferDep?.content" :key="index">
              <span
                :class="[
                  'py-[.3rem] px-2 flex font-bold items-center relative overflow-hidden rounded-[.1rem]',
                  visa
                    ? 'border-2 border-bg bg-bg text-txt '
                    : ' border-2 border-txt',
                ]"
                v-if="index === 0"
                @click="showVisaUsdt(index)"
                ><img :src="img.icon" class="h-[.5rem]" />
                <div class="h-[.3rem] bg-bg w-[.3rem]"></div>
                <img
                  src="/turnlateImages/check.png"
                  v-if="visa"
                  class="h-[.3rem] absolute bottom-[-.03rem] right-[-.02rem]"
                />
                VISA</span
              >
              <span
                :class="[
                  'py-[.3rem] px-2 flex relative  font-bold overflow-hidden items-center rounded-[.1rem]',
                  usdt
                    ? 'border-2 border-bg  bg-bg text-txt'
                    : ' border-2 border-txt',
                ]"
                v-if="index === 1"
                @click="showVisaUsdt(index)"
                ><img :src="img.icon" class="h-[.5rem]" />
                <img
                  src="/turnlateImages/check.png"
                  v-if="usdt"
                  class="h-[.3rem] absolute bottom-[-.03rem] right-[-.04rem]"
                />
                USDT</span
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
                    <span
                      ><span class="text-bg font-bold"> Account:</span>
                      {{ visa.bankCard }}</span
                    >
                    <span
                      ><img
                        src="/copyIcons/1c64f5.png"
                        alt=""
                        @click="copyToClipboard(visa.bankCard)"
                    /></span>
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
                        {{ usdt.usdtRate }}
                      </span>
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
                  <input
                    type="text"
                    v-model="usdtObject.money"
                    class="py-1 rounded-sm my-[.1rem] pl-1 text-[black]"
                    placeholder="Maximum amount of single deposit 1000000"
                  />
                  <div class="relative">
                    <input
                      readonly
                      type="text"
                      class="w-full rounded-sm py-1 text-[black] pl-[1.2rem]"
                      :placeholder="
                        usdtExhangeRate
                          ? ''
                          : 'The USDT quantity is the amount divided by the USDT exchange rate'
                      "
                    />
                    <div
                      class="text-[.3rem] font-bold absolute top-[.22rem] left-1 text-[black]"
                    >
                      USDT {{ usdtExhangeRate }}
                    </div>
                  </div>
                  <div class="relative my-[.1rem]">
                    <input
                      type="text"
                      v-model="usdtObject.depositVirtualTransactionId"
                      class="w-full rounded-sm py-1 text-[black] pl-[2.5rem]"
                      placeholder="Please enter the transaction ID"
                    />
                    <div
                      class="text-[.3rem] font-bold absolute top-[.22rem] left-1 text-[black]"
                    >
                      Transaction ID
                    </div>
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      v-model="usdtObject.depositor"
                      class="w-full rounded-sm py-1 text-[black] pl-[2.1rem]"
                      placeholder="Please enter the payer' name or OTL"
                    />
                    <div
                      class="text-[.3rem] font-bold absolute top-[.22rem] left-1 text-[black]"
                    >
                      Order notes
                    </div>
                  </div>
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
                <button
                  class="bg-bg text-txt py-1 w-full rounded-sm font-bold"
                  @click="usdtPay"
                >
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
                    <span
                      ><img
                        src="/copyIcons/1c64f5.png"
                        alt=""
                        @click="copyToClipboard(visa.payBankName)"
                    /></span>
                  </div>
                  <div class="flex items-center justify-between my-[.1rem]">
                    <span
                      ><span class="text-[.4rem] font-bold text-bg"
                        >Account:</span
                      >
                      {{ visa.bankCard }}</span
                    >
                    <span
                      ><img
                        src="/copyIcons/1c64f5.png"
                        alt=""
                        @click="copyToClipboard(visa.bankCard)"
                    /></span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span
                      ><span class="text-[.4rem] font-bold text-bg"
                        >Address:</span
                      >
                      {{ visa.bankAddress }}</span
                    >
                    <span
                      ><img
                        src="/copyIcons/1c64f5.png"
                        alt=""
                        @click="copyToClipboard(visa.bankAddress)"
                    /></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-2 flex flex-col">
              <span> Enter the tranfer information: </span>
              <span class="p-1">
                <input
                  type="number"
                  v-model="maxAmount"
                  class="w-full rounded-sm text-[black] mb-1 py-1 pl-1"
                  placeholder="Maximum amount of single deposit 7000000"
                />
                <div class="relative">
                  <input
                    type="text"
                    v-model="payNotes"
                    class="w-full rounded-sm py-1 text-[black] pl-[2.1rem]"
                    placeholder="Please enter the payer' name"
                  />
                  <div
                    class="text-[.3rem] font-bold absolute top-[.22rem] left-1 text-[black]"
                  >
                    Order notes
                  </div>
                </div>
              </span>
              <div class="flex justify-between py-1">
                <span>Deposit Bonus: 10% ({{ maxAmount }}) {{ payNotes }}</span>
                <span class="flex items-center gap-[.1rem]">
                  <input type="checkbox" name="" id="" />

                  <label for="">Dont Participate in promotions</label>
                </span>
              </div>
            </div>
            <div>
              <button
                class="bg-bg text-txt py-1 w-full rounded-sm font-bold"
                @click="mPay"
              >
                Recharge Now
              </button>
            </div>
          </div>
        </div>
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
import { onMounted, ref, watch, computed } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import {
  axiosGet2,
  axiosPost2,
  axiosGet,
  axiosPost3,
} from "../../components/axios/AxiosHook.js";
import { DateToStr } from "../../components/functions/Function.js";
import { useStore } from "@/store/store.js";
import { Alert } from "ant-design-vue";
import { messageApi } from "../antUi/antMessage";

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
const depositedAmount = ref([]);
const transferDep = ref([]);
const transferToDeposit = ref(false);
const onlineDeposit = ref(true);
const visa = ref(true);
const usdt = ref(false);
const maxAmount = ref();
const payNotes = ref("");
const depAmount = ref(0);
const showX = ref(false)
const usdtRate = ref();
const selectAmt = ref(null);
const usdtObject = ref({
  joinDepositGift: 2,
  money: "",
  bankId: 69,
  depositor: "",
  payMethod: 2,
  rate: usdtRate.value,
  bankCode: "USDT",
  bankName: "USDT",
  depositVirtualTransactionId: "",
});

const selectDep = (dep) => {
  depAmount.value = dep;
  selectAmt.value = dep;
  showX.value  = true;
};

const clearDep = () => {
  depAmount.value = ""
  showX.value = false;
}

const depPercent  = computed(() => {
  return depAmount.value * 0.05 ? depAmount.value * 0.05 : ''
})

const usdtExhangeRate = computed(() => {
  const result = usdtObject.value?.money / usdtRate.value;
  return result ? result.toFixed(2) : "";
});

const copyToClipboard = (textToCopy) => {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      messageApi.info(`Copied: ${textToCopy}`);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};

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

  if (index === 1) {
    refetchUsdt();
    refetcTronLink();
    usdt.value = true;
  }
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

const {} = useQuery({
  queryKey: ["depAmt"],
  enabled: true,
  queryFn: () =>
    axiosGet("/api/native/v2/getDiscountAmount.do?payId=114&depositType=1"),
  select: (data) => {
    depositedAmount.value = data;
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

const { refetch: refetchUsdt } = useQuery({
  queryFn: () => axiosGet("/api/native/v2/usdtInfo.do"),
  queryKey: ["usdt"],
  select: (data) => {
    usdtRate.value = data?.data?.content?.depositRate;
  },
  onError: (err) => console.log(err),
});
const { refetch: refetcTronLink } = useQuery({
  queryFn: () => axiosGet("/api/native/v2/getUserTronLink.do"),
  queryKey: ["tron"],
  select: (data) => {},
  onError: (err) => console.log(err),
});

const { mutate: onlinePay } = useMutation({
  mutationFn: (payload) => axiosPost3("/api/native/v2/onlinePay.do", payload),
  onSuccess: (data) => {
    data?.msg && messageApi.info(data?.msg);
  },
  onError: (err) => console.log(err),
});
const onPay = () => {
  if (!depAmount.value) {
    messageApi.info("Input amount cant be blank!");
    return;
  }
  onlinePay({
    amount: depAmount.value,
    payId: 114,
    bankCode: "PIX",
    joinDepositGift: 2,
  });
  depAmount.value = "";
};
const { mutate: mutatePay } = useMutation({
  mutationFn: (payload) => axiosPost3("/api/native/v2/submit_pay.do", payload),
  onSuccess: (data) => {
    data?.message ? messageApi.info(data?.message) : "";
  },
  onError: (err) => console.log(`this is ${err}`),
});

const usdtPay = () => {
  if (
    !usdtObject.value.money ||
    !usdtObject.value.depositVirtualTransactionId ||
    !usdtObject.value.depositor
  ) {
    messageApi.info("Dont Leave Blank");
    return;
  }
  mutatePay(usdtObject.value);
};

const mPay = () => {
  if (!maxAmount.value || !payNotes.value) {
    messageApi.info(`input amount or payer's name!`);
    return;
  }
  mutatePay({
    joinDepositGift: 2,
    money: maxAmount.value,
    bankId: 30,
    depositor: payNotes.value,
    payMethod: 2,
    bankCode: "VISA",
    bankName: "VISA",
    depositVirtualTransactionId: "",
  });
  maxAmount.value = "";
  payNotes.value = "";
};

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

@media screen and (min-width: 430px) {
  .custom1 {
    width: 7.3rem;
  }
}
</style>

