import { ref } from "vue";

export const useChinese = () => {
  const cn = ref({ "ts0001": "早上好",
  ts0001: "下午好",
   ts0002: "下午好",
    ts0003: "晚上好", 
    ts0004: '显示 9 个游戏中的 21 个热门游戏',
    ts0005: '加载更多',


});
  return {
    cn,
  };
};
