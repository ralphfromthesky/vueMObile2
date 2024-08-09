import { ref, watch, onMounted } from "vue";

import { useChinese } from "@/global/Translation/cn.js";
import { useSpanish } from "@/global/Translation/spn.js";
import { useEnglish } from "@/global/Translation/eng.js";
import { useThaiMassage } from "@/global/Translation/thn.js";
import { useIndonesia } from "@/global/Translation/ind.js";
import { useMalaysia } from "@/global/Translation/mly.js";
import { useJapanese } from "@/global/Translation/jpn.js";
import { useHindi } from "@/global/Translation/hnd.js";
import { useVietnam } from "@/global/Translation/vtn.js";

export const changeLang = () => {
  const { cn } = useChinese();
  const { eng } = useEnglish();
  const { spn } = useSpanish();
  const { thn } = useThaiMassage();
  const { ind } = useIndonesia();
  const { mly } = useMalaysia();
  const { jpn } = useJapanese();
  const { hnd } = useHindi();
  const { vtn } = useVietnam();

  const storedLanguage = localStorage.getItem("language") || "cn";

  const currentLanguage = ref(
    storedLanguage === "eng"
      ? eng.value
      : storedLanguage === "spn"
      ? spn.value
      : storedLanguage === "thn"
      ? thn.value
      : storedLanguage === "ind"
      ? ind.value
      : storedLanguage === "mly"
      ? mly.value
      : storedLanguage === "jpn"
      ? jpn.value
      : storedLanguage === "hnd"
      ? hnd.value
      : storedLanguage === "vtn"
      ? vtn.value
      : cn.value
  );

  const lang = (key) => {
    return currentLanguage.value[key] || "";
  };

  const changeLanguage = (language) => {
    switch (language) {
      case "cn":
        currentLanguage.value = cn.value;
        break;
      case "eng":
        currentLanguage.value = eng.value;
        break;
      case "spn":
        currentLanguage.value = spn.value;
        break;
      case "thn":
        currentLanguage.value = thn.value;
        break;
      case "mly":
        currentLanguage.value = mly.value;
        break;
      case "ind":
        currentLanguage.value = ind.value;
        break;
      case "jpn":
        currentLanguage.value = jpn.value;
        break;
      case "hnd":
        currentLanguage.value = hnd.value;
        break;
      case "vtn":
        currentLanguage.value = vtn.value;
        break;
      default:
        currentLanguage.value = cn.value;
    }
    localStorage.setItem("language", language);
  };

  watch(currentLanguage, (newVal) => {}, { deep: true });

  onMounted(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    }
  });

  return {
    lang,
    changeLanguage,
  };
};
