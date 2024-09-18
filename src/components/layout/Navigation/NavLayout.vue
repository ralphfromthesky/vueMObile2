<template>
    <div class="bg-[#1a45b1] h-screen">
        <div>
            <VantTabs :title-links="navLinks" :component-pass="[EventPage, Task, VipPage, Redemption, Pendente,JurosMainPage, Historico]"/>
        </div>
        <BottomNavbar/>
    </div>
</template>

<script setup>
import VantTabs from '@/components/vantUi/vantTabs.vue';
import BottomNavbar from './BottomNavbar.vue';
import { ref } from 'vue';
import VipPage from '@/views/Vip/VipPage.vue';
import Task from '@/views/Task/task.vue';
import Redemption from '@/views/Redemption/redemption.vue';
import Pendente from '@/views/Pendente/Pendente.vue';
import JurosMainPage from '@/views/Juros/JurosMainPage.vue';
import Historico from '@/views/Records/historico.vue';
import EventPage from '@/views/Event/EventPage.vue';








const navLinks = ref([
  {title: 'Events'},
  {title: 'Mission'}, 
  {title: 'Vip'},
  {title: 'Redemption'},
  {title: 'Pendentets'},
  {title: 'Juros'}, 
  {title: 'History'}

])
</script>

<style lang="scss" scoped>

</style>