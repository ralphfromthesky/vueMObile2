<template>
    <main>
        <div class="mainDiv flex items-center  top-0 h-[.9rem] bg-[#05309F] border-b border-b-[#3A61C2]">
            <div class="flex items-center relative w-screen p-[.2rem]">
                <div class="absolute" @click="this.$router.go(-1)">
                    <img src="/images/return.png" class="w-[.3rem]" alt="">
                </div>
                <div class="flex justify-center w-full">
                    <span class="text-white text-[.3rem]">{{ props.title }}</span>
                </div>
            </div>
        </div>
        <div class="flex bg-[red]">
            <section class=" bg-[#1a45b1] h-[calc(100vh-.9rem)] mainDiv2 w-screen overflow-auto">
                <div class=" flex items-center justify-center w-full">
                    <slot></slot>
                </div>
            </section>
        </div>
    </main>
</template>
<script setup>
const props = defineProps({
    title: { type: String, required: true }
})


</script>

<style scoped>
@media (min-width: 432px) {
      .mainDiv {
        /* width: 7.3rem; */
        width: auto;

      }
    }
    @media (max-width: 432px) {
      .mainDiv {
        /* width: 7.3rem; */
        width: 100%;
        position: fixed;

      }
      .mainDiv2 {
        margin-top: .9rem;
      }
    }
</style>