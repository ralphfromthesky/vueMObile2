<template>
    <div class="mainDiv flex items-center p-[.2rem] bg-[#05309F] border-b-[.055rem] border-b-[#3A61C2]  h-[.9rem]  top-0 z-10">
        <div class=" flex gap-[.7rem] items-center overflow-x-auto text-white">
            <router-link to="/event">
                <div class="flex link-content items-center justify-center relative h-[.9rem]">
                    <span class="text-[.27rem]">Eventos</span>
                </div>
            </router-link>
            <router-link to="/task">
                <div class="flex link-content items-center justify-center relative h-[.9rem]">
                    <span class="text-[.27rem]">Mission</span>
                </div>
            </router-link>
                <div class="flex link-content items-center justify-center relative h-[.9rem]" @click="showRegModal('/vip')">
                    <span class="text-[.27rem]">VIP</span>
                </div>
            
                <div class="flex link-content items-center justify-center relative h-[.9rem]"@click="showRegModal('/pendente')" >
                    <span class="text-[.27rem]">Pendente</span>
                </div>
                <div class="flex link-content items-center justify-center relative h-[.9rem]" @click="showRegModal('/juros')">
                    <span class="text-[.27rem]">Juros</span>
                </div>
                <div class="flex link-content items-center justify-center relative h-[.9rem]" @click="showRegModal('/records')">
                    <span class="text-[.27rem]">History</span>
                </div>
        </div>
        <AntModal :isOpen="loginModal" :componentPass="Login" :backGrounds="true" v-if="!store.state.userInfo.isLogin" />

    </div>
</template>

<script setup>
import {ref} from 'vue'
// import Login from "@/components/layout/LoginComponent/LoginForm.vue";
const Login = defineAsyncComponent(() => import ("@/components/layout/LoginComponent/LoginForm.vue"))

import {useStore} from '@/store/store';
const store = useStore()
const loginModal = ref(false)
import { navigateTo } from '@/global/navigation';
import { useRouter } from 'vue-router';

const showRegModal = (path) => {
  !store.state.userInfo.isLogin
    ? (loginModal.value = !loginModal.value)
    : navigateTo(path);
};

</script>

<style scoped>
.router-link-active .link-content {
    border-bottom: 3px solid hsl(47, 100%, 87%);
    color: hsl(47, 100%, 87%);
}

@media (min-width: 431px) {
  .mainDiv {
    width: auto;
  }
}

@media (max-width: 431px) {
  .mainDiv {
    position: fixed;
}
}
</style>