<template>
    <main>
        <div class="custom1 flex flex-col items-center">
            <div
                class="custom2 flex items-center relative h-[.9rem] p-[.2rem] bg-[#05309F] border-b-[.03rem] border-b-[#3A61C2]">
                <div class="absolute" @click="this.$router.go(-1)">
                    <img src="/images/return.png" class="w-[.3rem]" alt="" />
                </div>
                <div class="flex justify-center w-full">
                    <span class="text-white text-[.3rem]">{{ props.title }}</span>
                </div>
            </div>
            <TabContainer>
                <Tabs title="Rede do Agente" link="/invite" />
                <Tabs title="Link de Convite" link="/invitation" />
                <Tabs title="Comissão" link="/commission" />
                <Tabs title="Desempenho" link="/performance" />
                <Tabs title="Todos os dados" link="/alldata" />
                <Tabs title="Finanças dos Subordinados" link="/directFinance" />
                <Tabs title="Apostas dos Subordinados" link="/directBet" />
                <Tabs title="Dados do subordinado" link="/directData" />
                <Tabs title="Pedidos de subordinados" link="/subrequest" />
                <Tabs title="Directly Reporting" link="/directReport" />
                <Tabs title="Taxa deComissão" link="/commissionrate" />
            </TabContainer>
        </div>
        <div class="flex bg-[#1a45b1]">
            <section class="bg-[#1a45b1] h-[calc(100vh-1.7rem)] custom4  w-screen overflow-auto">
                <div class="flex items-center w-full">
                    <slot></slot>
                </div>
            </section>
        </div>
    </main>
</template>
<script setup>
import Tabs from "./Tabs/TabPage.vue";
import TabContainer from "./Tabs/TabContainer.vue";
const props = defineProps({
    title: { type: String, required: true },
});
</script>
<style scoped>
.router-link-active .link-content {
    border-bottom: 3px solid hsl(47, 100%, 87%);
    color: hsl(47, 100%, 87%);
}
@media screen and (max-width: 430px) {
    .custom1 {
        position: fixed;
        top: auto;
        width: 100%
    }
    .custom2 {
width: 100vw;
    }
    .custom4 {
        margin-top: 1.7rem;
    }
}

@media screen and (min-width: 430px)  {
    .custom2 {
        width: 7.3rem;
    }

}

</style>
