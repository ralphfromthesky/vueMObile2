<template>
  <div>
    <!-- <a-button type="primary" @click="showModal">Open Modal</a-button> -->
    <a-modal
      v-model:open="open"
      @ok="handleOk"
      :v-if="isOpen"
      :footer="null"
      :closable="false"
      :maskClosable="false"
      centered
      :class="{ modas: props.bgColor, customColor: props.backGrounds, customKadyot: store.state.setThemes.lightTheme, customKadyot2:store.state.setThemes.darkTheme }"
      @cancel="handeClose"
      class="modal431px"
    >
      <component :is="componentPass" @close="handleOk"></component>
      <div
        class="flex justify-center text-[.7rem] font-bold text-[#d4d0d0] h-[4rem] flex-col text-center"
        v-if="props.elementPass"
      >
        <div class="text-[.7rem] text-[#d4d0d0]">{{ props.elementPass }}</div>
        <span class="text-[.7rem] text-[red]">Receive</span>
      </div>
      <div v-if="props.themePass">
        <div
          :class="[
            'border-2  px-1 rounded-[.1rem]',
            store.state.setThemes.lightTheme ? 'bg-[#f08abd] text-[white] border-[white]' : 'bg-[#05309F] text-[white]',
            store.state.setThemes.darkTheme ? 'bg-[black] text-[red] border-[white]' : 'bg-[#05309F] text-[white]'
          ]"
        >
          <div class="text-[.5rem] text-center">
            {{ props.themePass }}
          </div>
          <div class="flex flex-col text-[.3rem]">
            <span class="flex justify-between"
            @click="changeThisTheme('dark')"

              >Dark

              <input
                type="radio"
                v-model="selectedTheme"
                :value="store.state.setThemes.setThemes2.dark"
                name=""
                id=""
              />
            </span>
            <span class="flex justify-between"
            @click="changeThisTheme('light')"

              >Light
              <input
                type="radio"
                v-model="selectedTheme"
                :value="store.state.setThemes.setThemes2.light"
                name=""
                id=""
              />
            </span>
            <span class="flex justify-between"
            @click="changeThisTheme('standard')"

              >Standard
              <input
                type="radio"
                v-model="selectedTheme"
                name=""
                :value="store.state.setThemes.setThemes2.standard"
                id=""
                value="standard"
              />
            </span>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center text-[.7rem] font-bold text-[#d4d0d0] flex-col text-center"
        v-if="props.dataCode"
      >
        <span><img src="/public/turnlateImages/pic2.81cd4374.png" /></span>
        <div
          class="text-[.3rem] h-[5rem] overflow-auto text-left bg-bg border-2 border-txt rounded-[.2rem] text-txt p-[.1rem]"
        >
          {{ props.dataCode }}
        </div>
        <div>
          <a href="https://vk8.me/app/mg_MP6D" target="_blank">
            <span
              class="bg-bg w-[4rem] p-[.2rem] text-txt border-2 border-txt rounded-[.2rem]"
              >App Download</span
            ></a
          >
        </div>
      </div>
      {{ props.pass }}
      <div v-if="props.numberPass" class="text-[white]">
        <span class="text-[.7rem] flex justify-center"
          >Bet {{ props.numberPass }}?
        </span>
        <div class="mb-1">
          <input
            type="text"
            class="py-[.2rem] rounded-[.1rem] pl-[.2rem] text-black w-full"
            v-model="nameInput"
            placeholder="Type your name here!"
          />
        </div>
        <div class="flex justify-center gap-1">
          <span
            class="p-[.1rem] px-2 rounded-[.1rem] font-bold bg-bg text-txt"
            @click="paided"
            >Yes</span
          >
          <span class="p-[.1rem] px-2 rounded-[.1rem] font-bold bg-bg text-txt"
            >No</span
          >
        </div>
      </div>

      <span
        class="absolute registerModalButton left-[45%] bottom-[-.8rem]"
        id="handleThis"
        @click="handleOk"
      >
        <CloseOutlined
          class="text-bg text-[.3rem] border-4 border-bg p-[.1rem] rounded-[50%]"
        />
      </span>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, defineExpose, onUnmounted } from "vue";
import { CloseOutlined } from "@ant-design/icons-vue";
import { useLogin } from "@/global/loginQuery.js";
const { loginMutation } = useLogin();
import { useStore } from "@/store/store";
import { messageApi } from "./antMessage";
const store = useStore();
const nameInput = ref("");
const a = ref()

const selectedTheme = ref(a.value)

const showModal = () => {
  open.value = true;
};
const handleOk = () => {
  open.value = false;
  emits("closed", false);
  store.commit("setModalErr", false);
  store.commit("setAntMOdal", false);
};

const paided = () => {
  if (nameInput.value === "") {
    messageApi.info("Please Type Name");
    return;
  }
  emits("paid", true);
  emits("selectedNums", props.numberPass);
  emits("bettorName", nameInput.value);
  console.log("fsf");
};

const handeClose = () => {
  open.value = false;
};

const emits = defineEmits(["closed", "paid", "selectedNums", "bettorName"]);

const changeThisTheme = (themes) => {
  store.commit("setLightTheme", false);
  store.commit("setDarkTheme", false);
  if (themes === "light") {
    store.commit("setLightTheme", true);
    a.value = store.state.setThemes2.light
  }
  if (themes === "dark") {
    store.commit("setDarkTheme", true);
    a.value = store.state.setThemes2.dark

  }
  if (themes === "standard") {
    a.value = store.state.setThemes2.standard
    store.commit("setLightTheme", false);
    store.commit("setDarkTheme", false);
  }
  console.log(a.value)
};

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  pass: {
    type: String,
  },
  title: String,
  componentPass: {
    type: Object,
    default: () => ({}),
  },

  bgColor: {
    type: Boolean,
    default: false,
  },
  backGrounds: {
    type: Boolean,
    default: false,
  },
  newMessage: {
    type: String,
    default: "",
  },
  elementPass: {
    type: Object,
    required: false,
  },
  dataCode: {
    type: String,
    required: false,
    default: "",
  },
  numberPass: {
    type: String,
    required: false,
    default: null,
  },
  themePass: {
    type: String,
    default: "",
    required: false,
  },
});

const open = ref(props.isOpen);
watch(
  () => props.isOpen,
  (newVal) => {
    open.value = newVal;
  }
);

watch(
  () => store.state.openDeposit,
  (newVal) => {
    if (newVal) {
      handleOk();
    }
  }
);

onMounted(() => {
  console.log(a.value)

})
</script>

<style>
.modas .ant-modal-content {
  background-color: transparent;
}

.customColor .ant-modal-content {
  background-color: #05309f;
}
@media (min-width: 431px) {
  .modal431px {
    width: 7rem !important;
  }
}

.customKadyot .ant-modal-content  {
  background-color: rgb(219, 131, 183);
}


.customKadyot2 .ant-modal-content  {
  background-color: rgb(48, 47, 47);
}

</style>
