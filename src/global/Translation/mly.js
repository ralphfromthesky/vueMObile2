import { ref } from "vue";

export const useMalaysia = () => {
  const ml = ref({
    ts0001: "Selamat pagi",
    ts0002: "Selamat petang",
    ts0003: "Selamat malam",
    ts0004: "Memaparkan 9 permainan daripada 21 permainan popular",
    ts0005: "Muat lebih banyak",
  });
  return {
    ml,
  };
};
