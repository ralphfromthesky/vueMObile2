import { ref } from "vue";

export const useThaiMassage = () => {
  const htn = ref({
    ts0001: "สวัสดีตอนเช้า",
    ts0002: "สวัสดีตอนบ่าย",
    ts0003: "สวัสดีตอนค่ำ",
    ts0004: "แสดง 9 เกมจาก 21 เกมยอดนิยม",
    ts0005: "โหลดเพิ่มเติม",
  });
  return {
    htn,
  };
};
