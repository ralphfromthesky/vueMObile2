import { ref } from "vue";

export const useHindi = () => {
  const hnd = ref({
    ts0001: "सुप्रभात",
    ts0002: "शाम शुभ",
    ts0003: "शुभ रात्रि",
    ts0004: "21 लोकप्रिय खेलों में से 9 खेल दिखा रहे हैं",
    ts0005: "और अधिक लोड करें",
  });
  return {
    hnd,
  };
};
