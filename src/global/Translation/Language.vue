<template>
  <div>
    <div class="border-[.001rem] border-txt2 p-[.1rem] rounded-[.1rem]">
      <div
        v-for="(lang, index) in language"
        :key="index"
        :class="['border-b-[.01rem] border-txt2 h-[1rem]', index === language.length - 1 ? 'border-b-0' : '']"
      >
        <span
          @click="lang.func()"
          class="text-[white] h-[1.5rem] flex justify-between items-center text-[.4rem]"
        >
          {{ lang.name }}
          <a-radio
            v-model="selecetedLanguage"
            :value="lang.name"
            @click="selectLanguage(lang.name)"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const selecetedLanguage = ref("");

import { messageApi } from "@/components/antUi/antMessage";
import { changeLang } from "@/global/Translation/translation.js";
const { changeLanguage } = changeLang();
const language = ref([
  { name: "简体中文", func: () => changeLanguage("cn") },
  { name: "English", func: () => changeLanguage("eng") },
  { name: "Portugues", func: () => changeLanguage("spn") },
  {name: 'Melayu', func: () => changeLanguage('mly')},
  {name: 'Indonesia', func: () => changeLanguage('ind')},
  {name: 'Tiếng Việt', func: () => changeLanguage('vtn')},
  {name: 'हिन्दी', func: () => changeLanguage('hnd')},
  {name: '日本語', func: () => changeLanguage('jpn')},
  {name: 'ไทย', func: () => changeLanguage('thn')},

]);

const selectLanguage = (lang) => {
  selecetedLanguage.value = lang;
  if (lang) {
    messageApi.info(`Change Language to ${lang}`);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
};
</script>

<style lang="scss" scoped></style>
