<template>
    <Toast v-if="errorToastReg" :close="errorToastReg" :messageReg="msgReg" @closeReg="errorToastReg = false"
        class="absolute top-[-1.3rem]" />
    <form @submit.prevent="handleRegister">
        <div class="flex flex-col w-full h-[7rem] overflow-auto">
            <div class="flex items-center justify-center gap-[.1rem]">
                <div class="flex items-center flex-col justify-center w-fit px-[.1rem]">
                    <div class="flex items-center gap-[.1rem]">
                        <!-- <div v-if="getAccountData && getAccountData.length">
                                <div v-for="(data, index) in getAccountData" :key="index" class="text-white">
                                    <input type="text" :name="data.eleName">
                                </div>
                            </div> -->
                        <img src="/images/1.png" alt="" class="w-[.3rem]" />
                        <span class="text-[.26rem] font-medium text-[#FFF0BB]">Register</span>
                    </div>
                    <div class="w-full bg-[#FFF0BB] p-[.021rem] px-[.62rem] rounded-full mt-[.1rem]"></div>
                </div>
            </div>
            <div class="flex flex-col mt-[.2rem] w-full">
                <div v-for="(regConfigData, index) in regConfig" :key=index class="flex flex-col">
                    <div v-if="regConfigData?.eleName === 'rpwd'" class=" flex items-center gap-[.1rem]">
                        <div class="text-white">Forca</div>
                        <div class="flex gap-[.1rem]">
                            <div :class="passwordStrength >= 1 ? 'bg-[#f04646]' : 'bg-[#3A61C2]'"
                                class="h-[.10rem] w-[1rem] rounded">
                            </div>
                            <div :class="passwordStrength >= 2 ? 'bg-[#faee42]' : 'bg-[#3A61C2]'"
                                class="h-[.10rem] w-[1rem] rounded">
                            </div>
                            <div :class="passwordStrength >= 3 ? 'bg-[#fcff43]' : 'bg-[#3A61C2]'"
                                class="h-[.10rem] w-[1rem] rounded">
                            </div>
                            <div :class="passwordStrength >= 4 ? 'bg-[#40ff40]' : 'bg-[#3A61C2]'"
                                class="h-[.10rem] w-[1rem] rounded">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center flex-col w-full my-[.2rem] relative"
                        :class="regConfigData?.eleName === 'rpwd' && `mt-0`">
                        <div class="flex items-center absolute left-[.15rem] gap-[.05rem] top-[.1rem]">
                            <img :src="`/images/` + regConfigData?.eleName + `.png`" alt="" class="w-[.3rem]" />
                            <span class="relative top-[.06rem] text-[#FF4A4A]">*</span>
                        </div>
                        <input
                            :type="showTextOrPw(regConfigData.eleName, eye, eye2)"
                            :placeholder="regConfigData.name" :name="regConfigData.eleName" @change="(e) => handleChange(e)"
                            class="w-full outline-none bg-transparent text-white border  rounded-[.1rem] p-[.1rem] pl-[.7rem] pr-[.6rem] focus:border-[#FFF0BB] focus:font-bold placeholder:text-[#6FA4EF]" 
                            :class="data?.success === false ?  'border-[.05rem] border-[red]' : 'border-[#3a61c2]'"
                            />
                        <!-- <p v-if="data?.success === false" class="text-[#FFF0BB] text-[.2rem] mb-0">
                            {{ data?.msg }}</p> -->
                            
                            
                            <img v-if="regConfigData?.eleName === 'captcha'" :src="registerCode" alt=""
                            class="w-[1rem] absolute right-[.15rem] rounded-[.11rem]" />
                
                        <img v-if="regConfigData?.eleName === 'pwd' || regConfigData?.eleName === 'rpwd'"
                            :src="isVisible(regConfigData.eleName) ? '/profileImages/eye-slash-1.png' : '/profileImages/eye-1.png'" alt="" class="w-[.4rem] absolute right-[.15rem] top-[.15rem]" @click="showPW(regConfigData?.eleName)" />
                        <!-- <div class="flex items-center gap-[.1rem] absolute -bottom-[.3rem]" v-if="regNameInput">
                            <img src="/images/warning.png" alt="." class="w-[.18rem] h-[.184rem] mt-[.03rem]" />
                            <span class="text-[#FF4A4A] text-[.18rem]">4-16 caráter bit, suporte em
                                inglês/números</span>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="flex items-center">
                    <input
                        class="relative h-[.3rem] w-[.3rem] rounded-[.02rem] appearance-none border-[.01rem] border-solid border-[#3A61C2] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-[#04BE02] checked:bg-[#04BE02] checked:before:opacity-[0.16] checked:after:absolute checked:after:block checked:after:h-[0.2rem] checked:after:w-[0.1rem] checked:after:ml-[.08rem] checked:after:mt-[.02rem] checked:after:rotate-45 checked:after:border-[0.04rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer"
                        type="checkbox" value="" id="rememberCheckBox" />
                    <label class="inline-block ps-[0.15rem] hover:cursor-pointer text-white text-[.22rem]"
                        for="rememberCheckBox">
                        Lembrar Senha
                    </label>
                </div>
                <span class="text-[.22rem] text-[#FFF0BB] cursor-pointer">Esqueceu a Senha?</span>
            </div>
            <div class="w-full my-[.2rem]">
                <!-- <button @click="register"
                    class="w-full registerModalButton bg-[#FFF0BB] border border-[#FFF0BB] text-[.24rem] h-[.7rem] text-[#05309F] rounded-[.14rem]">
                    Register
                </button> -->
                <AntButton title="Register" bg="#FFF0BB" h=".72rem" w="100%" b=".1rem" ft=".3rem"  @click="register"/>

            </div>
            <div class="flex justify-around">
                <span class="text-[#FFF0BB] text-[.22rem]" @click="() => router.push('/support')">Suporte</span>
                <span class="text-[#FFF0BB] text-[.22rem]" @click="regGuest">Jogar Grátis</span>
                <span class="text-[#FFF0BB] text-[.22rem]" @click="loginModal = !loginModal">Login uma Conta</span>
            </div>
        </div>
    </form>
    <AntModal
        :isOpen="loginModal"
        :componentPass="Login"
        :backGrounds="true"
      />
