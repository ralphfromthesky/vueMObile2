<template>
  <div
    :class="[
      'flex items-center p-[.15rem]  w-full h-[1.2rem] relative',
      stores.state.setThemes.lightTheme
        ? 'bg-[#f08abd] text-[white]'
        : 'bg-[#062064]',
      stores.state.setThemes.darkTheme
        ? 'bg-[#1d1c1c]  text-[white]'
        : 'bg-[#05309F] text-[white]'
    ]"
  >
    <div class="flex justify-between w-full items-center">
      <div class="flex gap-[.05rem] items-center">
        <img
          src="/images/logoSide.png"
          :class="
            newStore.state.sideBar
              ? `w-[.5rem] h-[.5rem] -rotate-180 transition-all`
              : `w-[.5rem] h-[.5rem] rotate-0 transition-all`
          "
          @click="newStore.commit('setsideBar')"
        />
        <img src="/images/logo.png" class="w-full h-[1rem]" />
      </div>
      <div
        class="flex gap-[.2rem] items-center"
        v-if="!newStore.state.userInfo.isLogin"
      >
        <AntButton title="Login" bg="#FFF0BB" h=".6rem" w="1.5rem" b=".1rem" ft=".22rem"  @click="newStore.commit('setloginModal', true)"/> 
        <AntButton title="Register" bg="#05309f" h=".6rem" w="1.5rem" b=".1rem" ft=".22rem" :cla="true" @click="newStore.commit('setRegisterModal', true)"/>

        <img
          src="/images/search.png"
          class="w-[.35rem] h-[.35rem]"
          @click="router.push('/search')"
        />
      </div>
      <div
        class="text-white flex items-center gap-[.06rem]"
        v-if="newStore.state.userInfo.isLogin"
      >
        <div
          class="flex items-center border-[.01rem] gap-[.05rem] rounded border-[#3a61c2]"
        >
          <span
            ><img
              src="/BrazilFlag.png"
              class="h-[.4rem] border-[yellow]"
              alt=""
          /></span>
          <!-- <span class="text-[#FFAA09] underline underline-offset-2">{{
            newStore.state.userInfo.money
          }}</span> -->
          <van-rolling-text
            ref="rollingTextRef"
            :start-num="0"
            :target-num="stores.state.userInfo.money"
            class="van"
          />
          <span
            ><img
              :class="{ rotateThis: isRotate }"
              class="w-[.4rem]"
              src="/images/shuaxin.png"
              alt=""
              @click="toggleRotate"
          /></span>
        </div>
        <div
          class="flex items-center gap-[.1rem] bg-[#FFF0BB] text-[#1A45B1] rounded-[.1rem] px-[.1rem]"
          data-twe-dropdown-ref
        >
          <AntButton title="Deposito" bg="#FFF0BB" h=".65rem" w="1rem" b=".1rem" ft=".24rem"  @click="showDeposit"/>

          <span>|</span>
          <span>
            <img
              :class="`w-[.30rem] h-[.30rem] transition-transform duration-300 ${
                isUp ? 'rotate-180' : ''
              }`"
              src="/arrowDown.png"
              type="button"
              aria-expanded="false"
              data-twe-ripple-color="light"
              data-twe-dropdown-toggle-ref
              data-twe-ripple-init
              id="dropdownMenuButton1"
              @click="toggleArrow"
            />
            <ul
              class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-sm border-none bg-[#05309F] bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
              aria-labelledby="dropdownMenuButton1"
              data-twe-dropdown-menu-ref
            >
              <router-link to="/withdraw">
                <li>
                  <a
                    class="block whitespace-nowrap h-[1rem] w-[2rem] text-left pl-[.4rem] bg-[#05309F] text-[.3rem] font-normal text-white hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    data-twe-dropdown-item-ref
                    >Saque</a
                  >
                </li>
              </router-link>
              <router-link to="/juros">
                <li>
                  <a
                    class="block whitespace-nowrap h-[1rem] w-[2rem] text-left pl-[.4rem] mb-[.2rem] bg-[#05309F] text-[.3rem] font-normal text-white hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                    >Juros</a
                  >
                </li>
              </router-link>
            </ul>
          </span>

          <span></span>
        </div>

        <div class="ml-[.1rem]">
          <img
            src="/images/search.png"
            class="w-[.30rem] h-[.30rem]"
            @click="router.push('/search')"
          />
        </div>
      </div>
    </div>
  </div>

  <div v-if="isLogin" class="h-screen bg-[#000000b3] fixed top-0 z-20">
    <div
      v-if="isLogin"
      class="flex flex-col slide-in-bottom absolute top-0 left-0 ease-in-out"
    >
      <Deposit @close="closeDeposit" />
    </div>
  </div>
  <AntModal
    :isOpen="loginModal"
    :componentPass="Login"
    :backGrounds="true"
    v-if="!newStore.state.userInfo.isLogin"
  />
  <AntModal :isOpen="regModal" :componentPass="Register" :backGrounds="true" />
</template>
<script setup>
import { ref, computed, watch, onMounted, defineAsyncComponent } from "vue";
// import Login from "../LoginComponent/LoginForm.vue";
const Login = defineAsyncComponent(() =>
  import("../LoginComponent/LoginForm.vue")
);
const Register = defineAsyncComponent(() =>
  import("../RegisterComponent/RegisterForm.vue")
);
const Deposit = defineAsyncComponent(() =>
  import("@/components/deposit/Deposit.vue")
);

// import Register from "../RegisterComponent/RegisterForm.vue";
// import Deposit from "@/components/deposit/Deposit.vue";
import { useStore } from "@/store/store.js";
import { store } from "../../../store";
import { useGetUserInfo } from "@/global/getUserInfo.js";
import Modal from "../../../components/ModalComponent/Modal.vue";
import ModalRegister from "@/components/ModalComponent/ModalRegister.vue";
import { useLogin } from "@/global/loginQuery.js";
const { mutation } = useLogin();
const closedModal = ref(null);
import router from "@/router";

import { Dropdown, Ripple, initTWE } from "tw-elements";
const isUp = ref(false);
const isRotate = ref(false);
const isLogin = ref(false);
const { query } = useGetUserInfo();
const newStore = useStore();
import { useGetGlobalConfigInfo } from "@/global/globalConfigInformation";
const { registerConfig } = useGetGlobalConfigInfo();
const stores = useStore();
const loginModal = ref(false);
const regModal = ref(false);
const showRegModal = () => {
  registerConfig.refetch();
  regModal.value = !regModal.value;
};

const toggleRotate = () => {
  isRotate.value = !isRotate.value;
  query.refetch();
};

const toggleArrow = () => {
  isUp.value = !isUp.value;
};


const showDeposit = () => {
  isLogin.value = !isLogin.value;
};

const closeDeposit = () => {
  isLogin.value = false;
};

</script>

<style scoped>
@keyframes rotatePause {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.rotateThis {
  animation: rotatePause 10s linear;
}

.van {
  --van-rolling-text-color: white;
  --van-rolling-text-font-size: 0.35rem;
  --van-rolling-text-item-width: 0.2rem;
  --van-rolling-text-gap: -0.05rem;
}
@media (min-width: 431px) {
  .btom {
    width: 22.5%;
  }
}
</style>
