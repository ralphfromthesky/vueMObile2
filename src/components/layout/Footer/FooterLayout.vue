<template>
    <div class="flex flex-col w-full h-auto p-[.2rem] bg-[#062064] mb-[1.32rem]">
        <div class="flex flex-col justify-center gap-[.5rem]">
            <div class="flex justify-center gap-[.5rem]">
                <div class="flex flex-col leading-[.4rem]">
                    <span class="text-white text-[.25rem]">Casino</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="router.push('/event')">Events</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="router.push('/task')">Mission</span>
                    <span class="text-[#6FA4EF] text-[.25rem]">Rebate</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="router.push('/juros')">Fees</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="router.push('/vip')">VIP</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="router.push('/invite')">Invite</span>
                    <!-- <span class="text-[#6FA4EF] text-[.25rem]">Fundo de previdência</span> -->
                </div>
                <div class="flex flex-col leading-[.4rem]">
                    <span class="text-white text-[.25rem]">Jogos</span>
                    <!-- <span class="text-[#6FA4EF] text-[.25rem]">Brigas Galos</span> -->
                    <!-- <span class="text-[#6FA4EF] text-[.25rem]">Cartas</span> -->
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToGames('127')">Pescaria</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToSection('501')">Featured</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToGames('129')">Popular</span>

                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToGames('124')">Slots</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToGames('503')">Bonus Game</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToGames('263')">Recommend</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToGames('322')">Loteria</span>

                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToGames('123')">Live Casino</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToGames('279')">Like</span>


                    <span class="text-[#6FA4EF] text-[.25rem]" @click="scrollToGames('125')">Sports</span>
                    <!-- <span class="text-[#6FA4EF] text-[.25rem]">Blockchain</span> -->
                </div>
                <div class="flex flex-col leading-[.4rem]">
                    <span class="text-white text-[.25rem]">Suporte</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="router.push('/support')">Suporte online</span>
                    <span class="text-[#6FA4EF] text-[.25rem]" @click="router.push('/suggestion')">Suggestion</span>

                    <span class="text-[#6FA4EF] text-[.25rem]" @click="router.push('/support')">Central de Ajuda</span>
                </div>
            </div>
        </div>
        <div class="w-full p-[.01rem] bg-[#6FA4EF] m-auto my-[.5rem]"></div>
        <div class="flex flex-col gap-[.2rem]">
            <div class="flex gap-[.2rem] justify-center">
                <img src="/images/img_facebook.png" class="w-[.7rem] h-[.7rem]" />
                <img src="/images/img_tg.png" class="w-[.7rem] h-[.7rem]" />
                <img src="/images/img_wa.png" class="w-[.7rem] h-[.7rem]" />
                <img src="/images/img_line.png" class="w-[.7rem] h-[.7rem]" />
                <img src="/images/18plus.png" class="w-[.7rem] h-[.7rem]" />
                <!-- <div class="w-[.7rem] h-[.7rem] bg-[#6FA4EF] rounded-full animate-pulse"></div>
                <div class="w-[.7rem] h-[.7rem] bg-[#6FA4EF] rounded-full animate-pulse"></div>
                <div class="w-[.7rem] h-[.7rem] bg-[#6FA4EF] rounded-full animate-pulse"></div>
                <div class="w-[.7rem] h-[.7rem] bg-[#6FA4EF] rounded-full animate-pulse"></div>
                <div class="w-[.7rem] h-[.7rem] bg-[#6FA4EF] rounded-full animate-pulse"></div> -->
            </div>
            <div class="flex gap-[.2rem] justify-center">
                <img src="/images/img_gfpd_telegram.png" class="w-[.7rem] h-[.7rem]" />
                <!-- <div class="w-[.7rem] h-[.7rem] bg-[#6FA4EF] rounded-full animate-pulse"></div> -->
            </div>
            <div class="flex w-full justify-center items-center my-[.5rem]">
                <!-- <span class="flex text-white text-[.212rem] justify-center items-center text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                    libero voluptatum ut ipsum ratione, minus, sunt corrupti quos adipisci voluptatibus excepturi magni
                    dolores sint? Voluptatem, dolorum. Pariatur doloremque magni debitis.
                </span> -->
            </div>
        </div>
        <!-- <div class="w-full p-[.01rem] bg-[#6FA4EF] m-auto my-[.5rem]"></div> -->
        <div class="flex flex-col gap-[.8rem]">
            <div class="flex justify-center gap-[.2rem] flex-wrap">
                <img src="/images/img_footer_jdb.png" class="h-[.4rem]" />
                <img src="/images/img_footer_ebet.png" class="h-[.4rem]" />
                <img src="/images/img_footer_ky.png" class="h-[.4rem]" />
                <img src="/images/img_footer_bg.png" class="h-[.4rem]" />
                <img src="/images/img_footer_mt.png" class="h-[.4rem]" />
                <!-- <div class="w-[.8rem] h-[.6rem] bg-[#6FA4EF] rounded-[.1rem] animate-pulse"></div>
                <div class="w-[.8rem] h-[.6rem] bg-[#6FA4EF] rounded-[.1rem] animate-pulse"></div>
                <div class="w-[.8rem] h-[.6rem] bg-[#6FA4EF] rounded-[.1rem] animate-pulse"></div>
                <div class="w-[.8rem] h-[.6rem] bg-[#6FA4EF] rounded-[.1rem] animate-pulse"></div>
                <div class="w-[.8rem] h-[.6rem] bg-[#6FA4EF] rounded-[.1rem] animate-pulse"></div> -->
            </div>
        </div>
        <div class="flex justify-center mt-[.8rem] mb-[.2rem]">
            <span class="text-[#6FA4EF] text-[.3rem]">{{store.state.scrollTo}}@Direitos De Autor 2002-2024</span>
        </div>
    </div>
</template>

<script setup>
import router from "@/router";
import {useStore} from "@/store/store.js"
const store = useStore()

const scrollToGames = (id) => {
  store.commit('setScrollTo', id)
  
}
</script>