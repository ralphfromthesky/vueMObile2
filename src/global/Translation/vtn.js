
  import { ref } from "vue";

 export const useVietnam = () => {
    const vtn = ref(
        {
            "ts0001": "Chào buổi sáng",
            "ts0002": "Chào buổi chiều",
            "ts0003": "Chào buổi tối",
            "ts0004": "Hiển thị 9 trò chơi trong số 21 trò chơi phổ biến",
            "ts0005": "Tải thêm"
          }
    )
    return {
        vtn
    }
 }  