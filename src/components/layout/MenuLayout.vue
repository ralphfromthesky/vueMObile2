<template>
    <main>
        <div class="flex bg-[#1a45b1]">
            <section class="custom1 h-screen w-screen overflow-auto mb-[1rem]">
                <div class="flex items-center justify-center w-full">
                    <slot></slot>
                </div>
            </section>
        </div>
        <BottomNavbar></BottomNavbar>
    </main>
</template>
<script setup>
import BottomNavbar from './Navigation/BottomNavbar.vue'
</script>
<style scoped>
@media screen and (max-width: 432px) {
    .custom1 {
        margin-top: 1rem;
    }
}
</style>