</template>
<script setup>
import Toast from "@/components/ToastComponent/Toast.vue";
import { useRegister } from "@/global/registerQuery.js";
import Login from "@/components/layout/LoginComponent/LoginForm.vue";
import {useGetUserInfo} from '@/global/getUserInfo.js'
const {query } = useGetUserInfo();
import router from "@/router";
import { useStore } from "@/store/store.js";
import { onMounted, ref, watchEffect, computed } from 'vue';
import { useGetGlobalConfigInfo } from "@/global/globalConfigInformation.js";
const {registerConfig} = useGetGlobalConfigInfo()
import {registerGuest} from '@/global/missionEvent.js'
import { messageApi } from "@/components/antUi/antMessage";

const eye = ref(false)
const eye2 = ref(false)
const loginModal = ref(false)
const passwordStrength = ref(0);
const {guest} = registerGuest()
const regGuest = () => {
    guest.mutate();
    query.refetch()
}
const store = useStore()

const regConfig = ref([])
const { registration } = useGetGlobalConfigInfo()
const {data, isSuccess} = registration;
const { registerCode } = useGetGlobalConfigInfo()

var formData = {}

watchEffect(() => {
    regConfig.value = store.state.registerConfig.content
})

function handleChange(e) {
    formData = ({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'pwd' || e.target.name === 'rpwd') {
    passwordStrength.value = calculatePasswordStrength(e.target.value);
  }
}

function register() {

    registration.mutate(formData)
    // query.refetch()

}



function calculatePasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength;
}

const showTextOrPw = (types) => {
    if(types === "username") {
        return 'text'
    }
    if(types === 'pwd') {
        return eye.value ? 'text' : 'password'
    }
    if(types === 'rpwd') {
        return eye2.value ? 'text' : 'password'
    }
 
}


const isVisible = (types) => {
    if(types === 'pwd') {
        return eye.value
    }
    if(types === 'rpwd') {
        return eye2.value
    }
}

const showPW = (name) => {
    if(name === 'pwd') {
        eye.value = !eye.value
    }
    if(name === 'rpwd') {
        eye2.value = !eye2.value
    }
    
}

onMounted(() => {
    registerConfig.refetch()
})
</script>