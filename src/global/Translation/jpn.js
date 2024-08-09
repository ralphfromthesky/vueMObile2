import { ref } from "vue";

 export const useJapanese = () => {
    const jpn = ref(
        {
            "ts0001": "おはようございます",
            "ts0002": "こんにちは",
            "ts0003": "こんばんは",
            "ts0004": "21の人気ゲームのうち9つのゲームを表示中",
            "ts0005": "もっと読み込む"
          }
          
    )
    return {
        jpn
    }
 }  