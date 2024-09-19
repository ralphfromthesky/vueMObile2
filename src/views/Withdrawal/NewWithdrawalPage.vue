<template>
    <div>
        <VantTabs :titleLinks="tabName" :component-pass="[WithdrawalPage,WithdrawalRecord, WithdrawalAccount]"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import WithdrawalRecord from './WithdrawalRecord.vue';
import WithdrawalAccount from './WithdrawalAccount.vue';
import WithdrawalPage from './WithdrawalPage.vue';



const tabName = ref([
    {title: "Saque"},
    {title: "Registro de Saques"},
    {title: "Gerenciar Conta"},
    

])

</script>

<style scoped>

</style>