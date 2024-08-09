import { ref } from "vue";

export const useSpanish = () => {
  const spn = ref({
    ts0001: "Buenos días",
    ts0002: "Buenas tardes",
    ts0003: "Buenas noches",
    ts0004: "Mostrando 9 juegos de 21 juegos populares",
    ts0005: "Carregar mais",
  });
  return {
    spn,
  };
};
